import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function NotiAdded({ formatName, addProductData, handleOpenAddedProduct, setAddProductData }) {
    return (
        <>
            <div className="fixed bg-black top-[80px] left-0 bottom-0 right-0 sm:opacity-80 z-0 ease duration-1000"></div>
            <div className="fixed bg-white border-t border-gray-200 sm:w-[33%] right-0 top-[80px] z-10 p-10">
                {/*Heading */}
                <div className="flex justify-between items-center font-semibold text-[22px] pb-10">
                    <p>Added to Cart</p>
                    <AiOutlineClose
                        className="cursor-pointer"
                        onClick={() => {
                            handleOpenAddedProduct();
                            setAddProductData(null);
                        }}
                    />
                </div>
                {/*Content */}
                <div className="flex">
                    {/*Image */}
                    <div className="w-[150px] h-[150px]">
                        <img src={addProductData.image} alt="product-added" className="w-full h-full object-cover" />
                    </div>
                    {/*Info */}
                    <div className="space-y-2 ml-5">
                        <p>
                            <b>{formatName(addProductData.name)}</b>
                        </p>
                        <p>
                            <b className="font-semibold">Color:</b> {addProductData.color}
                        </p>
                        <p>
                            <b className="font-semibold">Size:</b> {addProductData.size}
                        </p>
                        <p>
                            <b className="font-semibold">Price:</b> {addProductData.price.toLocaleString('vi-VN')} VND
                        </p>
                        <p>
                            <b className="font-semibold">Quantity: </b>
                            {addProductData.quantity}
                        </p>
                        <div className="flex">
                            <p className="font-semibold">
                                Total: {(addProductData.price * addProductData.quantity).toLocaleString('vi-VN')} VND
                            </p>
                        </div>0
                    </div>
                </div>

                {/*Button */}
                <div className="mt-8 space-y-2">
                    <Link to={'/cart'}>
                        <button className="bg-black border border-black text-white w-full font-medium  rounded-2xl py-2">
                            View my Cart
                        </button>
                    </Link>
                    <button
                        onClick={() => handleOpenAddedProduct()}
                        className="bg-white border border-black w-full font-medium rounded-2xl py-2"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </>
    );
}

export default NotiAdded;
