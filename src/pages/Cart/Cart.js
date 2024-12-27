import { IMAGES_PRODUCT } from '~/assets/img';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { IoCloseCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { CiCreditCard1, CiDeliveryTruck, CiGift } from 'react-icons/ci';
import { MdCurrencyExchange } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import OpenImage from './components/OpenImage/OpenImage';
import RightContent from './components/RightContent/RightContent';
import FilterMenu from './components/FilterMenu/FilterMenu';
import { Link } from 'react-router-dom';

function Cart() {
    const [openProductImage, setOpenProductImage] = useState([]);
    const [slideMenuHeading, setSlideMenuHeading] = useState('');
    const [openSlideBar, setOpenSlideBar] = useState(false);

    useEffect(() => {
        if (openProductImage.length > 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openProductImage]);

    const productsInCart = [
        {
            id: 1,
            name: 'Maverik 2 In 1 Denim Jacket',
            price: 800000,
            color: 'Blue',
            size: 'XL',
            quantity: 1,
            image: [IMAGES_PRODUCT.jacketDenimBlue1_2, IMAGES_PRODUCT.jacketDenimBlue1_3],
        },
        {
            id: 2,
            name: 'Maverik 2 In 1 Denim Jacket',
            price: 800000,
            color: 'Black',
            size: 'XL',
            quantity: 1,
            image: [IMAGES_PRODUCT.jacketDenimRaw1_1, IMAGES_PRODUCT.jacketDenimRaw1_2],
        },
    ];

    const handleChangeQuantity = (e) => {};

    const handleIncrease = () => {};

    const handleDecrease = () => {};

    const handleOpenSlideBar = () => {
        setOpenSlideBar((prev) => !prev);
    };

    return (
        <>
            <div className="sm:grid sm:grid-cols-3">
                {/*Left */}
                <div className="bg-gray-200 col-span-2 w-full min-h-[500px] px-6 sm:px-[128px] pt-6 pb-10 sm:pb-20">
                    {/*Heading */}
                    <div className="flex items-center my-2 sm:my-6 justify-between">
                        <h3 className="text-[18px] sm:text-[26px] font-medium ">My Shopping Cart</h3>
                        <p className="text-[12px] sm:text-[16px] underline cursor-pointer">Continue Shopping</p>
                    </div>
                    {/*Container */}
                    <div>
                        {/*Each product */}
                        {productsInCart.map((product, index) => (
                            <>
                                <div key={index} className="sm:flex bg-white mb-5">
                                    {/*Image */}
                                    <div className="flex">
                                        <div className="relative w-[132px] sm:w-[380px] p-1 sm:border-r border-gray-200">
                                            <img src={product.image[0]} className=" w-full h-auto object-cover" />
                                            <span
                                                onClick={() => setOpenProductImage(product.image)}
                                                className="absolute right-2 sm:right-4 top-2 sm:top-4 text-[20px] sm:text-[26px] cursor-pointer"
                                            >
                                                <IoSearchOutline />
                                            </span>
                                        </div>

                                        <div className="w-[60%] flex p-2 sm:hidden justify-between items-center">
                                            <h5 className="text-[16px] font-medium">{product.name}</h5>
                                            <IoIosArrowForward className="cursor-pointer" />
                                        </div>
                                    </div>

                                    {/*Info */}
                                    <div className="sm:flex-1">
                                        <div className="hidden p-6 sm:flex justify-between items-center">
                                            <h5 className="text-[20px]">{product.name}</h5>
                                            <IoIosArrowForward className="cursor-pointer" />
                                        </div>
                                        <div className="border-y border-gray-200 p-6 text-[14px] sm:text-[16px]">
                                            <div className="flex items-center justify-between">
                                                <p>Color</p>
                                                <p>{product.color}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p>Size</p>
                                                <p>{product.size}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <select className="border border-gray-300 hover:border-black p-2">
                                                    <option>1</option>
                                                </select>

                                                <p className="text-[16px] sm:text-[18px] font-medium">
                                                    {(product.quantity * product.price).toLocaleString('vi-VN')} VND
                                                </p>
                                            </div>

                                            {/*Note */}
                                            <p className="bg-gray-200 mt-6 p-4 italic text-[14px] sm:text-[16px]">
                                                Note:
                                                <br /> Due to the high demand of this product, additional delivery time
                                                of up to two weeks may be required.
                                            </p>
                                        </div>

                                        {/*Button control product */}
                                        <div className="grid grid-cols-2 text-[14px] sm:text-[18px]">
                                            <p className="cursor-pointer hover:bg-gray-100 border-r border-gray-200 py-3 flex justify-center items-center">
                                                <span className="flex items-center gap-2">
                                                    <FaRegHeart />
                                                    Add to Wishlist
                                                </span>
                                            </p>
                                            <p className="cursor-pointer hover:bg-gray-100 py-3 flex justify-center items-center">
                                                <span className="flex items-center gap-2">
                                                    <IoCloseCircleOutline className="mt-[3px]" />
                                                    Remove
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/*Open image */}
                                {openProductImage.length > 0 ? (
                                    <OpenImage
                                        openProductImage={openProductImage}
                                        setOpenProductImage={setOpenProductImage}
                                    />
                                ) : null}
                            </>
                        ))}
                    </div>

                    <div className="hidden sm:block text-right mt-10">
                        <Link to={'/checkout'}>
                            <button className=" bg-black border text-white hover:bg-white hover:text-black hover:border-black  py-4 px-6 rounded-3xl font-medium transition-all duration-300">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>

                {/*Right */}
                <RightContent handleOpenSlideBar={handleOpenSlideBar} setSlideMenuHeading={setSlideMenuHeading} />
            </div>

            {/*Slidebar */}
            <FilterMenu
                slideMenuHeading={slideMenuHeading}
                openSlideBar={openSlideBar}
                handleOpenSlideBar={handleOpenSlideBar}
            />
            {/*Overlay */}
            <div
                className={
                    openSlideBar
                        ? 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 sm:opacity-80 z-0 sm:z-[4] ease duration-1000'
                        : 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 ease duration-500 sm:z-[-4] pointer-events-none'
                }
            ></div>
        </>
    );
}

export default Cart;
