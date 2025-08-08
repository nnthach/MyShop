import { useEffect, useState } from 'react';
import { CiMemoPad } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { TbPointFilled } from 'react-icons/tb';
import { getOrderOfUserAPI } from '~/service/orderService';

function MyOrder() {
    const [filterOrder, setFilterOrder] = useState('all');
    const [orderListData, setOrderListData] = useState([]);

    const fetchUserOrder = async () => {
        try {
            const res = await getOrderOfUserAPI();
            console.log('get user order res', res);
            setOrderListData(res.data.data);
        } catch (error) {
            console.log('get user order err', error);
        }
    };

    useEffect(() => {
        fetchUserOrder();
    }, []);

    return (
        <div>
            {/*Filter */}
            <ul className="flex gap-4">
                <li
                    className={`border border-grey-500 text-gray-500 px-4 pb-1 rounded-xl cursor-pointer  ${
                        filterOrder == 'all' ? 'bg-black text-white border-black hover:bg-black' : 'hover:bg-gray-200'
                    }`}
                >
                    All
                </li>
                <li
                    className={`border border-grey-500 text-gray-500 px-4 pb-1 rounded-xl cursor-pointer ${
                        filterOrder == 'pending'
                            ? 'bg-black text-white border-black hover:bg-black'
                            : 'hover:bg-gray-200'
                    }`}
                >
                    Pending
                </li>
                <li
                    className={`border border-grey-500 text-gray-500 px-4 pb-1 rounded-xl cursor-pointer  ${
                        filterOrder == 'paid' ? 'bg-black text-white border-black hover:bg-black' : 'hover:bg-gray-200'
                    }`}
                >
                    Paid
                </li>
                <li
                    className={`border border-grey-500 text-gray-500 px-4 pb-1 rounded-xl cursor-pointer ${
                        filterOrder == 'shipped'
                            ? 'bg-black text-white border-black hover:bg-black'
                            : 'hover:bg-gray-200'
                    }`}
                >
                    Shipped
                </li>
            </ul>

            {/*Order list */}
            <div className="mt-4">
                {/*Order item */}
                {orderListData.map((order) => (
                    <div
                        key={order._id}
                        className="border border-gray-300 p-4 pb-5 rounded-lg flex items-center justify-between"
                    >
                        {/*Left */}
                        <div className="space-y-1">
                            {/*Heading */}
                            <div className="flex gap-3 items-center mb-2">
                                <p
                                    className={`rounded-2xl pb-1 px-2 font-semibold flex items-center gap-[1px]
                                                    ${
                                                        order.status === 'Pending' &&
                                                        'bg-yellow-300 bg-opacity-60 text-orange-400'
                                                    }
                                                    ${
                                                        order.status === 'Paid' &&
                                                        'bg-blue-200 bg-opacity-60 text-blue-600'
                                                    }
                                                    ${
                                                        order.status === 'Shipped' &&
                                                        'bg-green-200 bg-opacity-60 text-green-600'
                                                    }
                                                `}
                                >
                                    <TbPointFilled className="mt-1" />
                                    {order.status}
                                </p>
                                <div className="w-[1px] h-5 bg-gray-300" />
                                <p className="pb-1">
                                    {new Date(order?.createdAt).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>
                            <p className="text-green-700 font-bold flex items-center gap-1">
                                <CiMemoPad fontSize={20} />
                                Order ID: {order._id}
                            </p>
                            <p>Payment Method: {order.paymentMethod}</p>
                            <p className="font-bold">Total Amount: {order.totalAmount.toLocaleString()} VND</p>
                        </div>
                        {/*Right */}
                        <IoIosArrowForward className="text-green-700 cursor-pointer" fontSize={26} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyOrder;
