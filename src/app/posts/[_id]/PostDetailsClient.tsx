'use client'; // Importante: Este é um Client Component
import { RootState } from '../../../store/index';
import React from 'react';
import { useSelector } from 'react-redux';

const PostDetailsClient = () => {
    const { post } = useSelector((state: RootState) => state.posts);
    return (
        <div className="flex flex-wrap justify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
            
                 <div className="rounded-md">
                    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
                </div>
                <div className="p-4">
                    <h2 className="mb-2 text-slate-800 text-xl font-semibold">
                    {post.title}
                    </h2>
                    <h6 className='h6'>{post.area}</h6>
                    <p className="text-slate-500 leading-normal font-light">
                    {post.content}
                    </p>
                </div> 
            </div>
    );
};


export default PostDetailsClient;