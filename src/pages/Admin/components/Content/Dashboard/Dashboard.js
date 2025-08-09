import { AiOutlineUser } from 'react-icons/ai';
import { IoShirtOutline } from 'react-icons/io5';
import { TbShoppingCartCopy } from 'react-icons/tb';
import { useEffect, useMemo, useState } from 'react';
import { getUserListAPI } from '~/service/authService';
import { getProductListAPI } from '~/service/productService';
import { getAllOrderAPI } from '~/service/orderService';

import { Bar, Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);

function Dashboard() {
    const [userListData, setUserListData] = useState([]);
    const [productListData, setProductListData] = useState([]);
    const [orderListData, setOrderListData] = useState([]);

    const getAllData = async () => {
        try {
            // user list
            const userList = await getUserListAPI();
            console.log('get user list api', userList);
            setUserListData(userList.data);

            // productt list
            const productList = await getProductListAPI();
            console.log('get product list api', productList);
            setProductListData(productList.data);

            // order list
            const orderList = await getAllOrderAPI();
            console.log('get order list api', orderList);
            setOrderListData(orderList.data.data);
        } catch (error) {
            console.log('get all data err', error);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);

    //================================================== order data chart
    const orderCountByMonth = useMemo(() => {
        const months = Array(12).fill(0);
        orderListData.forEach((order) => {
            const month = new Date(order.createdAt).getMonth();
            months[month] += 1;
        });
        return months;
    }, [orderListData]);

    const barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Orders per Month',
                data: orderCountByMonth,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // cho phép full height theo div
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Monthly Revenue' },
        },
    };
    // end order

    //==================================================== product data chart
    const productTypeCount = useMemo(() => {
        const counts = {};
        productListData.forEach((product) => {
            const type = product.type;
            counts[type] = (counts[type] || 0) + 1;
        });
        return counts;
    }, [productListData]);

    const donutChart = {
        labels: Object.keys(productTypeCount).map((label) => label.charAt(0).toUpperCase() + label.slice(1)),
        datasets: [
            {
                label: 'Products Type',
                data: Object.values(productTypeCount),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                hoverOffset: 4,
            },
        ],
    };

    const optionsProductChart = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Products Type Summary' },
        },
    };
    // end product

    //==================================================== user data chart
    const userCountByMonth = useMemo(() => {
        const months = Array(12).fill(0);
        userListData.forEach((user) => {
            const month = new Date(user.createdAt).getMonth();
            months[month] += 1;
        });
        return months;
    }, [userListData]);

    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Users per Month',
                data: userCountByMonth,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                fill: true, // nếu muốn Line có nền bên dưới
            },
        ],
    };

    const optionsUserChart = {
        responsive: true,
        maintainAspectRatio: false, // cho phép full height theo div
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Monthly Revenue' },
        },
    };
    // user data

    return (
        <div>
            <h1 className="text-3xl text-black font-bold">Dashboard</h1>
            {/*Short information */}
            <div className="my-8 grid grid-cols-4 gap-5">
                <div className="text-[22px] bg-white px-5 py-2 rounded-xl flex flex-col">
                    <span className="font-semibold text-[18px]">Users</span>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-green-500 font-bold">{userListData?.length}</span>
                        <AiOutlineUser className="border border-2 border-green-500 text-green-500 w-8 h-8 p-1 rounded-full" />
                    </div>
                </div>
                <div className="text-[22px] bg-white px-5 py-2 rounded-xl flex flex-col">
                    <span className=" font-semibold text-[18px]">Products</span>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-green-500 font-bold">{productListData?.length}</span>
                        <IoShirtOutline className="border border-2 border-green-500 text-green-500 w-8 h-8 p-1 rounded-full" />
                    </div>
                </div>
                <div className="text-[22px] bg-white px-5 py-2 rounded-xl flex flex-col">
                    <span className=" font-semibold text-[18px]">Orders</span>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-green-500 font-bold">{orderListData?.length}</span>
                        <TbShoppingCartCopy className="border border-2 border-green-500 text-green-500 w-8 h-8 p-1 rounded-full" />
                    </div>
                </div>
            </div>

            {/*Chart */}
            <div className="space-y-4">
                {/*Order chart */}
                <div className="w-full h-[500px] bg-white p-4 rounded-lg">
                    <Bar data={barChartData} options={options} />
                </div>

                <div className="flex gap-4">
                    {/*Product chart */}
                    <div className="w-[50%] h-[400px] bg-white p-4 rounded-lg">
                        <Pie data={donutChart} options={optionsProductChart} />
                    </div>

                    {/*User chart */}
                    <div className="w-[50%] h-[400px] bg-white p-4 rounded-lg">
                        <Line data={lineChartData} options={optionsUserChart} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
