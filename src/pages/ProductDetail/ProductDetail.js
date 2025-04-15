import { useLocation } from 'react-router-dom';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import './ProductDetail.css';
import NotiAdded from './NotiAdded/NotiAdded';
import { getProductByIdAPI } from '~/service/productService';
import { formatName, formatPrice } from '~/utils/format';
import { addToCartAPI } from '~/service/cartService';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { SideBarContext } from '~/context/SideBarContext';

function ProductDetail() {
    const location = useLocation();
    const productId = location.state?.productId;
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetCartByUserId } = useContext(SideBarContext);
    const [isReadDes, setIsReadDes] = useState(false);
    const [productDetailData, setProductDetailData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [formAddCartData, setFormAddCartData] = useState({
        userId: userId,
        productId: productId,
        quantity: 1,
        size: '',
        isMultiple: false,
    });

    useEffect(() => {
        const handleGetProductById = async () => {
            try {
                setIsLoading(true);
                const res = await getProductByIdAPI(productId);

                console.log('get product by id res', res);
                setProductDetailData(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        handleGetProductById();
    }, [productId]);

    const toggleReadDes = () => {
        setIsReadDes((prev) => !prev);
    };

    const handleAddToCart = async () => {
        if (!formAddCartData.size) {
            return toast.error('Please choose size');
        }

        const convertFormDataAddCart = {
            userId: formAddCartData.userId,
            products: [
                {
                    productId: formAddCartData.productId,
                    quantity: formAddCartData.quantity,
                    size: formAddCartData.size,
                },
            ],
            isMultiple: false,
        };

        if (userId) {
            try {
                console.log('data add cart', convertFormDataAddCart);
                const res = await addToCartAPI(convertFormDataAddCart);

                console.log(res);
                handleGetCartByUserId(userId,'Cart')
                toast.success(res.data.msg);
                setType('Cart');
                setIsOpen(true);
                
            } catch (error) {
                console.log(error);
            }
        } else {
            setType('Account');
            setIsOpen(true);
            return toast.error('Please login first');
        }
    };

    return (
        <>
            {isLoading ? (
                <p>Loading.....</p>
            ) : (
                <>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* IMAGE WRAP  */}
                            <div className=" bg-white sm:bg-red-400 border-r border-gray-200">
                                <div className="slider-container h-[50vh] w-full sm:h-full sm:flex-col sm:overflow-y-auto">
                                    {productDetailData.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="slider-item min-w-[100%] sm:w-full bg-gray-300 sm:min-h-[300px] scroll-"
                                        >
                                            <img
                                                className="h-full w-full object-cover"
                                                src={image}
                                                alt={`product-${index}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Order and Information */}
                            <div className="sticky top-0 self-start p-[24px] sm:px-[200px] sm:pt-[120px] sm:pb-[50px] min-h-[100vh] bg-white">
                                <div className=" w-full h-full">
                                    {/* Name and Price */}
                                    <div className="mb-4">
                                        <h5 className="text-[20px] sm:text-[28px] font-semibold">
                                            {formatName(productDetailData.name)}
                                        </h5>
                                        <p className="sm:my-2 sm:text-[18px]">
                                            {formatPrice(productDetailData.price)} VND
                                        </p>
                                    </div>
                                    {/* Select Option */}
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleAddToCart();
                                        }}
                                        className="space-y-5"
                                    >
                                        {/* Size */}
                                        <div className="pb-5">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="">Size</p>
                                                <span
                                                    onClick={() => {}}
                                                    className="font-semibold border-b border-black cursor-pointer"
                                                >
                                                    Size chart
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-4 gap-6">
                                                {productDetailData.size.map((sizeOption, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() =>
                                                            setFormAddCartData((prev) => ({
                                                                ...prev,
                                                                size: sizeOption.name,
                                                            }))
                                                        }
                                                        className={`border text-center text-[16px] sm:text-[18px] py-1 cursor-pointer
                                                            ${
                                                                formAddCartData.size === sizeOption.name
                                                                    ? 'border-black text-black'
                                                                    : 'border-gray-300 text-gray-400 hover:border-black hover:text-black'
                                                            }`}
                                                    >
                                                        {sizeOption.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex items-center justify-between">
                                            <p>Quantity</p>
                                            <div className="flex items-center">
                                                <FiMinus
                                                    className="cursor-pointer w-[18px] h-[18px]"
                                                    onClick={() => {
                                                        if (formAddCartData.quantity > 1) {
                                                            setFormAddCartData((prev) => ({
                                                                ...prev,
                                                                quantity: prev.quantity - 1,
                                                            }));
                                                        }
                                                    }}
                                                />
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    min="1"
                                                    max="10"
                                                    value={formAddCartData.quantity}
                                                    onChange={(e) => {
                                                        const value = parseInt(e.target.value, 10);
                                                        if (!isNaN(value) && value >= 1 && value <= 10) {
                                                            setFormAddCartData((prev) => ({
                                                                ...prev,
                                                                quantity: value,
                                                            }));
                                                        }
                                                    }}
                                                    step="1"
                                                    className="text-center w-[50px] text-[20px] outline-none"
                                                />
                                                <FiPlus
                                                    className="cursor-pointer w-[18px] h-[18px]"
                                                    onClick={() => {
                                                        if (formAddCartData.quantity < 10) {
                                                            setFormAddCartData((prev) => ({
                                                                ...prev,
                                                                quantity: prev.quantity + 1,
                                                            }));
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Add cart button */}
                                        <button
                                            type="submit"
                                            className="mt-4 w-full bg-black sm:hover:bg-white text-white sm:hover:text-black border hover:border-black text-[16px] sm:text-[18px] font-medium py-3 rounded-3xl transition-all duration-300"
                                        >
                                            Place in Cart
                                        </button>
                                    </form>

                                    {/* Description */}
                                    <div className="w-full overflow-hidden relative mt-5">
                                        <div
                                            className={`relative transition-all duration-500 ease-in-out pb-[10px] ${
                                                isReadDes ? 'max-h-none opacity-100' : 'max-h-[120px] opacity-55'
                                            }`}
                                        >
                                            <p className="text-justify">{productDetailData.description}</p>
                                            <br />
                                            <ul className="list-disc pl-6">
                                                <li>Light Blue Washes</li>
                                                <li>Denim 14.5 OZ</li>
                                                <li>Made in Viet Nam</li>
                                            </ul>
                                        </div>

                                        {!isReadDes && (
                                            <div
                                                className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"
                                                style={{
                                                    pointerEvents: 'none',
                                                }}
                                            />
                                        )}
                                    </div>

                                    <button className="text-left mt-2 pb-5 border-b border-gray-200 w-full">
                                        <span onClick={toggleReadDes} className="cursor-pointer border-b border-black ">
                                            {!isReadDes ? 'Read more' : 'Read less'}
                                        </span>
                                    </button>

                                    {/* Policy */}
                                    <>
                                        <div className="flex items-center justify-between py-5 border-b border-gray-200">
                                            <p>Payment Policy</p>
                                            <IoIosArrowForward className="cursor-pointer" onClick={() => {}} />
                                        </div>
                                        <div className="flex items-center justify-between py-5 border-b border-gray-200">
                                            <p>Delivery & Return Policy</p>
                                            <IoIosArrowForward className="cursor-pointer" onClick={() => {}} />
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Noti Added to Cart
                    {openAddedProduct ? (
                        <NotiAdded
                            
                        />
                    ) : null} */}
                </>
            )}
        </>
    );
}

export default ProductDetail;
