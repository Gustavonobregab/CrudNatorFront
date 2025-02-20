import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./Slices/HeaderSlice";
import PostsReducer from "./Slices/PostsSlice";
import LoginSlice from "./Slices/LoginSlice";

export const store = configureStore({
    reducer: {
        header: headerReducer,
        Login: LoginSlice,
        posts: PostsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;