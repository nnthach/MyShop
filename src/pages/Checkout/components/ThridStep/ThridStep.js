import { FaCheck } from 'react-icons/fa6';

function ThridStep({ step, doneStep, setStep, setDoneStep }) {
    return (
        <div>
            <div
                className={`h-[80px] sm:h-[100px] bg-gray-100 ${
                    step == 3 && !doneStep.includes(3)
                        ? 'bg-white'
                        : step != 3 || doneStep.includes(3)
                        ? 'bg-white'
                        : ''
                }  cursor-pointer flex items-center justify-between p-6 sm:p-8`}
            >
                <div
                    className={`text-[20px] sm:text-[26px] flex items-center text-gray-400${
                        step == 3 && !doneStep.includes(3)
                            ? 'text-black'
                            : step != 3 || doneStep.includes(3)
                            ? 'text-black'
                            : ''
                    }  `}
                >
                    {!doneStep.includes(3) ? (
                        <span
                            className={`inline-block text-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] leading-[25px] rounded-full mr-4 border-2 border-black bg-black text-white `}
                        >
                            3
                        </span>
                    ) : (
                        <span className="inline-block w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full mr-4 bg-green-600">
                            <FaCheck className="ml-[50%] translate-x-[-50%] mt-[50%] translate-y-[-50%] text-white" />
                        </span>
                    )}

                    <span className="">Payment</span>
                </div>

                {doneStep.includes(3) ? (
                    <span
                        onClick={() => {
                            setStep(3);
                            setDoneStep(doneStep.filter((step) => step !== 3));
                        }}
                        className="underline text-[12px] sm:text-[14px] ml-auto"
                    >
                        Modify
                    </span>
                ) : null}
            </div>

            {step == 3 && !doneStep.includes(3) ? <div className="bg-white p-8 border-t border-gray-200"></div> : null}
        </div>
    );
}

export default ThridStep;
