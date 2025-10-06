import { Hono } from "hono";
import { handle } from "hono/vercel"

import auth from '@/features/auth/server/route';
import quicklinks from '@/features/quicklinks/server/route'
import taxrefunds from '@/features/taxrefund/server/route'
import services from '@/features/services/server/route'

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
    .route("/auth", auth)
    .route("/taxrefund",taxrefunds)
    .route("/services",services)
    .route("/quicklinks",quicklinks);
    
export const GET = handle(app);
export const POST = handle(app);   
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);

export type AppType = typeof routes;