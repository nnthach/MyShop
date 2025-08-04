import { IoIosArrowForward } from 'react-icons/io';
import { IoCloseCircleOutline, IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SideBarContext } from '~/context/SideBarContext';
import OpenImage from '~/pages/Cart/components/OpenImage/OpenImage';

function LeftContent({ setOpenProductImage, openProductImage }) {
    const { productCartData } = useContext(SideBarContext);

    const handleChangeQuantity = (index, newQuantity) => {};

    return (
        <div className="bg-gray-200 col-span-2 w-full max-h-[110vh]">
            <div className=" h-full overflow-y-auto px-6 sm:px-[128px] pt-6 sm:pb-10 custom-scrollbar">
                {/*Heading */}
                <div className="flex items-center my-2 sm:my-6 justify-between">
                    <h3 className="text-[18px] sm:text-[26px] font-medium ">My Shopping Cart</h3>
                    <p className="text-[12px] sm:text-[16px] underline cursor-pointer">Continue Shopping</p>
                </div>
                {/*Container */}
                <div>
                    {/*Each product */}
                    {productCartData.map((product, index) => (
                        <div key={index}>
                            <div key={index} className="sm:flex bg-white mb-5">
                                {/*Image */}
                                <div className="flex">
                                    <div className="relative w-[132px] sm:w-[380px] p-1 sm:border-r border-gray-200">
                                        <img
                                            src={product.images[0]}
                                            loading="lazy"
                                            className=" w-full h-auto object-cover"
                                        />
                                        <span
                                            onClick={() => setOpenProductImage(product.images)}
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
                                            <p>{product.color.join(', ')}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p>Size</p>
                                            <p>{product.size}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <select
                                                className="border border-gray-300 hover:border-black p-2"
                                                value={product.quantity}
                                                onChange={(e) => handleChangeQuantity(index, parseInt(e.target.value))}
                                            >
                                                {[...Array(10)].map((_, i) => (
                                                    <option value={i + 1} key={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </select>

                                            <p className="text-[16px] sm:text-[18px] font-medium">
                                                {(product.quantity * product.price).toLocaleString('vi-VN')} VND
                                            </p>
                                        </div>

                                        {/*Note */}
                                        <p className="bg-gray-200 mt-6 p-4 italic text-[14px] sm:text-[16px]">
                                            Note:
                                            <br /> Due to the high demand of this product, additional delivery time of
                                            up to two weeks may be required.
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LeftContent;
