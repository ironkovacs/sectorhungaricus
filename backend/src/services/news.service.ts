import { Op } from 'sequelize';
import { News } from '../models/NewsModel';

interface GetNewsOptions {
    latest: boolean;
    type?: string;
    category?: string;
    page: number;
    limit: number;
}

export const getNews = async ({ latest, type, category, page, limit }: GetNewsOptions) => {
    // Dynamic filter object
    const whereClause: any = {};

    // Filter: Latest (last 2 months)
    if (latest) {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
        whereClause.created_at = { [Op.gte]: twoMonthsAgo }; // `>=` filter for 'created_at'
    }

    // Filter: By type (comma-separated)
    if (type) {
        whereClause.type = { [Op.in]: type.split(',') };
    }

    // Filter: By category
    if (category) {
        whereClause.category = category;
    }

    // Pagination
    const offset = (page - 1) * limit; // Items to skip
    const result = await News.findAll({
        where: whereClause,
        order: [['created_at', 'DESC']], // Sort by most recent
        limit,
        offset,
    });

    return {
        page,
        limit,
        data: result,
    };
};

interface AddNewsOptions {
    created_by: string;
    category: 'killteam' | 'warcry' | 'spearhead' | 'local';
    type: 'news' | 'events';
    content_hu: string;
    content_en: string;
}

export const addNews = async ({ created_by, category, type, content_hu, content_en }: AddNewsOptions) => {
    return await News.create({ created_by, category, type, content_hu, content_en });
};