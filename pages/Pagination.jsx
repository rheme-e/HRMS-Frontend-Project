// Pagination.jsx

import React from 'react';
import './Pagination.css';

export default function Pagination({ jobAdvertisementsPerPage, totalJobAdvertisements, currentPage, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobAdvertisements / jobAdvertisementsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
