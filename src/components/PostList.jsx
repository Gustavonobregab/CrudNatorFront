'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import api from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { setError, setLoading, setPosts, setPost, setPage, setTotalPages, setFilter } from '../store/Slices/PostsSlice';
import Pagination from '../components/pagination'; 



export function PostList () {
  const router = useRouter();
    const postsSelector = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const onError = (text) => dispatch(setError(text));
    const onLoading = (boolean) => dispatch(setLoading(boolean));
    const onFetch = (posts) => dispatch(setPosts(posts));
    const onFilter = (filter) => dispatch(setFilter(filter));
    const onTotal = (totalPages) => dispatch(setTotalPages(totalPages));
    const onCurrent = (currentPage) => dispatch(setPage(currentPage));

    const [updatetPost, setUpdate] = useState([]);
    const [filterApplied, setFilterApplied] = useState(false);

    const fetchPosts = async (page = 1) => {
        try {
            onLoading(true);

            const response = await api.get('/post', { params: { page } });

            const postsWithConvertedIds = response.data.posts.map((post) => ({
                ...post,
                _id: post._id.toString(),
                author: post.author.toString()
            }));
            onFetch(postsWithConvertedIds);
            setUpdate(postsWithConvertedIds);
            onLoading(false);
            onTotal(response.data.totalPages);
            onCurrent(response.data.page);

        } catch (err) {
            console.error("Erro ao carregar posts:", err);
            onError('Erro ao carregar os posts. Tente novamente mais tarde.');
            onLoading(false);
        }
    };

    const filterPosts = async (filter, page = 1) => {
        onFilter(filter);
        try {
            onLoading(true);

            const response = await api.get(`/post/filter/${filter}`, {
                params: {
                    page,
                    limit: 10, // Mantém o limite de 10 posts por página
                },
            });
            
            if (response.data.posts.length === 0) {
                onError('Nenhum post encontrado com esse filtro.');
            }

            setUpdate(response.data.posts); // Atualiza updatetPost com os posts filtrados
            onLoading(false);
            onTotal(response.data.totalPages);
            onCurrent(response.data.page);
            setFilterApplied(true);

        } catch (err) {
            onError('Erro ao filtrar os posts. Tente novamente mais tarde.');
            onLoading(false);
        }
    };

    const handleFilter = async (filter) => {
        setFilterApplied(true);
        switch (filter) {
            case 'Frontend':
            case 'Backend':
            case 'UX':
                await filterPosts(filter); // Chama filterPosts diretamente
                break;
            case 'All':
                setFilterApplied(false);
                setUpdate(postsSelector.posts); // Restaura posts originais
                onTotal(postsSelector.totalPages)
                onCurrent(1)
                break;
            default:
                console.log('Opção de filtro inválida');
        }
    };


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

  // useEffect para puxar todos os posts do db 
     useEffect(() => {
      fetchPosts(); // Chama a função assíncrona
    }, []);

    const handleLoadMore = (page) => { // Aceita o número da página como argumento
      if (filterApplied) {
          filterPosts(postsSelector.filter, page); // Passa o número da página para filterPosts
      } else {
          fetchPosts(page); // Passa o número da página para fetchPosts
      }
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
        <div className="flex flex-wrap flex-col justify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
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
              <div className="px-2 cursor-pointer self-center border-l text-slate-500 hover:text-slate-900" onClick={() => handleFilter('Uxui')}>
                UX/UI
              </div>
            </div>
            {/* Lista de posts */}
            <div className="flex flex-wrap justify-center items-start gap-5 p-5 flex-grow min-h-[calc(100vh-100px)]">
            {updatetPost.map((post) => (
             <button className="relative flex flex-col my-6 bg-white shadow-md  rounded-lg w-64 h-96 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg" key={post._id} type="button" onClick={() => handlerOnClick(post)}>                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />                </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h2 className="mb-2 text-slate-800 text-xl font-semibold min-h-[3rem] flex items-center justify-center">
                  {limitText(post.title, 30)}
                </h2>
                <h6 className="h6">{post.area}</h6>
                <p className="text-slate-500 leading-normal font-light">
                  {limitText(post.content, 50)}
                </p>
              </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                </div>
              </button>
            ))}
            </div>
            {/* Paginação */ }
            <Pagination
              onPageChange={handleLoadMore} // Use a função handleLoadMore para lidar com a troca de página
            />
        </div>
  );
};

export default PostList;
