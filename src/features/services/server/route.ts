import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createServiceSchema, updateServiceSchema } from "../schemas";
import { guestSessionMiddleware, sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, IMAGES_BUCKET_ID, SERVICES_ID } from "@/config";
import { ID } from "node-appwrite";
import { ServiceDoc } from "../types";

const app = new Hono()
    /* POST for creating a new service */
    .post(
        "/",
        zValidator("form", createServiceSchema),
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");
            const storage = c.get("storage");

            const {
                icon,
                title,
                shortDesc,
                image,
                category,
                details
            } = c.req.valid("form");

            let uploadedFileId: string | undefined;

            if (image instanceof File) {
                const file = await storage.createFile(
                    IMAGES_BUCKET_ID,
                    ID.unique(),
                    image
                );
                uploadedFileId = file.$id; // store just the Appwrite file ID
            }

            const service = await databases.createDocument({
                databaseId: DATABASE_ID,
                collectionId: SERVICES_ID,
                documentId: ID.unique(),
                data: {
                    icon,
                    title,
                    shortDesc,
                    image: uploadedFileId, // store file ID instead of base64
                    category,
                    details
                },
            });

            return c.json({ data: service });
        }
    )

    /* DELETE for deleting service */
    .delete(
        "/:serviceId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");
            const storage = c.get("storage");

            const { serviceId } = c.req.param();

            const existingService = await databases.getDocument<ServiceDoc>({
                databaseId: DATABASE_ID,
                collectionId: SERVICES_ID,
                documentId: serviceId,
            });

            // delete image from storage if exists
            if (existingService.image) {
                await storage.deleteFile(IMAGES_BUCKET_ID, existingService.image);
            }

            // delete the document itself
            await databases.deleteDocument({
                databaseId: DATABASE_ID,
                collectionId: SERVICES_ID,
                documentId: serviceId,
            });

            return c.json({ data: { $id: existingService.$id } });
        }
    )

    /* GET for getting all services */
    .get(
        "/",
        guestSessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const services = await databases.listDocuments<ServiceDoc>({
                databaseId: DATABASE_ID,
                collectionId: SERVICES_ID,
            });

            return c.json({ data: services });
        }
    )

    /* GET for get single quicklink */
    .get(
        "/:serviceId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { serviceId } = c.req.param();

            const existingService = await databases.getDocument<ServiceDoc>({
                databaseId: DATABASE_ID,
                collectionId: SERVICES_ID,
                documentId: serviceId
            });

            return c.json({ data: existingService });
        }
    )

    /* PATCH for updating quicklink details */
    .patch(
        "/:serviceId",
        sessionMiddleware,
        zValidator("form", updateServiceSchema),
        async (c) => {
            const databases = c.get("databases");
            const storage = c.get("storage");

            const { serviceId } = c.req.param();
            const { icon, title, shortDesc, image, category, details } = c.req.valid("form");

            let uploadedFileId: string | undefined;

            if (image instanceof File) {
                const file = await storage.createFile(
                    IMAGES_BUCKET_ID,
                    ID.unique(),
                    image
                );
                uploadedFileId = file.$id;
            } else if (typeof image === "string" && image.startsWith("http")) {
                // strip Appwrite URL, keep only the ID
                const match = image.match(/files\/([^/]+)\//);
                uploadedFileId = match ? match[1] : undefined;
            } else {
                uploadedFileId = image; // already an ID
            }

            const service = await databases.updateDocument(
                DATABASE_ID,
                SERVICES_ID,
                serviceId,
                {
                    icon,
                    title,
                    shortDesc,
                    image: uploadedFileId,
                    category,
                    details
                }
            );

            return c.json({ data: service });
        }
    )

export default app;