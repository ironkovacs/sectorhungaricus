import Router from '@koa/router';
import { fetchNews, createNews } from '../controllers/news.controller';

const newsRouter = new Router();

// Define routes
newsRouter.get('/news', fetchNews);
newsRouter.post('/news', createNews);

export default newsRouter;