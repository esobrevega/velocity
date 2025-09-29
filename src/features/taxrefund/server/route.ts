import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { guestSessionMiddleware, sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, TAXREFUND_ID } from "@/config";
import { ID } from "node-appwrite";
import { createTRSchema, updateTRSchema } from "../schemas";
import { TaxRefunds } from "../types";

const app = new Hono()
    /* POST for creating a new taxrefund */
    .post(
        "/",
        zValidator("form", createTRSchema),
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { state, href } = c.req.valid("form");

            const taxrefund = await databases.createDocument({
                databaseId: DATABASE_ID,
                collectionId: TAXREFUND_ID,
                documentId: ID.unique(),
                data: {
                    state,
                    href,
                },
            });

            return c.json({ data: taxrefund });
        }
    )

    /* DELETE for deleting taxrefund */
    .delete(
        "/:trsId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { trsId } = c.req.param();

            const existingTR = await databases.getDocument<TaxRefunds>({
                databaseId: DATABASE_ID,
                collectionId: TAXREFUND_ID,
                documentId: trsId,
            });

            await databases.deleteDocument({
                databaseId: DATABASE_ID,
                collectionId: TAXREFUND_ID,
                documentId: trsId,
            });

            return c.json({ data: { $id: existingTR.$id } });
        }
    )

    /* GET for getting all taxrefund */
    .get(
            "/",
            guestSessionMiddleware,
            async (c) => {
                const databases = c.get("databases");

                const taxrefunds = await databases.listDocuments<TaxRefunds>({
                    databaseId: DATABASE_ID,
                    collectionId: TAXREFUND_ID,
                });

                return c.json({ data: taxrefunds });
            }
        )

    /* GET for get single taxrefund */
    .get(
        "/:trsId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { trsId } = c.req.param();

            const existingTR = await databases.getDocument<TaxRefunds>({
                databaseId: DATABASE_ID,
                collectionId: TAXREFUND_ID,
                documentId: trsId
            });

            return c.json({ data: existingTR });
        }
    )

    /* PATCH for updating taxrefund details */
    .patch(
        "/:trsId",
        sessionMiddleware,
        zValidator("form", updateTRSchema),
        async (c) => {
            const databases = c.get("databases");
            const { trsId } = c.req.param();
            const { state, href } = c.req.valid("form");

            const taxrefund = await databases.updateDocument(
                DATABASE_ID,
                TAXREFUND_ID,
                trsId,
                {
                    state,
                    href,
                }
            );

            return c.json({ data: taxrefund });
        }
    )

export default app;