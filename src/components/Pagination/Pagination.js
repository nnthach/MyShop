import { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

function Pagination({ productsPerPage, totalProducts, currentPage, setCurrentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center text-gray-400 bg-white text-[18px] py-5">
            <div className="flex items-center mx-auto">
                <FaLongArrowAltLeft
                    onClick={() => {
                        if (currentPage == 1) {
                            return;
                        } else {
                            setCurrentPage((prev) => prev - 1);
                        }
                    }}
                    className="cursor-pointer hover:text-black"
                />
                <div className="px-5">
                    {pageNumbers.map((page) => (
                        <span
                            key={page}
                            onClick={() => {
                                console.log('page', page);
                                if (currentPage !== page) {
                                    setCurrentPage(page);
                                }
                            }}
                            className={` px-2 cursor-pointer   ${
                                currentPage == page ? 'font-semibold text-black' : 'text-gray-400'
                            }`}
                        >
                            {page}
                        </span>
                    ))}
                </div>
                <FaLongArrowAltRight
                    onClick={() => {
                        if (currentPage == pageNumbers.length) {
                            return;
                        } else {
                            setCurrentPage((prev) => prev + 1);
                        }
                    }}
                    className="cursor-pointer hover:text-black"
                />
            </div>
        </div>
    );
}

export default Pagination;
