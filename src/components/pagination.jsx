import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../store/Slices/PostsSlice'; // Importe a action setPage

function Pagination({ onPageChange }) { // Recebe onPageChange como prop
    const postsSelector = useSelector((state) => state.posts);
    const dispatch = useDispatch(); // Inicializa o dispatch

    const currentPage = postsSelector.page; // Obtém a página atual do Redux
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
                        className="page-link px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
                        onClick={() => handlePageClick(currentPage - 1)} // Chama handlePageClick
                        aria-label="Previous"
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button
                            className={`page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                currentPage === number ? 'bg-blue-700 border-blue-700 text-white hover:bg-blue-700 hover:text-white dark:border-blue-500' : ''
                            }`}
                            onClick={() => handlePageClick(number)} // Chama handlePageClick
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
                        onClick={() => handlePageClick(currentPage + 1)} // Chama handlePageClick
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