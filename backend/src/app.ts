import Koa from 'koa';
import koaBody from 'koa-body';
import session from 'koa-session';
import RedisStore from 'koa-redis';

import newsRoutes from './routes/news.routes';
import userRoutes from "./routes/highlords.routes";
import helmet from "koa-helmet";

import Redis from "ioredis";
import rateLimitMiddleware from "./middlewares/rate-limit";
import corsMiddleware from "./middlewares/cors";
import optionsHandlerMiddleware from "./middlewares/options-handler";

const app = new Koa();
const redis = new Redis();

app.keys = ['your-session-secret']; // Replace with a long, secure key

app.use(
    session(
        {
            store: new (RedisStore as any)({ client: redis }), // Use Redis as the session store
            key: 'highlord:sess', // Prefix for session keys in Redis
            maxAge: 24 * 60 * 60 * 1000, // Session validity: 1 day
            httpOnly: true, // Prevent client JS from accessing cookies
            rolling: true, // Refresh session expiry on each request
            renew: true, // Renew session to extend its validity
        },
        app
    )
);

// Middlewares
app.use(koaBody());
app.use(helmet());
rateLimitMiddleware(app);
corsMiddleware(app);
optionsHandlerMiddleware(app);

// Register routes
app.use(newsRoutes.routes());
app.use(newsRoutes.allowedMethods());
app.use(userRoutes.routes())
app.use(userRoutes.allowedMethods())

console.log(userRoutes.stack.map(i => `${i.methods} ${i.path}`));
export default app;