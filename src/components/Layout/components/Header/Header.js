import LOGO from '~/assets/img/maveriklogo.png';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Account from './components/Account/Account';
import MenuBar from './components/MenuBar/MenuBar';
import MenuItem from './components/MenuItem/MenuItem';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu((openMenu) => !openMenu);
    };

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openMenu]);
    return (
        <>
            <div
                className="fixed top-0 left-0 right-0 z-[2]
                flex items-center justify-between h-[80px]  
            bg-white border-b-[1px] border-black text-black
            px-2 sm:px-10"
            >
                {/*Menu Icon */}
                <MenuBar openMenu={openMenu} handleOpenMenu={handleOpenMenu} />

                {/*Logo */}
                <div>
                    <Link to="/">
                        <img className="w-[170px] sm:w-[280px]" src={LOGO} alt="logo" />
                    </Link>
                </div>

                {/*Account */}
                <Account />
            </div>

            {/*Slide Menu */}
            <MenuItem openMenu={openMenu} handleOpenMenu={handleOpenMenu} />

            {/*Overlay */}
            <div
                className={
                    openMenu
                        ? 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 sm:opacity-80 z-0 sm:z-[4] ease duration-1000'
                        : 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 ease duration-500 sm:z-[-4] pointer-events-none'
                }
            ></div>
        </>
    );
}

export default Header;
