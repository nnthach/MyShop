/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { StepperCheckoutContext } from '~/context/StepperCheckoutContext';

function HeaderStep() {
    const { currentStep, setCurrentStep } = useContext(StepperCheckoutContext);

    const dataStep = [
        {
            number: 1,
            text: 'Delivery',
        },
        {
            number: 2,
            text: 'Payment method',
        },
        {
            number: 3,
            text: 'Payment',
        },
    ];
    return (
        <div className="flex items-center justify-center w-full h-20 bg-white">
            <div className="flex items-center justify-center gap-[30px]">
                {dataStep.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-[10px]"
                            onClick={() => {
                                setCurrentStep(item.number);
                            }}
                        >
                            <span
                                className={`cursor-pointer flex items-center justify-center w-7 h-7 font-semibold rounded-full border
    ${currentStep >= item.number ? 'bg-black text-white border-black' : 'text-gray-300  border-gray-300 '}`}
                            >
                                {item.number}
                            </span>
                            <span
                                className={`cursor-pointer uppercase font-semibold
    ${currentStep >= item.number ? 'text-black' : 'text-gray-300'}`}
                            >
                                {item.text}
                            </span>

                            {index != dataStep.length - 1 && (
                                <div
                                    className={`w-[100px] h-[2px]
    ${currentStep > item.number ? 'bg-black' : 'bg-gray-300'}`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HeaderStep;
