import { useContext } from 'react';
import { StepperCheckoutContext } from '~/context/StepperCheckoutContext';

function StepTwo() {
    const { setMethodPayment, setCurrentStep } = useContext(StepperCheckoutContext);
    const handleChooseMethod = (name) => {
        setMethodPayment(name);
        setCurrentStep(3);
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
