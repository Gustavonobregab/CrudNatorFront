'use client'
import React, {useState, useContext } from 'react';
// import axios from 'axios';
import { useRouter } from 'next/navigation'
// import { BiSolidError } from "react-icons/bi";
import { PostsContext } from '../contexts/PostsContext';

const PostList = () => {
  // const { setPosts } = useContext(PostsContext);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

 
  const router = useRouter();

  // useEffect(() => {
  //   axios
  //     .get('/api/post')
  //     .then((response) => {
  //       setPosts(response.data.posts);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setError('Erro ao carregar os posts');
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <div className="flex justify-center items-center h-screen text-gray-500 text-lg">Carregando...</div>;
  // }

  // if (error) {
  //   return (
  //       <div className="flex justify-center flex-col items-center h-screen text-red-500 text-lg">
  //           <BiSolidError />
  //           {error}
  //       </div>);
  // }

  return (
    // <div className="flex flex-wrap justify-center items-start gap-10 p-5 flex-grow min-h-[calc(100vh-100px)]">
    //   {posts.map((post) => (
    //     <div
    //       key={post._id}
    //       className="bg-color-1 rounded-lg shadow-2xl w-70 p-5 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-64 scale-105"
    //       onClick={() => router.push(`/post/${post._id}`)}
    //     >
    //       <h2 className="text-lg font-bold mb-4 shrink-0">{post.title}</h2>
    //       <p className="flex-grow text-center overflow-hidden text-ellipsis -webkit-box -webkit-line-clamp-3 -webkit-box-orient-vertical mb-4 text-sm">{post.content}</p>
    //       <small className="text-center text-sm mt-auto">{post.area}</small>
    //     </div>
    //   ))}
    // </div>
    <div className="flex flex-wrap justify-center items-start gap-10 p-5 flex-grow min-h-[calc(100vh-100px)]">
         <div
           key={1}
           className="bg-color-1 rounded-lg shadow-2xl w-70 p-5 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-64 scale-105"
           onClick={() => router.push(`/post/1`)}
         >
           <h2 className="text-lg font-bold mb-4 self-center shrink-0">CrudNator</h2>
           <p className="flex-grow text-center overflow-hidden text-ellipsis -webkit-box -webkit-line-clamp-3 -webkit-box-orient-vertical mb-4 text-sm">Rede social para a galera da tecnologia</p>
           <small className="text-center text-sm mt-auto">Full Stack</small>
         </div>
         <div
           key={2}
           className="bg-color-1 rounded-lg shadow-2xl w-70 p-5 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-64 scale-105"
           onClick={() => router.push(`/post/2`)}
         >
           <h2 className="text-lg font-bold mb-4 self-center shrink-0">To DO List</h2>
           <p className="flex-grow text-center overflow-hidden text-ellipsis -webkit-box -webkit-line-clamp-3 -webkit-box-orient-vertical mb-4 text-sm">Lista de tarefas</p>
           <small className="text-center text-sm mt-auto">Full Stack</small>
         </div>
     </div>
  );
};

export default PostList;
