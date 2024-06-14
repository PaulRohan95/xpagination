import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) { //handles navigation from one page to another

    const totalPages = Math.ceil(totalItems / itemsPerPage); //total number of pages (Math.ceil used to consider the next higher whole number in case of a floating number)

    const nextPage = () => { //to got to the next page
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const prevPage = () => { //to got to the previous page
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

  return (
    <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span style={{ margin: '0 20px' }}>{currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default Pagination;