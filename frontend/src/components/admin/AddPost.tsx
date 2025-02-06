import React, {useState} from "react";
import {
    Box,
    Button,
    MenuItem,

    Typography,
    Select,
    InputLabel,
    FormControl,
} from "@mui/material";
import '@mdxeditor/editor/style.css'
import {MDXEditor, headingsPlugin} from '@mdxeditor/editor'

import axios from "axios";
import BACKEND_SERVER from "../../config.ts";

export const Categories = {
    Killteam: 'killteam',
    Warcry: 'warcry',
    Spearhead: 'spearhead',
    Local: 'local',
} as const;

export type Category = (typeof Categories)[keyof typeof Categories];

export const PostTypes = {
    News: 'news',
    Events: 'events'
} as const
export type PostType = (typeof PostTypes)[keyof typeof PostTypes];

export interface PostData {
    id?: number,
    createdBy?: number,
    category?: Category,
    type?: PostType,
    contentHu?: string,
    contentEn?: string
}


const AddPost: React.FC<PostData> = (post) => {
    const [category, setCategory] = useState(post?.category ?? '');
    const [type, setType] = useState(post?.type ?? '');
    const [contentHu, setContentHu] = useState(post?.contentHu ?? '');
    const [contentEn, setContentEn] = useState(post?.contentEn ?? '');


    // Handle sending the post to the backend
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const createdBy = "High Lord"; // Adjust based on logged-in user
            await axios.post(`${BACKEND_SERVER}/news`, {
                created_by: createdBy,
                category,
                type,
                content_hu: contentHu,
                content_en: contentEn,
            });
            alert("Post successfully created!");
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{mb: 2}}>
                <Typography variant="h5" gutterBottom>
                    Add New Post
                </Typography>
                <FormControl fullWidth sx={{mb: 2}}>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        value={category}
                        onChange={(e) => setCategory(e.target.value as Category)}
                        required
                    >
                        {Object.values(Categories).map((category) => (
                            <MenuItem value={category}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{mb: 2}}>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        labelId="type-label"
                        value={type}
                        onChange={(e) => setType(e.target.value as PostType)}
                        required
                    >
                        {Object.values(PostTypes).map((type) => (
                            <MenuItem value={type}>{type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography variant="subtitle1" gutterBottom>
                    Hungarian Content
                </Typography>
                <MDXEditor
                    markdown={contentHu}
                    onChange={setContentHu}
                    plugins={[headingsPlugin()]}/>
                <Typography variant="subtitle1" gutterBottom sx={{mt: 3}}>
                    English Content
                </Typography>
                <MDXEditor
                    markdown={contentEn}
                    onChange={setContentEn}
                    plugins={[headingsPlugin()]}/>
            </Box>
            <Button type="submit" variant="contained" color="primary">
                Send Post
            </Button>
        </form>
    );
};

export default AddPost;