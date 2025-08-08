import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { getOrderDetailAPI } from '~/service/orderDetailService';
import { getOrderByIdAPI } from '~/service/orderService';

function OrderSuccess({ orderId }) {
    const [productOrderDetail, setProductOrderDetail] = useState([]);
    const [orderInfoData, setOrderInfoData] = useState(null);

    console.log('orderInfoData', orderInfoData);

    const fetchOrderDetail = async () => {
        try {
            const res = await getOrderDetailAPI(orderId);
            console.log('get order detail res', res);
            setProductOrderDetail(res.data.data.products);

            const getOrderShippingAddress = await getOrderByIdAPI(orderId);
            console.log('get order address res', getOrderShippingAddress.data.data.shippingInfo);
            setOrderInfoData(getOrderShippingAddress.data.data.shippingInfo);
        } catch (error) {
            console.log('get order detail err', error);
        }
    };

    useEffect(() => {
        fetchOrderDetail();
    }, []);

    const totalOrder = productOrderDetail.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);

    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center h-full space-y-5">
            {/*Status  icon */}
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                <FaCheck color="white" fontSize={30} />
            </div>
            {/*Text */}
            <div className="text-center">
                <h1 className="text-3xl font-medium mb-2">Thank you for your order</h1>
                <p className="text-gray-500">We've received your order will ship in 2-5 business days</p>
                <p className="text-gray-500">Your order number is #{orderId}</p>
            </div>
            {/*Order summary */}
            <div className="bg-white p-4 rounded-lg w-[60%] flex items-start space-x-4">
                {/*Order */}
                <div className="w-[60%]">
                    <h5 className="font-medium text-xl mb-4">Order Summary</h5>
                    {/*Product list */}
                    <div className="flex flex-col space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-1 pb-2">
                        {productOrderDetail.map((product, index) => (
                            //Product item
                            <div className="flex items-start justify-between">
                                <div className="flex items-start">
                                    <div className="bg-gray-200 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] border mr-3">
                                        <img src={product.images[0]} className="w-auto h-full object-cover" />
                                    </div>
                                    <div className="text-[12px] sm:text-4 flex flex-col space-y-1">
                                        <p className="text-[14px] font-medium">
                                            {product.name} ({product.size})
                                        </p>
                                        <p>{product.price} VND</p>
                                        <p>Qty: {product.quantity}</p>
                                    </div>
                                </div>
                                <p className="text-[14px] font-medium">{product.quantity * product.price} VND</p>
                            </div>
                        ))}
                    </div>
                    {/*Total */}
                    <div className="flex items-center justify-between font-semibold text-[18px] border-t border-gray-200 pt-2">
                        <p>Total</p>
                        <p>{totalOrder} VND</p>
                    </div>
                </div>
                {/*Delivery */}
                <div className="flex-1 h-full pl-5">
                    <h5 className="font-medium text-xl mb-4">Delivery</h5>
                    <div className="space-y-2">
                        <p>
                            <strong>Fullname:</strong> {orderInfoData?.lastName} {orderInfoData?.firstName}
                        </p>
                        <p>
                            <strong>Address:</strong> {orderInfoData?.streetAddress}, {orderInfoData?.city},{' '}
                            {orderInfoData?.state}, {orderInfoData?.country}.
                        </p>
                        <p>
                            <strong>Phone: </strong>
                            {orderInfoData?.phone}
                        </p>
                        <p>
                            <strong>Email:</strong> {orderInfoData?.email}
                        </p>
                    </div>
                </div>
            </div>

            <Link to={'/'}>
                <button className="border border-black px-2 pb-1 rounded-lg">Back to Home</button>
            </Link>
        </div>
    );
}

export default OrderSuccess;
