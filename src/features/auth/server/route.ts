import { Hono } from "hono";
import { deleteCookie, setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";

import { ID } from "node-appwrite";
import { createAdminClient } from "@/lib/appwrite";

import { AUTH_COOKIE } from "../constants";
import { loginSchema, createUserSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema),
        async (c) => {
            const { email, password } = c.req.valid("json");

            const { account } = await createAdminClient();

            const session = await account.createEmailPasswordSession({
                email,
                password
            });

            setCookie(c, AUTH_COOKIE, session.secret, {
                path: '/',
                httpOnly: true,
                secure: true,
                sameSite: 'Strict',
                maxAge: 60 * 60 * 24 * 30 // 30 days
            });

            return c.json({ success: true });
        }

    )


    .post(
        "/register",
        zValidator("json", createUserSchema),
        async (c) => {
            const { name, email, password } = c.req.valid("json");

            const { account } = await createAdminClient();

            await account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });

            const session = await account.createEmailPasswordSession({
                email,
                password
            });

            setCookie(c, AUTH_COOKIE, session.secret, {
                path: '/',
                httpOnly: true,
                secure: true,
                sameSite: 'Strict',
                maxAge: 60 * 60 * 24 * 30 // 30 days,
            });

            return c.json({ success: true });
        }

    )

    .get(
        "/current",
        sessionMiddleware,
        (c) => {
            const user = c.get("user");
            return c.json({ user });
        }
    )

    .post(
        "/logout",
        sessionMiddleware,
        async (c) => {
            const account = c.get("account")

            deleteCookie(c, AUTH_COOKIE)

            await account.deleteSessions()

            return c.json({ success: true })
        }
    )

export default app;