import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';

// Define the attributes of the News model
interface NewsAttributes {
    id: number;
    created_at: Date;
    created_by: string;
    category: 'killteam' | 'warcry' | 'spearhead' | 'local';
    type: 'news' | 'events';
    content_hu: string;
    content_en: string;
}

// Optional fields for model creation
interface NewsCreationAttributes extends Optional<NewsAttributes, 'id' | 'created_at'> {}

// Define the News model
export class News extends Model<NewsAttributes, NewsCreationAttributes> implements NewsAttributes {
    public id!: number;
    public created_at!: Date;
    public created_by!: string;
    public category!: 'killteam' | 'warcry' | 'spearhead' | 'local';
    public type!: 'news' | 'events';
    public content_hu!: string;
    public content_en!: string;
}

// Initialize the model with Sequelize
News.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.ENUM('killteam', 'warcry', 'spearhead', 'local'),
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('news', 'events'),
            allowNull: false,
        },
        content_hu: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content_en: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize, // Pass the Sequelize instance
        tableName: 'news',
    }
);