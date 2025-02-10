import { createSlice } from '@reduxjs/toolkit';
import { set } from 'mongoose';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    area: string;
    link: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

const PostsSlice = createSlice({
    name: 'Posts',
    initialState: {
        posts: [] as Post[],
        post:{} as Post,
        error: null,
        loading: null,
        selectedFilters: null,
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setPost: (state, action) => {
            state.post = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});


export const { setPosts, setError, setLoading, setPost } = PostsSlice.actions;

export default PostsSlice.reducer;
export type PostsState = ReturnType<typeof PostsSlice.reducer>;
