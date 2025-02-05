'use client'
import React, {useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { PostsContext } from '../contexts/PostsContext';
import api from '../services/api';

// const posts = [
//   {
//     _id: '1',
//     title: 'Post 1',
//     content: 'Conteúdo do Post 1',
//     area: 'Frontend',
//   },
//   {
//     _id: '2',
//     title: 'Post 2',
//     content: 'Conteúdo do Post 2',
//     area: 'Backend',
//   },
//   {
//     _id: '3',
//     title: 'Post 3',
//     content: 'Conteúdo do Post 3',
//     area: 'Mobile',
//   },
//   {
//     _id: '4',
//     title: 'Post 4',
//     content: 'Conteúdo do Post 4',
//     area: 'DevOps',
//   },
//   {
//     _id: '5',
//     title: 'Post 5',
//     content: 'Conteúdo do Post 5',
//     area: 'UX/UI',
//   },
//   {
//     _id: '6',
//     title: 'Post 6',
//     content: 'Conteúdo do Post 6',
//     area: 'QA',
//   },
//   {
//     _id: '7',
//     title: 'Post 7',
//     content: 'Conteúdo do Post 7',
//     area: 'Frontend',
//   },
//   {
//     _id: '8',
//     title: 'Post 8',
//     content: 'Conteúdo do Post 8',
//     area: 'Backend',
//   },
//   {
//     _id: '9',
//     title: 'Post 9',
//     content: 'Conteúdo do Post 9',
//     area: 'Mobile',
//   },
//   {
//     _id: '10',
//     title: 'Post 10',
//     content: 'Conteúdo do Post 10',
//     area: 'DevOps',
//   },
//   {
//     _id: '11',
//     title: 'Post 11',
//     content: 'Conteúdo do Post 11',
//     area: 'UX/UI',
//   },
//   {
//     _id: '12',
//     title: 'Post 12',
//     content: 'Conteúdo do Post 12',
//     area: 'QA',
//   },
// ];

let PageSize = 10;

const PostList = () => {
  const { setPosts, posts } = useContext(PostsContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //Estado para captura de filtro
  const [selectedFilters, setSelectedFilters] = useState([]);

  //Função que lida com o filtro
  const handleFilterClick = (filter) => {
    // Lógica para atualizar o estado dos filtros selecionados
    setSelectedFilters([...selectedFilters, filter]);
  };

 
  const router = useRouter();

   
  // useEffect para puxar todos os posts do db 
  useEffect(() => {
     api
       .get('/post')
       .then((response) => {
          console.log(response.data);
          setPosts(response.data.posts);
          setLoading(false);
       })
       .catch(() => {
         setError('Erro ao carregar os posts');
         setLoading(false);
       });
   }, []);

   if (loading) {
     return <div className="flex justify-center items-center h-screen text-gray-500 text-lg">Carregando...</div>;
   }

   if (error) {
     return (
         <div className="flex justify-center flex-col items-center h-screen text-red-500 text-lg">
             {error}
         </div>);
   }

  return (
  
    // barra de pesquisa
        <div className="flex flex-wrap flex-col npmjustify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
          <div className="flex self-center border rounded-full p-2 shadow-lg">
            <div className="px-2 cursor-pointer self-center text-slate-500 hover:text-slate-900" onClick={() => handleFilterClick('front-end')}>
              Front-end
            </div>
            <div className="px-2 cursor-pointer self-center border-l text-slate-500 hover:text-slate-900" onClick={() => handleFilterClick('back-end')}>
              Back-end
            </div>
            <div className="px-2 cursor-pointer self-center border-l text-slate-500 hover:text-slate-900" onClick={() => handleFilterClick('back-end')}>
              Mobile
            </div>
          </div>

      {/* Lista de posts */}
      <div className="flex flex-wrap justify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
      {posts.map((post) => (
        <div className="relative flex flex-col my-6 bg-white shadow-md  rounded-lg w-64 h-96 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg" key={post._id}>
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
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
          <div className="px-4 pb-4 pt-0 mt-2">
            <button className="rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-white hover:text-black active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => router.push(`/post/${post._id}`)}>
              Read more
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PostList;
