import { createSlice } from '@reduxjs/toolkit';

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
        error: null,
        loading: null,
        selectedFilters: null,
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSelectedFilter: (state, action) => {
            state.selectedFilters = action.payload;
        },
    },
});

export const { setPosts, setError, setLoading, setSelectedFilter } = PostsSlice.actions;

export default PostsSlice.reducer;
