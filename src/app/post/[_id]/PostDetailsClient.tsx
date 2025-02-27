'use client';

import { RootState } from '../../../store/index';
import React from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../../../components/BackButton';

const PostDetailsClient = () => {
    const { post } = useSelector((state: RootState) => state.posts);
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5 sm:p-3">
            <BackButton />
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-3xl sm:max-w-2xl h-[80vh] sm:h-[70vh] flex flex-col">
                
                {/* Imagem responsiva */}
                <div className="mb-4 rounded-2xl overflow-hidden shadow-lg w-full max-w-md aspect-[5/3] mx-auto">
                    <img 
                        src="/pyimage.jpg" 
                        alt="post-image" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Conteúdo do post sem limite de palavras */}
                <div className="flex-1 flex flex-col justify-start text-center px-4 overflow-auto">
                    <h2 className="text-3xl sm:text-2xl font-extrabold text-gray-800 mb-2">{post.title}</h2>
                    <h6 className="text-lg sm:text-base text-gray-600 font-medium mb-2">{post.area}</h6>
                    <p className="text-gray-500 leading-relaxed text-base sm:text-sm">
                        {post.content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsClient;