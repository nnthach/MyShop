import { MdOutlineAttachMoney } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { IoShirtOutline } from 'react-icons/io5';
import { TbShoppingCartCopy } from 'react-icons/tb';
import { useState } from 'react';

function Dashboard() {
    const [barChartData, setBarChartData] = useState({});
    return (
        <div>
            <div>
                <h1 className="text-4xl text-white font-semibold">Dashboard</h1>
            </div>
            {/*Short information */}
            <div className="my-10 grid grid-cols-4 gap-5">
                <div className="text-[26px] bg-white px-5 py-2 rounded-xl">
                    <span className="font-bold">Users</span>
                    <div className="flex items-center justify-between">
                        <span className=" font-medium">238</span>
                        <AiOutlineUser className="border border-2 border-green-500 text-green-500 w-10 h-10 p-1 rounded-full" />
                    </div>
                </div>
                <div className="text-[26px] bg-white px-5 py-2 rounded-xl">
                    <span className=" font-bold">Products</span>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">238</span>
                        <IoShirtOutline className="border border-2 border-green-500 text-green-500 w-10 h-10 p-1 rounded-full" />
                    </div>
                </div>
                <div className="text-[26px] bg-white px-5 py-2 rounded-xl">
                    <span className=" font-bold">Orders</span>
                    <div className="flex items-center justify-between">
                        <span className=" font-medium">238</span>
                        <TbShoppingCartCopy className="border border-2 border-green-500 text-green-500 w-10 h-10 p-1 rounded-full" />
                    </div>
                </div>
                <div className="text-[26px] bg-white px-5 py-2 rounded-xl">
                    <span className=" font-bold">Payment</span>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">238</span>
                        <MdOutlineAttachMoney className="border border-2 border-green-500 text-green-500 w-10 h-10 p-1 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
