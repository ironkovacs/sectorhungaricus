import { Context } from 'koa';
import { getNews, addNews } from '../services/news.service';

// GET /news
export const fetchNews = async (ctx: Context) => {
    try {
        const { latest, type, category, page, limit } = ctx.query;
        const result = await getNews({
            latest: latest === 'true',
            type: type as string,
            category: category as string,
            page: parseInt(page as string, 10) || 1,
            limit: parseInt(limit as string, 10) || 10,
        });
        ctx.status = 200;
        ctx.body = result;
    } catch (error) {
        console.error('Error fetching news:', error);
        ctx.status = 500;
        ctx.body = { error: 'Failed to fetch news.' };
    }
};

// POST /news
export const createNews = async (ctx: Context) => {
    const { created_by, category, type, content_hu, content_en } = ctx.request.body;
    if (!created_by || !category || !type || !content_hu || !content_en) {
        ctx.status = 400;
        ctx.body = { error: 'Missing required fields.' };
        return;
    }

    try {
        const news = await addNews({ created_by, category, type, content_hu, content_en });
        ctx.status = 201;
        ctx.body = { success: true, id: news.id };
    } catch (error) {
        console.error('Error creating news:', error);
        ctx.status = 500;
        ctx.body = { error: 'Failed to create news.' };
    }
};