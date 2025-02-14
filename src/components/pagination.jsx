import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../store/Slices/PostsSlice'; // Importe a action setPage

function Pagination({ onPageChange }) { // Recebe onPageChange como prop
    const postsSelector = useSelector((state) => state.posts);
    const dispatch = useDispatch(); // Inicializa o dispatch

    const currentPage = Number(postsSelector.page); // Obtém a página atual do Redux
    const totalPages = postsSelector.totalPages; // Obtém o total de páginas do Redux

    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPages, currentPage + Math.floor(maxPageNumbersToShow / 2));

    if (endPage - startPage + 1 < maxPageNumbersToShow) {
        startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (page) => {
        dispatch(setPage(page)); // Atualiza o estado da página no Redux
        onPageChange(page); // Chama a função onPageChange (handleLoadMore)
    };

    return (
        <nav aria-label="Page navigation" className="mt-4 self-center">
            <ul className="pagination flex justify-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link px-3 py-2 ml-0 leading-tight text-black bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                        onClick={() => handlePageClick(currentPage - 1)}
                        aria-label="Previous"
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button
                            className={`page-link px-3 py-2 leading-tight border hover:bg-gray-100 hover:text-gray-700 ${
                                currentPage === number ? 'bg-black text-white border-black' : 'text-black bg-white border-gray-300' // Estilos para a página ativa (fundo preto, texto branco no hover)
                            }`}
                            onClick={() => handlePageClick(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link px-3 py-2 leading-tight text-black bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                        onClick={() => handlePageClick(currentPage + 1)}
                        aria-label="Next"
                        disabled={currentPage === totalPages}
                    >
                        Próximo
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;