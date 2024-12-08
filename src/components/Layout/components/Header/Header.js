import LOGO from '~/assets/img/maveriklogo.png';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward, IoIosCloseCircleOutline } from 'react-icons/io';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { boxShadow } from '~/components/Styles/styles';
import Account from './components/Account/Account';

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
            <div
                className={
                    openMenu
                        ? 'fixed top-[80px] sm:top-0 left-0 h-full w-full sm:w-[330px] z-[5] p-10 sm:py-20 bg-white opacity-100 ease-in-out duration-1000 transform translate-x-0'
                        : 'fixed top-[80px] sm:top-0 left-[-100%] h-full w-full sm:w-[330px] z-[5] p-10 sm:py-20 bg-white opacity-0 ease-in-out duration-500 transform translate-x-[-100%]'
                }
            >
                <AiOutlineClose
                    className="text-[30px] absolute top-5 right-5 cursor-pointer hidden sm:block"
                    onClick={handleOpenMenu}
                />
                <div className="flex flex-col text-[20px] space-y-5">
                    <Link to="/products/new-arrivals" className="group">
                        <span className="relative">
                            NEW ARRIVALS
                            <span
                                className="absolute
                                bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                                group-hover:w-full"
                            ></span>
                        </span>
                    </Link>
                    <Link to="/products/all" className="group">
                        <span className="relative">
                            ALL PRODUCTS
                            <span
                                className="absolute
                                bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                                group-hover:w-full"
                            ></span>
                        </span>
                    </Link>
                    <ul to="/products/top" className="group flex items-center cursor-pointer">
                        <span className="relative">
                            TOP
                            <span
                                className="absolute
                                bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                                group-hover:w-full"
                            ></span>
                        </span>
                        <IoIosArrowForward
                            className="opacity-0 scale-50 text-[14px] ml-1 transition-all duration-500
                             group-hover:opacity-100 group-hover:scale-100"
                        />
                    </ul>
                    <Link to="/products/bottom" className="group flex items-center">
                        <span className="relative">
                            BOTTOM
                            <span
                                className="absolute
                                bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                                group-hover:w-full"
                            ></span>
                        </span>
                        <IoIosArrowForward
                            className="opacity-0 scale-50 text-[14px] ml-1 transition-all duration-500
                             group-hover:opacity-100 group-hover:scale-100"
                        />
                    </Link>
                    <Link to="/products/outerwear" className="group flex items-center">
                        <span className="relative">
                            OUTERWEAR
                            <span
                                className="absolute
                                bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                                group-hover:w-full"
                            ></span>
                        </span>
                        <IoIosArrowForward
                            className="opacity-0 scale-50 text-[14px] ml-1 transition-all duration-500
                             group-hover:opacity-100 group-hover:scale-100"
                        />
                    </Link>
                    <Link to="/products/accessories" className="group flex items-center">
                        <span className="relative">
                            ACCESSORIES
                            <span
                                className="absolute
                                bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                                group-hover:w-full"
                            ></span>
                        </span>
                        <IoIosArrowForward
                            className="opacity-0 scale-50 text-[14px] ml-1 transition-all duration-500
                             group-hover:opacity-100 group-hover:scale-100"
                        />
                    </Link>
                </div>
            </div>

            {/*Overlay */}
            <div
                className={
                    openMenu
                        ? 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 sm:opacity-80 z-0 sm:z-[4] ease duration-1000'
                        : 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 ease duration-500'
                }
            ></div>
        </>
    );
}

export default Header;
