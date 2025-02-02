import Koa from 'koa';
import koaBody from 'koa-body';
import cors from "@koa/cors";
import newsRoutes from './routes/news.routes';
import adminRouter from "./routes/admin.routes";
import userRoutes from "./routes/user.routes";

const app = new Koa();

const allowedOrigins = [
    "http://localhost:3000", // Local development frontend
    "https://sectorhungaricus.hu", // Production website frontend
    "http://localhost:5173/"
];



// Middleware
app.use(koaBody());
app.use(cors({
    origin: (ctx: Koa.Context) => {
        console.log({REQUEST_ORIGIN: ctx.origin})
        const requestOrigin = ctx.request.headers.origin ?? '';
        if (allowedOrigins.includes(requestOrigin)) {
            return requestOrigin; // Allow this origin
        }
        return ''; // Block other origins by returning an empty string
    },
    credentials: true, // Allow cookies or Authorization headers
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowHeaders: ["Content-Type", "Authorization", "Accept"], // Allowed headers
}));

// Register routes
app.use(newsRoutes.routes());
app.use(newsRoutes.allowedMethods());
app.use(adminRouter.routes())
app.use(adminRouter.allowedMethods())
app.use(userRoutes.routes())
app.use(userRoutes.allowedMethods())
export default app;