import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'; // Nếu dùng React Router v6+
import { checkPaymentVNPAYAPI } from '~/service/orderService';

function OrderLoading() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('loading');

    const navigate = useNavigate();

    useEffect(() => {
        const checkPayment = async () => {
            const rawParams = Object.fromEntries([...searchParams]);

            // Convert vnp_Amount / 100
            const params = {
                ...rawParams,
                vnp_Amount: Number(rawParams.vnp_Amount) / 100,
            };

            try {
                const res = await checkPaymentVNPAYAPI(params);

                console.log('res check payment', res);

                if (res.data.message == 'Payment success') {
                    navigate('/order', {
                        state: {
                            orderId: res.data.orderId,
                            message: 'Order success',
                        },
                    });
                } else {
                    navigate('/order', {
                        state: {
                            message: 'Order fail',
                        },
                    });
                }
            } catch (err) {
                console.error('Lỗi xác minh thanh toán:', err);
                setStatus('fail');
            }
        };

        checkPayment();
    }, [searchParams]);

    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center h-[90vh] space-y-5">
            <p>loading</p>
        </div>
    );
}

export default OrderLoading;
