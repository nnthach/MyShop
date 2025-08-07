import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StepperCheckoutContext } from '~/context/StepperCheckoutContext';
import { createPaymentVNPAYAPI, updateOrderAPI } from '~/service/orderService';

function StepTwo() {
    const { setMethodPayment, setCurrentStep } = useContext(StepperCheckoutContext);
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const id = queryParams.get('id');
    const total = queryParams.get('total');

    const handleChooseMethod = async (name) => {
        try {
            const res = await updateOrderAPI({ paymentMethod: name }, id);
            console.log('update order method res', res);
            setMethodPayment(name);

            if (name == 'visa') {
                const urlPaymentVNPAY = await createPaymentVNPAYAPI({ orderId: id, totalAmount: total });
                console.log('urlPaymentVNPAY', urlPaymentVNPAY);
                window.location.href = urlPaymentVNPAY.data.data; 
            } else {
                setCurrentStep(3);
                navigate(`/checkout?id=${id}&total=${total}&payment_method=${name}`);
            }
        } catch (error) {
            console.log('update payment method err', error);
        }
    };
    return (
        <div className="w-full min-h-[100px] text-center bg-white p-5">
            <h3 className="text-xl font-bold">How would you like to pay?</h3>
            <div className="flex items-center justify-center gap-3 mt-5">
                <div
                    onClick={() => handleChooseMethod('qr-code')}
                    className="p-1 border border-gray-300 w-[150px] h-[60px] overflow-hidden cursor-pointer"
                >
                    <img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png"
                        className="w-full"
                    />
                </div>
                <div
                    onClick={() => handleChooseMethod('visa')}
                    className="p-1 border border-gray-300 w-[150px] h-[60px] overflow-hidden cursor-pointer"
                >
                    <img
                        src="https://e8wm23is9ki.exactdn.com/wp-content/uploads/2017/07/Visa.png?strip=all&lossy=1&resize=1920%2C648&ssl=1"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default StepTwo;
