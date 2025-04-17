import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

function ProductDetailFooter({ productDetailData }) {
    const [isReadDes, setIsReadDes] = useState(false);

    const toggleReadDes = () => {
        setIsReadDes((prev) => !prev);
    };

    return (
        <>
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
        </>
    );
}

export default ProductDetailFooter;
