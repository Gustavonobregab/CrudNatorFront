"use client"

import { createContext, useState } from 'react';
import {ObjectId} from "mongodb";

interface Post {
    author: ObjectId,
    title: String,
    content: String,
    area: String,
    link: String,
}

interface PostContextType {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  removePost: (id: ObjectId) => void;
}

const PostsContext = createContext<PostContextType>({
  posts: [],
  setPosts: () => {},
  addPost: () => {},
  removePost: () => {},
});

const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id: ObjectId) => {
    setPosts(posts.filter(post => post.author !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts, addPost, removePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };