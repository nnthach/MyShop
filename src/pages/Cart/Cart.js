import { IMAGES_PRODUCT } from '~/assets/img';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { CiCreditCard1, CiDeliveryTruck, CiGift } from 'react-icons/ci';

function Cart() {
    const productsInCart = [
        {
            name: 'Maverik 2 In 1 Denim Jacket',
            price: 800000,
            color: 'Blue',
            size: 'XL',
            quantity: 1,
            image: IMAGES_PRODUCT.jacketDenimBlue1_2,
        },
        {
            name: 'Maverik 2 In 1 Denim Jacket',
            price: 800000,
            color: 'Black',
            size: 'XL',
            quantity: 1,
            image: IMAGES_PRODUCT.jacketDenimBlue1_2,
        },
    ];

    const handleChangeQuantity = (e) => {};

    const handleIncrease = () => {};

    const handleDecrease = () => {};
    return (
        <div className="grid grid-cols-3">
            {/*Left */}
            <div className="bg-gray-200 col-span-2 w-full min-h-[500px] px-[128px] pt-6 pb-20">
                {/*Heading */}
                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-medium my-6">My Shopping Cart</h3>
                    <p className="underline cursor-pointer">Continue Shopping</p>
                </div>
                {/*Container */}
                <div>
                    {/*Each product */}
                    {productsInCart.map((product, index) => (
                        <div key={index} className="flex bg-white mb-5">
                            {/*Image */}
                            <div className="w-[380px] p-1 border-r border-gray-200">
                                <img src={product.image} className="w-full h-auto object-cover" />
                            </div>

                            {/*Info */}
                            <div className="flex-1">
                                <div className="p-6 flex justify-between items-center">
                                    <h5 className="text-[20px]">{product.name}</h5>
                                    <IoIosArrowForward className="cursor-pointer" />
                                </div>
                                <div className="border-y border-gray-200 p-6">
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

                                        <p className="text-[18px] font-medium">
                                            {(product.quantity * product.price).toLocaleString('vi-VN')} VND
                                        </p>
                                    </div>

                                    {/*Note */}
                                    <p className="bg-gray-200 mt-6 p-4 italic">
                                        Note:
                                        <br /> Due to the high demand of this product, additional delivery time of up to
                                        two weeks may be required.
                                    </p>
                                </div>

                                {/*Button control product */}
                                <div className="grid grid-cols-2 text-[18px]">
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
                    ))}
                </div>

                <div className="text-right mt-10">
                    <button className="bg-black border text-white hover:bg-white hover:text-black hover:border-black  py-4 px-6 rounded-3xl font-medium transition-all duration-300">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
            {/*Right */}
            <div className="bg-white w-full min-h-[500px] ">
                <div className="py-10 px-12">
                    <div className="font-medium">
                        <div className="flex justify-between text-center mb-2">
                            <p>Subtotal</p>
                            <p>1000000 VND</p>
                        </div>
                        <div className="flex justify-between text-center mb-2">
                            <p>Shipping</p>
                            <p>10000000 VND</p>
                        </div>
                        <div className="flex justify-between text-center">
                            <p>Tax</p>
                            <p>10000000 VND</p>
                        </div>
                        <div className="flex justify-between text-center text-[20px] my-6">
                            <p>Total</p>
                            <p>10000000 VND</p>
                        </div>
                    </div>

                    <button className="bg-black border text-white hover:bg-white hover:text-black hover:border-black  py-3 px-6 rounded-3xl font-medium w-full transition-all duration-300">
                        Proceed to Checkout
                    </button>
                </div>

                {/*Order policy */}
                <div className="border-t border-gray-200 py-5 px-12">
                    <div className="cursor-pointer bg-white w-full border-b border-gray-200 flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <CiCreditCard1 className="text-[50px] mr-6" />
                            <div>
                                <p className="text-[20px] font-medium">Payment</p>
                                <p>Visa, QR Code</p>
                            </div>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <div className="cursor-pointer bg-white w-full border-b border-gray-200 flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <CiDeliveryTruck className="text-[50px] mr-6" />
                            <div>
                                <p className="text-[20px] font-medium">Shipping & Delivery</p>
                                <p>Complimentary Carbon Efficient Delivery</p>
                            </div>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <div className="cursor-pointer bg-white w-full border-b border-gray-200 flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <CiDeliveryTruck className="text-[50px] mr-6" />
                            <div>
                                <p className="text-[20px] font-medium">Return & Exchanges</p>
                                <p>Complimentary </p>
                            </div>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <div className="cursor-pointer bg-white w-full flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <CiGift className="text-[50px] mr-6" />
                            <div>
                                <p className="text-[20px] font-medium">Gifting</p>
                                <p>Discover all the details behind the perfect gift </p>
                            </div>
                        </div>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
