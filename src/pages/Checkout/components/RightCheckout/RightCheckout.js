import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { CiCreditCard1, CiDeliveryTruck, CiGift } from 'react-icons/ci';
import { MdCurrencyExchange } from 'react-icons/md';
import { IMAGES_PRODUCT } from '~/assets/img';

function RightCheckout({ setSlideMenuHeading, handleOpenSlideBar }) {
    return (
        <div className="bg-white p-8">
            <div className="flex justify-between items-center">
                <span className="font-medium text-[20px]">My Shopping Cart</span>
                <span className="text-[14px] underline cursor-pointer">Modify the Selection</span>
            </div>
            <div className="flex items-center mt-8 pb-4 border-b border-gray-300">
                <div className="bg-gray-200 w-[100px] h-[100px] border mr-5">
                    <img src={IMAGES_PRODUCT.jacketDenimBlue1_1} className="w-auto h-full object-cover" />
                </div>
                <div>
                    <p>Maverik 2 In 1 Denim Jacket</p>
                    <p>800.000 VND</p>
                </div>
            </div>
            <div className="font-medium mt-4">
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
