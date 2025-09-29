import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createQLSchema, updateQLSchema } from "../schemas";
import { guestSessionMiddleware, sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, IMAGES_BUCKET_ID, QUICKLINKS_ID } from "@/config";
import { ID } from "node-appwrite";
import { Quicklinks } from "../types";

const app = new Hono()
    /* POST for creating a new quicklink */
    .post(
        "/",
        zValidator("form", createQLSchema),
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");
            const storage = c.get("storage");

            const { title, href, image, description } = c.req.valid("form");

            let uploadedFileId: string | undefined;

            if (image instanceof File) {
                const file = await storage.createFile(
                    IMAGES_BUCKET_ID,
                    ID.unique(),
                    image
                );
                uploadedFileId = file.$id; // store just the Appwrite file ID
            }

            const quicklink = await databases.createDocument({
                databaseId: DATABASE_ID,
                collectionId: QUICKLINKS_ID,
                documentId: ID.unique(),
                data: {
                    title,
                    href,
                    imageUrl: uploadedFileId, // store file ID instead of base64
                    description,
                },
            });

            return c.json({ data: quicklink });
        }
    )

    /* DELETE for deleting quicklinks */
    .delete(
        "/:qlsId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");
            const storage = c.get("storage");

            const { qlsId } = c.req.param();

            const existingQL = await databases.getDocument<Quicklinks>({
                databaseId: DATABASE_ID,
                collectionId: QUICKLINKS_ID,
                documentId: qlsId,
            });

            // delete image from storage if exists
            if (existingQL.imageUrl) {
                await storage.deleteFile(IMAGES_BUCKET_ID, existingQL.imageUrl);
            }

            // delete the document itself
            await databases.deleteDocument({
                databaseId: DATABASE_ID,
                collectionId: QUICKLINKS_ID,
                documentId: qlsId,
            });

            return c.json({ data: { $id: existingQL.$id } });
        }
    )

    /* GET for getting all quicklinks */
    .get(
        "/",
        guestSessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const quicklinks = await databases.listDocuments<Quicklinks>({
                databaseId: DATABASE_ID,
                collectionId: QUICKLINKS_ID,
            });

            return c.json({ data: quicklinks });
        }
    )

    /* GET for get single quicklink */
    .get(
        "/:qlsId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { qlsId } = c.req.param();

            const existingQL = await databases.getDocument<Quicklinks>({
                databaseId: DATABASE_ID,
                collectionId: QUICKLINKS_ID,
                documentId: qlsId
            });

            return c.json({ data: existingQL });
        }
    )

    /* PATCH for updating quicklink details */
    .patch(
        "/:qlsId",
        sessionMiddleware,
        zValidator("form", updateQLSchema),
        async (c) => {
            const databases = c.get("databases");
            const storage = c.get("storage");

            const { qlsId } = c.req.param();
            const { title, href, imageUrl, description } = c.req.valid("form");

            let uploadedFileId: string | undefined;

            if (imageUrl instanceof File) {
                const file = await storage.createFile(
                    IMAGES_BUCKET_ID,
                    ID.unique(),
                    imageUrl
                );
                uploadedFileId = file.$id;
            } else if (typeof imageUrl === "string" && imageUrl.startsWith("http")) {
                // strip Appwrite URL, keep only the ID
                const match = imageUrl.match(/files\/([^/]+)\//);
                uploadedFileId = match ? match[1] : undefined;
            } else {
                uploadedFileId = imageUrl; // already an ID
            }

            const quicklink = await databases.updateDocument(
                DATABASE_ID,
                QUICKLINKS_ID,
                qlsId,
                {
                    title,
                    href,
                    imageUrl: uploadedFileId,
                    description
                }
            );

            return c.json({ data: quicklink });
        }
    )

export default app;