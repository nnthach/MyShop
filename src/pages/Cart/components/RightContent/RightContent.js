import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { CiCreditCard1, CiDeliveryTruck, CiGift } from 'react-icons/ci';
import { MdCurrencyExchange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SideBarContext } from '~/context/SideBarContext';

function RightContent({ setSlideMenuHeading, handleOpenSlideBar }) {
    const { productCartData } = useContext(SideBarContext);
    console.log('product cart data', productCartData);

    const totalPrice = productCartData.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    return (
        <div className="bg-white w-full sm:min-h-[500px]">
            <div className="sm:py-10 sm:px-12 p-6">
                <div className="font-medium">
                    <div className="flex justify-between text-center mb-2">
                        <p>Subtotal</p>
                        <p>{totalPrice} VND</p>
                    </div>
                    <div className="flex justify-between text-center">
                        <p>Tax</p>
                        <p>0 VND</p>
                    </div>
                    <div className="flex justify-between text-center text-[20px] my-6">
                        <p>Total</p>
                        <p>{totalPrice} VND</p>
                    </div>
                </div>

                <Link to={'/checkout'}>
                    <button className="bg-black border text-white hover:bg-white hover:text-black hover:border-black  py-3 px-6 rounded-3xl font-medium w-full transition-all duration-300">
                        Proceed to Checkout
                    </button>
                </Link>
            </div>

            {/*Order policy */}
            <div className="border-t border-gray-200 sm:py-5 sm:px-12 p-6">
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

export default RightContent;
