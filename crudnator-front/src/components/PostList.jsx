'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import api from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setError, setLoading, setPosts, setPost, setPage, setTotalPages } from '../store/Slices/PostsSlice';



export function PostList () {
  const router = useRouter();
  const [updatetPost, setUpdate] = useState([]);
  const postsSelector = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const onError = (text) => dispatch(setError(text));
  const onLoading = (boolean) => dispatch(setLoading(boolean));
  const onFetch = (posts) => dispatch(setPosts(posts));
  
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const [loadingMore, setLoadingMore] = useState(false); // Estado para controlar o carregamento adicional`


  const filterPosts = (filter) => {
    const response = postsSelector.posts.filter((post) => post.area === filter);
    setUpdate(response);
  };

  const handleFilter= (filter) => {
    switch (filter) {
      case 'Frontend':
        filterPosts('Frontend')
        console.log('Filtrando por Frontend');
        break;
      case 'Backend':
        filterPosts('Backend')
        console.log('Filtrando por Backend');
        break;
      case 'All':
        setUpdate(postsSelector.posts)
        console.log('Mostrando todos os itens');
        break;
      case 'UX':
        filterPosts('UX')
        console.log('Filtrando por UX');
        break;
      default:
        console.log('Opção de filtro inválida');
    }
  }

  const limitText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const handlerOnClick = (post) => {
    dispatch(setPost(post))
    router.push(`/posts/${post._id}`)
  };

  const fetchPosts = async (page = 1, totalPages) => {
    try {
      onLoading(true);
      setLoadingMore(true);

      const response = await api.get('/post', { params: { page, limit: totalPages } });

      const postsWithConvertedIds = response.data.posts.map((post) => ({
        ...post,
        _id: post._id.toString(),
        author: post.author.toString()
    }));
      if (page === 1) { // Se for a primeira página, substitui os posts existentes
          onFetch(postsWithConvertedIds);
          setUpdate(postsWithConvertedIds);
      } else { // Se for uma página adicional, adiciona aos posts existentes
          onFetch([...postsSelector.posts, ...postsWithConvertedIds]);
          setUpdate([...updatetPost, ...postsWithConvertedIds]);
      }

      console.log(response.data);
      onLoading(false);
      setLoadingMore(false); // Define loadingMore como false após o carregamento
      dispatch(setTotalPages(response.data.totalPages));
      dispatch(setPage(response.data.page));
      setCurrentPage(page); // Atualiza a página atual

    } catch (err) {
        console.error("Erro ao carregar posts:", err);
        onError('Erro ao carregar os posts. Tente novamente mais tarde.');
        onLoading(false);
        setLoadingMore(false); // Define loadingMore como false em caso de erro
    }
  };

  // useEffect para puxar todos os posts do db 
   useEffect(() => {
    //  const fetchPosts = async () => {
    //      try {
    //          onLoading(true)
    //          const response = await api.get('/post');

    //          const postsWithConvertedIds = response.data.posts.map((post) => ({
    //              ...post,
    //              _id: post._id.toString(),
    //              author: post.author.toString()
    //          }));
    //          console.log(response.data);
             
    //          onFetch(postsWithConvertedIds);
    //          setUpdate(postsWithConvertedIds)
    //          onLoading(false);
    //          dispatch(setTotalPages(response.data.totalPages)),
    //          dispatch(setPage(response.data.page))
    //      } catch (err) { 
    //          console.error("Erro ao carregar posts:", err);
    //          onError('Erro ao carregar os posts. Tente novamente mais tarde.');
    //          onLoading(false);
    //      }
    //  };
     fetchPosts(); // Chama a função assíncrona
}, []);

  const handleLoadMore = () => {
    fetchPosts(currentPage + 1);
  };

    if (postsSelector.loading) {
      return (
       <div role="status">
           <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http:www.w3.org/2000/svg">
               <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
           </svg>
       </div>
      )};

    if (postsSelector.error) {
      return (
          <div className="flex justify-center flex-col items-center h-screen text-red-500 text-lg">
              {postsSelector.error}
          </div>);
    }

  return (
  
    // barra de pesquisa
        <div className="flex flex-wrap flex-col npmjustify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
          <div className="flex self-center border rounded-full p-2 shadow-lg">
            <div className="px-2 cursor-pointer self-center text-slate-500 hover:text-slate-900" onClick={() => handleFilter('All')}>
              All
            </div>
            <div className="px-2 cursor-pointer self-center border-l text-slate-500 hover:text-slate-900" onClick={() => handleFilter('Frontend')}>
              Front-end
            </div>
            <div className="px-2 cursor-pointer self-center border-l text-slate-500 hover:text-slate-900" onClick={() => handleFilter('Backend')}>
              Back-end
            </div>
            <div className="px-2 cursor-pointer self-center border-l text-slate-500 hover:text-slate-900" onClick={() => handleFilter('UX')}>
              UX
            </div>
          </div>

      {/* Lista de posts */}
      <div className="flex flex-wrap justify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
      {updatetPost.map((post) => (
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
              {limitText(post.content, 50)}
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button className="rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-white hover:text-black active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => handlerOnClick(post)}>
              Read more
            </button>
          </div>
        </div>
      ))}
      </div>
      <div>
            <button
                className="rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-white hover:text-black active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={handleLoadMore}
                disabled={loadingMore || currentPage >= postsSelector.totalPages} // Desabilita o botão durante o carregamento ou se não houver mais páginas
            >
                {loadingMore ? "Carregando..." : "More Posts..."} {/* Texto do botão condicional */}
            </button>
        </div>
    </div>
  );
};

export default PostList;
