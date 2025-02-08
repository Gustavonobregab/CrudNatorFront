'use client'; // Importante: Este é um Client Component
import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';



export const PostDetailsClient = () => {
    
    const params = useParams<{_id: string }>()

    
    if (!posts) {   
        return <div>Carregando post...</div>;
    }


    const post = useMemo(() => {
        return posts.find((p) => p._id === params._id);
    }, [posts, params._id]);

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem('post', JSON.stringify(post))

    }, [posts]);

    

    
    return (
        <div className="flex flex-wrap justify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
            
                <div className="rounded-md">
                    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
                </div>
                <div className="p-4">
                    <h2 className="mb-2 text-slate-800 text-xl font-semibold">
                    {post?.title}
                    </h2>
                    <h6 className='h6'>{post?.area}</h6>
                    <p className="text-slate-500 leading-normal font-light">
                    {post?.content}
                    </p>
                </div>
            </div>
    );
};