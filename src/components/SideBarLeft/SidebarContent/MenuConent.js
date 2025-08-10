import { useContext, useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { SideBarContext } from '~/context/SideBarContext';

function MenuContent() {
    const [openProductType, setOpenProductType] = useState(false);
    const { setIsOpenSideBarLeft } = useContext(SideBarContext);
    const navigate = useNavigate();
    return (
        <div>
            <ul className="space-y-2">
                <li className=" p-2 hover:bg-gray-200 cursor-pointer">New Arrivals</li>
                <li
                    onClick={() => {
                        navigate('/products/all');
                        setIsOpenSideBarLeft(false);
                    }}
                    className=" cursor-pointer"
                >
                    <p className="flex items-center justify-between  hover:bg-gray-200 p-2">
                        All Products
                        <IoIosArrowForward
                            className={`transition-all duration-100 ${openProductType ? 'rotate-90' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();

                                setOpenProductType((prev) => !prev);
                            }}
                        />
                    </p>
                    <ul className={`space-y-1 ${openProductType ? 'visible mt-2' : 'invisible h-0'}`}>
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/products/top');
                                setIsOpenSideBarLeft(false);
                            }}
                            className=" px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                            Top
                        </li>
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/products/bottom');
                                setIsOpenSideBarLeft(false);
                            }}
                            className=" px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                            Bottom
                        </li>
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/products/accessory');
                                setIsOpenSideBarLeft(false);
                            }}
                            className=" px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                            Accessory
                        </li>
                    </ul>
                </li>
                <li className=" p-2 hover:bg-gray-200 cursor-pointer">About Us</li>
                <li className=" p-2 hover:bg-gray-200 cursor-pointer">Contact</li>
            </ul>
        </div>
    );
}

export default MenuContent;
