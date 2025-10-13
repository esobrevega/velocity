import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { guestSessionMiddleware, sessionMiddleware } from "@/lib/session-middleware";
import { CONTACT_ID, DATABASE_ID } from "@/config";
import { ID } from "node-appwrite";
import { ContactUs } from "../types";
import { createContactSchemaBE } from "../schemas";

const app = new Hono()
    /* POST for creating a new contact */
    .post(
        "/",
        zValidator("form", createContactSchemaBE),
        guestSessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { name, phoneNumber, email, service, time, message } = c.req.valid("form");

            const contact = await databases.createDocument({
                databaseId: DATABASE_ID,
                collectionId: CONTACT_ID,
                documentId: ID.unique(),
                data: {
                    name, 
                    phoneNumber,
                    email,
                    service,
                    time,
                    message
                },
            });

            return c.json({ data: contact });
        }
    )

    /* DELETE for deleting contact */
    .delete(
        "/:contactId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { contactId } = c.req.param();

            const existingContact = await databases.getDocument<ContactUs>({
                databaseId: DATABASE_ID,
                collectionId: CONTACT_ID,
                documentId: contactId,
            });

            await databases.deleteDocument({
                databaseId: DATABASE_ID,
                collectionId: CONTACT_ID,
                documentId: contactId,
            });

            return c.json({ data: { $id: existingContact.$id } });
        }
    )

    /* GET for getting all contacts */
    .get(
        "/",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const contacts = await databases.listDocuments<ContactUs>({
                databaseId: DATABASE_ID,
                collectionId: CONTACT_ID,
            });

            return c.json({ data: contacts });
        }
    )

    /* GET for get single contact */
    .get(
        "/:contactId",
        sessionMiddleware,
        async (c) => {
            const databases = c.get("databases");

            const { contactId } = c.req.param();

            const existingContact = await databases.getDocument<ContactUs>({
                databaseId: DATABASE_ID,
                collectionId: CONTACT_ID,
                documentId: contactId
            });

            return c.json({ data: existingContact });
        }
    )


export default app;