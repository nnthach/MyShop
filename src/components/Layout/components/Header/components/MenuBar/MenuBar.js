import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa6';

function MenuBar({ openMenu, handleOpenMenu }) {
    return (
        <div className="text-[22px] sm:text-[26px] w-[80px] sm:w-[120px]">
            {!openMenu ? (
                <FaBars
                    className="cursor-pointer block sm:block cursor-pointer hover:border-b hover:border-black"
                    onClick={handleOpenMenu}
                />
            ) : (
                <>
                    <AiOutlineClose className="cursor-pointer block sm:hidden" onClick={handleOpenMenu} />
                    <FaBars className="hidden sm:block" />
                </>
            )}
        </div>
    );
}

export default MenuBar;
