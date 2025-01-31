import Router from '@koa/router';
import { fetchNews, createNews } from '../controllers/news.controller';

const router = new Router();

// Define routes
router.get('/news', fetchNews);
router.post('/news', createNews);

export default router;