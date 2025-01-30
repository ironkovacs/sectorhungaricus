import Koa from 'koa';
import koaBody from 'koa-body';
import newsRoutes from './routes/news.routes';

const app = new Koa();

// Middleware
app.use(koaBody());

// Register routes
app.use(newsRoutes.routes());
app.use(newsRoutes.allowedMethods());

export default app;