import Router from '@koa/router';
import { fetchNews, createNews } from '../controllers/news.controller';

const router = new Router();

// Define routes
router.get('/news', fetchNews); // GET /news with filters
router.post('/news', createNews); // POST /news to add a news item

export default router;