import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function MenuItem({ openMenu, handleOpenMenu }) {
    const [openChild, setOpenChild] = useState(null);
    // const [isOpenChild, setIsOpenChild] = useState(false);

    const MENU_LIST = [
        {
            title: 'NEW ARRIVALS',
            to: '/products/new-arrivals',
        },
        {
            title: 'ALL',
            to: '/products/all',
        },
        {
            title: 'TOP',
            children: [
                { title: 'ALL', to: '/products/top/all' },
                { title: 'T-SHIRT', to: '/products/top/tshirt' },
                { title: 'SHIRT', to: '/products/top/shirt' },
                { title: 'SWEATER', to: '/products/top/sweater' },
            ],
        },
        {
            title: 'BOTTOM',
            children: [
                { title: 'ALL', to: '/products/bottom/all' },
                { title: 'PANTS', to: '/products/bottom/pants' },
                { title: 'SHORT', to: '/products/bottom/short' },
            ],
        },
        {
            title: 'OUTERWEAR',
            children: [
                { title: 'ALL', to: '/products/outerwear/all' },
                { title: 'JACKET', to: '/products/outerwear/jacket' },
                { title: 'HOODIES', to: '/products/outerwear/hoodies' },
            ],
        },
        {
            title: 'ACCESSORIES',
            to: '/products/accessories',
        },
    ];

    const handleOpenChild = (index) => {
        setOpenChild((prev) => (prev === index ? null : index));
    };

    useEffect(() => {
        setOpenChild(null);
    }, [handleOpenMenu]);

    return (
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
                {MENU_LIST.map((item, index) => (
                    <div key={`menu-item-${index}`}>
                        {/* Item */}
                        <Link
                            {...(item.to ? { to: item.to } : {})}
                            onClick={() => {
                                if (item.children) {
                                    handleOpenChild(index); // Open submenu
                                } else {
                                    handleOpenMenu(); // Close menu
                                }
                            }}
                            className="group flex items-center cursor-pointer"
                        >
                            <span className="relative">
                                {item.title}

                                {!item.children || item.children.length === 0 ? (
                                    <span
                                        className="absolute
                            bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                            group-hover:w-full"
                                    ></span>
                                ) : null}
                            </span>

                            {item.children && item.children.length > 0 && (
                                <>
                                    {openChild === index ? (
                                        <AiOutlineMinus className="opacity-100 scale-100 text-[14px] p-[3px] w-[20px] h-[20px] transition-all duration-500" />
                                    ) : (
                                        <AiOutlinePlus
                                            className="opacity-100 scale-100 sm:opacity-0 sm:scale-50 text-[14px] p-[3px] w-[20px] h-[20px] transition-all duration-500
                                group-hover:opacity-100 group-hover:scale-100"
                                        />
                                    )}
                                </>
                            )}
                        </Link>

                        {/* Sub-children */}
                        {item.children && item.children.length > 0 && openChild === index && (
                            <div className="!m-0 ml-[40px] text-[16px] flex flex-col">
                                {item.children.map((child, childIndex) => (
                                    <Link
                                        key={`child-item-${index}-${childIndex}`}
                                        {...(child.to ? { to: child.to } : {})}
                                        className="cursor-pointer p-2 px-4"
                                        onClick={() => {
                                            handleOpenMenu(); // Close menu
                                        }}
                                    >
                                        <span className="group relative">
                                            {child.title}
                                            <span
                                                className="absolute
                                    bg-black h-[1px] w-0 left-0 bottom-0 transition-all duration-500
                                    group-hover:w-full"
                                            ></span>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuItem;
