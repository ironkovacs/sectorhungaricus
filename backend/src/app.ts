import Koa from 'koa';
import koaBody from 'koa-body';
import cors from "@koa/cors";
import newsRoutes from './routes/news.routes';
import adminRouter from "./routes/admin.routes";
import userRoutes from "./routes/user.routes";

const app = new Koa();

const allowedOrigins = [
    "http://localhost:3000", // Local development frontend
    "http://localhost:5173/",
    "https://sectorhungaricus.hu",
    "https://api.sectorhungaricus.hu", // Production website frontend
];



// Middleware
app.use(koaBody());
app.use(
    cors({
        origin: "https://www.sectorhungaricus.hu", // Frontend domain
        credentials: true, // Allow cookies and basic authentication
        allowMethods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
        allowHeaders: ["Content-Type", "Authorization"], // Allow these headers in requests
    })
);

// Register routes
app.use(newsRoutes.routes());
app.use(newsRoutes.allowedMethods());
app.use(adminRouter.routes())
app.use(adminRouter.allowedMethods())
app.use(userRoutes.routes())
app.use(userRoutes.allowedMethods())
export default app;