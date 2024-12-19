import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function FilterMenu({ openSlideBar, handleOpenSlideBar }) {
    return (
        <div
            className={
                openSlideBar
                    ? 'fixed top-0 sm:top-0 right-0 h-full w-full sm:w-[550px] overflow-y-auto custom-scrollbar z-[5] pt-5  bg-white opacity-100 ease-in-out duration-1000 transform translate-x-0'
                    : 'fixed top-0 sm:top-0 right-[-100%] h-full w-full sm:w-[550px] z-[5] py-5  bg-white opacity-0 ease-in-out duration-500 transform translate-x-[-100%] pointer-events-none'
            }
        >
            <div className="relative text-center ">
                <p className="text-[18px] sm:text-[24px] font-semibold">FILTER</p>
                <AiOutlineClose
                    className="text-[18px] sm:text-[24px] absolute top-[50%] translate-y-[-50%] right-5 cursor-pointer"
                    onClick={handleOpenSlideBar}
                />
            </div>
        </div>
    );
}

export default FilterMenu;
