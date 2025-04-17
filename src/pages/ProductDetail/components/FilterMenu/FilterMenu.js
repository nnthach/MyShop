import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IMAGES } from '~/assets/img';

function FilterMenu({ slideMenuHeading, openSlideBar, handleOpenSlideBar }) {
    const menuData = [
        {
            name: 'Size chart',
            image: IMAGES.sizeChartJK,
        },
        {
            name: 'Delivery & Return Policy',
            content: (
                <>
                    <h3 className="font-semibold">Return Policy</h3>
                    <h4 className="font-bold">RETURN GUIDELINES</h4>
                    <div className="px-2 text-justify">
                        <h5 className="font-semibold mt-2">1. Return Conditions</h5>
                        <ul className="list-disc pl-5">
                            <li>
                                For clothing products, returns are accepted within 3 days from the day the customer
                                receives the package and are only applicable for items with manufacturing defects. (No
                                returns for intact products).
                            </li>
                            <li>Returned products must have the purchase invoice from Maverik Studio.</li>
                            <li>
                                All products must be returned in their original condition, with tags still attached, and
                                must not have been used.
                            </li>
                            <li>If the product’s tag has been cut, we will not process the return.</li>
                            <li>
                                In case of a refund, we will process it within 48 working hours after receiving your
                                request.
                            </li>
                            <li>This policy applies to all orders within Maverik Studio’s system.</li>
                        </ul>
                        <h5 className="text-gray-500 italic">
                            Note: Please send us a video clip of the return packaging. Our staff will verify and process
                            your return request.
                        </h5>

                        <h5 className="font-semibold mt-2">2. How to Record the Unboxing Video:</h5>
                        <ul className="list-disc pl-5">
                            <li>
                                The video should clearly show the package surface, the unboxing process, and the
                                inspection of the product.
                            </li>
                            <li>The video should not be edited or cut.</li>
                            <li>
                                The video should clearly display the details on the package: recipient name, order
                                number, address, and phone number.
                            </li>
                        </ul>
                    </div>

                    <h3 className="font-semibold">Shipping Policy</h3>
                    <h5 className="font-bold">Delivery Time:</h5>
                    <div className="px-2 text-justify">
                        <p className="font-semibold mt-2">1. For Ho Chi Minh City:</p>
                        <ul className="list-disc pl-5">
                            <li>
                                Express delivery within 4 hours for urgent orders and 24 hours for pre-ordered items
                                (Excludes Sundays and public holidays).
                            </li>
                        </ul>
                        <p className="font-semibold mt-2">2. For Out-of-Town areas:</p>
                        <ul className="list-disc pl-5">
                            <li>Delivery within 3-4 days (Excludes Sundays and public holidays).</li>
                        </ul>
                        <p className="text-gray-500 italic text-justify">
                            Note: Delivery times may vary between 3-5 days during major sales periods.
                        </p>

                        <p className="font-semibold mt-2">3. Number of Delivery Attempts:</p>
                        <ul className="list-disc pl-5">
                            <li className="text-justify">
                                Delivery service will attempt to deliver the order up to 3 times.
                            </li>
                            <li className="text-justify">
                                If the first attempt fails, the delivery service will contact you to arrange a second
                                delivery. You will have up to 3 chances to receive the package.
                            </li>
                        </ul>
                        <p className="text-gray-500 italic text-justify">
                            Note: In case of natural disasters or other extraordinary events affecting delivery, we
                            reserve the right to change the delivery time without prior notice.
                        </p>

                        <p className="font-semibold mt-2">4. Order Status Check:</p>
                        <ul className="list-disc pl-5">
                            <li className="text-justify">
                                You can check your order status by visiting "My Orders" or by contacting our customer
                                support team via Facebook/Instagram Fanpage or our hotline.
                            </li>
                        </ul>
                    </div>
                </>
            ),
        },
        {
            name: 'Payment Policy',
            content: (
                <>
                    <p className="text-justify">
                        Payments are accepted via credit card, debit card, Apple Pay, or PayPal with a valid billing
                        address and United States shipping address. Accepted credit cards are Visa, American Express,
                        Discover, and Mastercard.
                        <br />
                        <br /> When placing an order, your billing address must correspond to the address of your credit
                        card, or we will not be able to process your order. <br />
                        <br />
                        All transactions are secured. The Louis Vuitton website is provided with an SSL encryption
                        system to protect personal and payment data.
                    </p>
                </>
            ),
        },
    ];

    const menuItem = menuData.find((item) => item.name === slideMenuHeading);
    return (
        <div
            className={
                openSlideBar
                    ? 'fixed top-0 sm:top-0 right-0 h-full w-full sm:w-[550px] overflow-y-auto custom-scrollbar z-[5] pt-5  bg-white opacity-100 ease-in-out duration-1000 transform translate-x-0'
                    : 'fixed top-0 sm:top-0 right-[-100%] h-full w-full sm:w-[550px] z-[5] py-5  bg-white opacity-0 ease-in-out duration-500 transform translate-x-[-100%] pointer-events-none'
            }
        >
            <div className="relative text-center ">
                <p className="text-[18px] sm:text-[24px] font-semibold">{slideMenuHeading}</p>
                <AiOutlineClose
                    className="text-[18px] sm:text-[24px] absolute top-[50%] translate-y-[-50%] right-5 cursor-pointer"
                    onClick={handleOpenSlideBar}
                />
            </div>

            <div className="">
                {menuItem && (
                    <div className="p-5">
                        {menuItem.image && (
                            <div className="text-center w-full">
                                <img src={menuItem.image} alt={menuItem.name} />
                            </div>
                        )}
                        {menuItem.content && <div>{menuItem.content}</div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FilterMenu;
