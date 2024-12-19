import { useParams } from 'react-router-dom';
import { IMAGES_PRODUCT } from '~/assets/img';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import FilterMenu from './FilterMenu/FilterMenu';

function ProductDetail() {
    const { productId, productName } = useParams();
    const [isReadDes, setIsReadDes] = useState(false);
    const [openSlideBar, setOpenSlideBar] = useState(false);
    const [slideMenuHeading, setSlideMenuHeading] = useState('');
    const productDetailData = {
        name: productName,
        price: 800000,
        color: 'Blue',
        status: 'In Stock',
        size: [
            {
                option: 'S',
                sizeStatus: 'Available',
            },
            {
                option: 'M',
                sizeStatus: 'Available',
            },
            {
                option: 'L',
                sizeStatus: 'Unavailable',
            },
            {
                option: 'XL',
                sizeStatus: 'Available',
            },
        ],
        images: [
            IMAGES_PRODUCT.jacketDenimBlue1_1,
            IMAGES_PRODUCT.jacketDenimBlue1_2,
            IMAGES_PRODUCT.jacketDenimBlue1_3,
            IMAGES_PRODUCT.jacketDenimBlue1_4,
            IMAGES_PRODUCT.jacketDenimBlue1_5,
            IMAGES_PRODUCT.jacketDenimBlue1_6,
        ],

        sameType: [
            {
                id: 'a3046',
                color: 'Black',
                images: [
                    IMAGES_PRODUCT.jacketDenimRaw1_1,
                    IMAGES_PRODUCT.jacketDenimRaw1_2,
                    IMAGES_PRODUCT.jacketDenimRaw1_3,
                ],
            },
        ],
    };

    const [selectOptionData, setSelectOptionData] = useState({
        color: productDetailData.color,
        size: '',
        quantity: 1,
    });

    useEffect(() => {
        if (openSlideBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openSlideBar]);

    const formatName = (name) => {
        return name
            .replace(/-/g, ' ')
            .split(' ')
            .map((word) => word.toUpperCase())
            .join(' ');
    };

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN');
    };

    const handleColor = (selectColor) => {
        setSelectOptionData((prev) => ({
            ...prev,
            color: selectColor,
        }));
    };

    const handleSize = (selectSize) => {
        setSelectOptionData((prev) => ({
            ...prev,
            size: selectSize,
        }));
    };

    const handleChangeQuantity = (e) => {
        const value = parseInt(e.target.value, 10);
        //check is number
        if (!isNaN(value) && value >= 1 && value <= 10) {
            setSelectOptionData((prev) => ({
                ...prev,
                quantity: value,
            }));
        }
    };

    const handleIncrease = () => {
        if (selectOptionData.quantity < 10) {
            setSelectOptionData((prev) => ({
                ...prev,
                quantity: prev.quantity + 1,
            }));
        }
    };

    const handleDecrease = () => {
        if (selectOptionData.quantity > 1) {
            setSelectOptionData((prev) => ({
                ...prev,
                quantity: prev.quantity - 1,
            }));
        }
    };

    const toggleReadDes = () => {
        setIsReadDes((prev) => !prev);
    };

    const handleOpenSlideBar = () => {
        setOpenSlideBar((prev) => !prev);
    };

    return (
        <>
            <div>
                <div className="grid grid-cols-2">
                    {/*IMAGE WRAP */}
                    <div className="overflow-y-auto bg-red-400 border-r border-gray-200">
                        {productDetailData.images.map((image, index) => (
                            <div key={index} className=" bg-gray-300">
                                <img className="h-auto w-full object-cover" src={image} />
                            </div>
                        ))}
                    </div>

                    {/*Order and Information */}
                    <div className="px-[200px] pt-[120px] pb-[50px] min-h-[100vh] bg-white">
                        <div className=" w-full h-full">
                            {/*Name and Price */}
                            <div className="mb-4">
                                <h5 className="text-[28px] font-semibold">{formatName(productDetailData.name)}</h5>
                                <p className="my-2 text-[18px]">{formatPrice(productDetailData.price)} VND</p>
                            </div>

                            {/*Select Option */}
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log('submit', selectOptionData);
                                }}
                                className="space-y-5"
                            >
                                {/*Color */}
                                <div className="">
                                    <p className="mb-2">Color</p>
                                    <div className="grid grid-cols-4 gap-4">
                                        {/*Color of this product */}
                                        <div>
                                            <div
                                                onClick={() => handleColor(productDetailData.color)}
                                                className={`w-[110px] h-[110px] border hover:border-black ${
                                                    selectOptionData.color == productDetailData.color
                                                        ? 'border-black'
                                                        : 'border-gray-300'
                                                } cursor-pointer`}
                                            >
                                                <img
                                                    src={productDetailData.images[0]}
                                                    alt={`Product in color ${productDetailData.color}`}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <p>{productDetailData.color}</p>
                                            </div>
                                        </div>

                                        {/* Other product options */}
                                        {productDetailData.sameType && productDetailData.sameType.length > 0
                                            ? productDetailData.sameType.map((type, index) => (
                                                  <div key={index}>
                                                      <div
                                                          onClick={() => handleColor(type.color)}
                                                          className={`w-[110px] h-[110px] border hover:border-black ${
                                                              selectOptionData.color == type.color
                                                                  ? 'border-black'
                                                                  : 'border-gray-300'
                                                          } cursor-pointer`}
                                                      >
                                                          <img
                                                              src={type.images[0]}
                                                              alt={`Product in color ${type.color}`}
                                                              className="h-full w-full object-cover"
                                                          />
                                                      </div>
                                                      <div className="text-center">
                                                          <p>{type.color}</p>
                                                      </div>
                                                  </div>
                                              ))
                                            : null}
                                    </div>
                                </div>
                                {/*Size */}
                                <div className="pb-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="">Size</p>
                                        <span
                                            onClick={handleOpenSlideBar}
                                            className="font-semibold border-b border-black cursor-pointer"
                                        >
                                            Size chart
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-6">
                                        {productDetailData.size.map((sizeOption, index) => (
                                            <span
                                                key={index}
                                                onClick={() => handleSize(sizeOption.option)}
                                                className={`border  hover:border-black hover:text-black ${
                                                    selectOptionData.size == sizeOption.option
                                                        ? 'border-black text-black'
                                                        : 'border-gray-300 text-gray-400'
                                                } text-center text-[18px] py-1 cursor-pointer`}
                                            >
                                                {sizeOption.option}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/*Quatity */}
                                <div className="flex items-center justify-between">
                                    <p>Quatity</p>
                                    <div className="flex items-center">
                                        <FiMinus
                                            onClick={handleDecrease}
                                            className="cursor-pointer w-[18px] h-[18px]"
                                        />
                                        <input
                                            type="text"
                                            name="quantity"
                                            min="1"
                                            max="10"
                                            value={selectOptionData.quantity}
                                            step="1"
                                            onChange={handleChangeQuantity}
                                            className="text-center w-[50px] text-[20px] outline-none"
                                        />
                                        <FiPlus onClick={handleIncrease} className="cursor-pointer w-[18px] h-[18px]" />
                                    </div>
                                </div>

                                {/*Add cart button */}
                                <div className="">
                                    <button
                                        type="submit"
                                        className="mt-4 w-full bg-black hover:bg-white text-white hover:text-black border hover:border-black text-[18px] font-medium py-3 rounded-3xl transition-all duration-300"
                                    >
                                        Place in Cart
                                    </button>
                                </div>
                            </form>
                            {/*Description */}
                            <div className="w-full overflow-hidden relative mt-5">
                                <div
                                    className={`relative transition-all duration-500 ease-in-out pb-[10px] ${
                                        isReadDes ? 'max-h-none opacity-100' : 'max-h-[120px] opacity-55'
                                    }`}
                                >
                                    <p className="text-justify">
                                        Complimentary Express Delivery: Order by 12/19 at 12pm ET to receive by 12/24.
                                        <br /> <br />
                                        This colorful edition of the LV Trainer Sneaker in grained calf leather is part
                                        of the LV Colormania capsule collection. The vibrant palette highlights this
                                        model's elaborately constructed upper, which references vintage basketball
                                        sneakers. This cult design is complemented by rubber signatures, including the
                                        LV Initials on the upper and Monogram Flowers on the outsole.
                                    </p>
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
                            <button className="mt-2">
                                <span onClick={toggleReadDes} className="cursor-pointer border-b border-black ">
                                    {!isReadDes ? 'Read more' : 'Read less'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Slide bar */}
            <FilterMenu openSlideBar={openSlideBar} handleOpenSlideBar={handleOpenSlideBar} />

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

export default ProductDetail;
