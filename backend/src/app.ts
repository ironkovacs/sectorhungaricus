import Koa from 'koa';
import Router from '@koa/router';
import koaBody from 'koa-body';
import { sequelize, testConnection } from './sequelize';
import { News } from './models/NewsModel';

const app = new Koa();
const router = new Router();

// Test the database connection and sync tables
testConnection();
sequelize.sync({ alter: true }); // Sync the models with the database (use `force: true` to drop/recreate tables)

// Middleware: Parse JSON request bodies
app.use(koaBody());

// POST /news: Add a news item
router.post('/news', async (ctx) => {
    const { created_by, category, type, content_hu, content_en } = ctx.request.body;

    // Validate required fields
    if (!created_by || !category || !type || !content_hu || !content_en) {
        ctx.status = 400;
        ctx.body = { error: 'Missing required fields' };
        return;
    }

    try {
        const news = await News.create({ created_by, category, type, content_hu, content_en });
        ctx.status = 201;
        ctx.body = { success: true, id: news.id };
    } catch (err) {
        console.error('Error creating news:', err);
        ctx.status = 500;
        ctx.body = { error: 'Failed to create news.' };
    }
});

// GET /news: Fetch all news items
router.get('/news', async (ctx) => {
    try {
        const newsList = await News.findAll();
        ctx.status = 200;
        ctx.body = newsList;
    } catch (err) {
        console.error('Error fetching news:', err);
        ctx.status = 500;
        ctx.body = { error: 'Failed to fetch news.' };
    }
});

// Add routes to the app
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const PORT = process.env.PORT || 26117;
app.listen(PORT, () => {
    console.log(`Koa server is running on http://s1.hostingplace.hu:${PORT}`);
});