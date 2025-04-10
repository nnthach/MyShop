import LOGO from '~/assets/img/maveriklogo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Account from './components/Account/Account';
import MenuBar from './components/MenuBar/MenuBar';

function Header() {
    return (
        <div
            className="fixed top-0 left-0 right-0 z-[2]
                flex items-center justify-between h-[80px]  
            bg-white border-b-[1px] border-gray-200 text-black
            px-2 sm:px-10"
        >
            {/*Menu Icon */}
            <MenuBar />

            {/*Logo */}
            <div>
                <Link to="/">
                    <img className="w-[170px] sm:w-[280px]" src={LOGO} alt="logo" />
                </Link>
            </div>

            {/*Account */}
            <Account />
        </div>
    );
}

export default Header;
