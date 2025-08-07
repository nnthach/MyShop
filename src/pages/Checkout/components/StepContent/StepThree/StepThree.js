import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getOrderByIdAPI } from '~/service/orderService';

function StepThree() {
    const [orderDetail, setOrderDetail] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const id = queryParams.get('id');
    const total = queryParams.get('total');
    const qrCodeImage = `https://qr.sepay.vn/img?acc=LOCSPAY000332826&bank=ACB&amount=${total}&des=${id}`;

    let interval;

    const handleGetOrderById = async () => {
        if (!id) return;

        try {
            const res = await getOrderByIdAPI(id);
            console.log('get order detail res', res);

            if (res.data.data.status !== 'Pending') {
                clearInterval(interval);
            }

            if (res.data.data.status === 'Paid') {
                setIsSuccess(true);
            } else {
                setIsSuccess(false);
            }

            setOrderDetail(res.data.data);
        } catch (error) {
            console.log('get order detail err', error);
        }
    };

    useEffect(() => {
        interval = setInterval(() => {
            handleGetOrderById();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="bg-white w-full flex flex-col items-center p-5">
            <h1 className="text-2xl font-bold text-green-500">Let's finish your order!</h1>
            <div className="w-[30%] my-2">
                <img src={qrCodeImage} alt="qr-code" className="w-full object-contain" />
            </div>

            <div className="w-[40%] space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b pb-1">
                    <span className="font-medium">Account Owner</span>
                    <span className="text-right">NGUYEN NGOC THACH</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                    <span className="font-medium">Account Number</span>
                    <span className="text-right">SDGEGERGERGERGERG</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                    <span className="font-medium">Total</span>
                    <span className="text-right text-green-500 font-bold">{total} VND</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Content</span>
                    <span className="text-right text-gray-500">{id}</span>
                </div>
            </div>

            <div className="mt-10 text-right w-[40%]">
                <button className="bg-red-500 hover:bg-red-600 text-white pb-1 px-2 rounded-md">Cancel Process</button>
            </div>
        </div>
    );
}

export default StepThree;
