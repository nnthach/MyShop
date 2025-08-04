import { IoIosArrowForward } from 'react-icons/io';
import { CiCreditCard1, CiDeliveryTruck, CiGift } from 'react-icons/ci';
import { MdCurrencyExchange } from 'react-icons/md';
import { useContext } from 'react';
import { SideBarContext } from '~/context/SideBarContext';

function RightCheckout({ setSlideMenuHeading, handleOpenSlideBar }) {
    const { productCartData } = useContext(SideBarContext);

    const total = productCartData.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return (
        <div className="bg-white pb-0 p-6 sm:pb-8 sm:p-8">
            <div className="flex justify-between items-center">
                <span className="font-medium text-[18px] sm:text-[20px]">My Shopping Cart</span>
                <span className="text-[12px] sm:text-[14px] underline cursor-pointer">Modify the Selection</span>
            </div>
            <div className="flex flex-col max-h-[350px] overflow-y-auto custom-scrollbar gap-2 mt-8 pb-4 ">
                {productCartData.map((product) => (
                    <div key={product.productId} className="flex items-start">
                        <div className="bg-gray-200 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border mr-3">
                            <img src={product.images[0]} className="w-auto h-full object-cover" />
                        </div>
                        <div className="text-[14px] sm:text-4">
                            <p className="text-base font-medium">{product.name}</p>
                            <p>{product.price} VND</p>
                            <p>Size: {product.size}</p>
                            <p>Qty: {product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-[14px] sm:text-4 font-medium mt-4 pt-4 border-t border-gray-300">
                <div className="flex justify-between text-center mb-2">
                    <p>Subtotal</p>
                    <p>{total} VND</p>
                </div>
                <div className="flex justify-between text-center mb-2">
                    <p>Shipping</p>
                    <p>0 VND</p>
                </div>
                <div className="flex justify-between text-center">
                    <p>Tax</p>
                    <p>0 VND</p>
                </div>
                <div className="flex justify-between text-center text-[18px] sm:text-[20px] my-6">
                    <p>Total</p>
                    <p>{total} VND</p>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <div
                    onClick={() => {
                        setSlideMenuHeading('Payment');
                        handleOpenSlideBar();
                    }}
                    className="cursor-pointer bg-white w-full border-b border-gray-200 flex items-center justify-between py-6"
                >
                    <div className="flex items-center">
                        <CiCreditCard1 className="text-[40px] sm:text-[50px] mr-6" />
                        <div>
                            <p className="text-[16px] sm:text-[20px] font-medium">Payment</p>
                            <p className="text-[14px] sm:text-[16px]">Visa, QR Code</p>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
                <div
                    onClick={() => {
                        setSlideMenuHeading('Shipping & Delivery');
                        handleOpenSlideBar();
                    }}
                    className="cursor-pointer bg-white w-full border-b border-gray-200 flex items-center justify-between py-6"
                >
                    <div className="flex items-center">
                        <CiDeliveryTruck className="text-[40px] sm:text-[50px] mr-6" />
                        <div>
                            <p className="text-[16px] sm:text-[20px] font-medium">Shipping & Delivery</p>
                            <p className="text-[14px] sm:text-[16px]">Complimentary Carbon Efficient Delivery</p>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
                <div
                    onClick={() => {
                        setSlideMenuHeading('Return & Exchanges');
                        handleOpenSlideBar();
                    }}
                    className="cursor-pointer bg-white w-full border-b border-gray-200 flex items-center justify-between py-6"
                >
                    <div className="flex items-center">
                        <MdCurrencyExchange className="text-[40px] sm:text-[50px] mr-6" />
                        <div>
                            <p className="text-[16px] sm:text-[20px] font-medium">Return & Exchanges</p>
                            <p className="text-[14px] sm:text-[16px]">Complimentary </p>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
                <div
                    onClick={() => {
                        setSlideMenuHeading('Gifting');
                        handleOpenSlideBar();
                    }}
                    className="cursor-pointer bg-white w-full flex items-center justify-between py-6"
                >
                    <div className="flex items-center">
                        <CiGift className="text-[40px] sm:text-[50px] mr-6" />
                        <div>
                            <p className="text-[16px] sm:text-[20px] font-medium">Gifting</p>
                            <p className="text-[14px] sm:text-[16px]">
                                Discover all the details behind the perfect gift{' '}
                            </p>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
}

export default RightCheckout;
