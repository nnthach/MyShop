import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function FirstStep({ step, doneStep, setStep, setDoneStep }) {
    const [stepOneForm, setStepOneForm] = useState('guest');
    const [guestData, setGuestData] = useState({ email: '' });
    const [signinData, setSigninData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (stepOneForm === 'guest') {
            setGuestData((prev) => ({
                ...prev,
                [name]: value,
            }));
            setError((prev) => ({
                ...prev,
                email: '',
            }));
        } else if (stepOneForm === 'signin') {
            setSigninData((prev) => ({
                ...prev,
                [name]: value,
            }));
            setError((prev) => ({
                ...prev,
                username: '',
                password: '',
            }));
        }
    };

    const handleSubmitGuestData = (e) => {
        e.preventDefault();
        if (!guestData.email) {
            setError((prev) => ({
                ...prev,
                email: 'Please enter email',
            }));

            return;
        }
        console.log('guest data', guestData);

        if (guestData.email.match(/^\S+@\S+\.\S+$/)) {
            setError((prev) => ({
                ...prev,
                email: '',
            }));
        } else {
            setError((prev) => ({
                ...prev,
                email: 'Please enter correct email',
            }));
        }
    };

    const handleSubmitSigninData = (e) => {
        e.preventDefault();
        if (!signinData.username && !signinData.password) {
            setError((prev) => ({
                ...prev,
                username: 'Please enter username',
                password: 'Please enter password',
            }));

            return;
        }
        console.log('signin data', signinData);
    };

    return (
        <div>
            <div
                className={`h-[80px] sm:h-[100px] bg-gray-100 ${
                    step == 1 && !doneStep.includes(1)
                        ? 'bg-white'
                        : step != 1 || doneStep.includes(1)
                        ? 'bg-white'
                        : ''
                }  cursor-pointer flex items-center justify-between p-6 sm:p-8`}
            >
                <div
                    className={`text-[20px] sm:text-[26px] flex items-center text-gray-400${
                        step == 1 && !doneStep.includes(1)
                            ? 'text-black'
                            : step != 1 || doneStep.includes(1)
                            ? 'text-black'
                            : ''
                    }  `}
                >
                    {!doneStep.includes(1) ? (
                        <span
                            className={`inline-block text-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] leading-[25px] rounded-full mr-4 border-2 border-black bg-black text-white `}
                        >
                            1
                        </span>
                    ) : (
                        <span className="inline-block w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full mr-2 sm:mr-4 bg-green-600">
                            <FaCheck className="ml-[50%] translate-x-[-50%] mt-[50%] translate-y-[-50%] text-white" />
                        </span>
                    )}

                    <span className="">Identification</span>
                </div>
                {doneStep.includes(1) ? (
                    <span
                        onClick={() => {
                            setStep(1);
                            setDoneStep(doneStep.filter((step) => step !== 1));
                        }}
                        className="underline text-[12px] sm:text-[14px] ml-auto"
                    >
                        Modify
                    </span>
                ) : null}
            </div>

            {step == 1 && !doneStep.includes(1) ? (
                <div className=" bg-white p-6 sm:p-8 border-t border-gray-200">
                    {stepOneForm == 'guest' ? (
                        //Guest
                        <div>
                            <p className="sm:text-4 text-[14px] mb-4 sm:mb-6">
                                Please enter your email address. You may continue as a guest or connect to your MyLV
                                account if you already have one.
                            </p>
                            <form onSubmit={handleSubmitGuestData}>
                                <label
                                    className={`sm:text-4 text-[14px] block mb-2 ${
                                        error.email ? 'text-red-500' : 'text-gray-700'
                                    } `}
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={guestData.email}
                                    className={`w-full border ${
                                        error.email ? 'border-red-500' : 'border-gray-300'
                                    } px-2 pb-2 py-1 sm:px-4 sm:py-3 sm:text-[18px] rounded outline-none`}
                                />
                                {error.email && (
                                    <span className="block text-[12px] sm:text-[16px] mb-2 sm:mb-4 text-red-500">
                                        {error.email}
                                    </span>
                                )}

                                <div className="flex items-start sm:items-center my-4 sm:my-6">
                                    <input type="checkbox" className=" w-[20px] h-[20px] mr-2" />
                                    <span className="sm:text-4 text-[14px]">
                                        I have read and understood the{' '}
                                        <span class="underline cursor-pointer">Privacy Policy</span>, and I agree to
                                        receive marketing communications via email.
                                    </span>
                                </div>

                                <div className="text-center sm:text-right pt-2">
                                    <button
                                        type="submit"
                                        className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-3 sm:py-4 w-full sm:w-[300px] rounded-full text-[14px] sm:text-[18px] transition-all duration-300"
                                    >
                                        Continue as a Guest
                                    </button>
                                </div>
                            </form>

                            <div class="relative flex items-center py-3 sm:py-5 my-4 sm:mt-4">
                                <div class="flex-grow border-t border-[#e1e1e1]"></div>
                                <span class="mx-4 text-md text-[#e1e1e1] font-medium">OR</span>
                                <div class="flex-grow border-t border-[#e1e1e1]"></div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <span className="text-[14px] mb-2 sm:mb-0">Sign in to your account</span>
                                <button
                                    onClick={() => setStepOneForm('signin')}
                                    className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-3 sm:py-4 w-full sm:w-[300px] rounded-full text-[14px] sm:text-[18px] transition-all duration-300"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Account
                        <div>
                            <p className="sm:text-4 text-[14px] mb-4 sm:mb-6">Connect with you Maverik account</p>
                            <form onSubmit={handleSubmitSigninData}>
                                <label
                                    className={`sm:text-4 text-[14px] block mb-2 ${
                                        error.username ? 'text-red-500' : 'text-gray-700'
                                    } text-gray-700`}
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleInputChange}
                                    value={signinData.username}
                                    className={`w-full border ${
                                        error.username ? 'border-red-500' : 'border-gray-300'
                                    }  px-2 pb-2 py-1 sm:px-4 sm:py-3 sm:text-[18px] rounded outline-none`}
                                />
                                {error.username && (
                                    <span className="block text-[12px] sm:text-[16px] mb-2 sm:mb-4 text-red-500">
                                        {error.username}
                                    </span>
                                )}

                                <label
                                    className={`sm:text-4 text-[14px] block mb-2 mt-4 ${
                                        error.password ? 'text-red-500' : 'text-gray-700'
                                    } text-gray-700`}
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={signinData.password}
                                    className={`w-full border ${
                                        error.password ? 'border-red-500' : 'border-gray-300'
                                    }  px-2 pb-2 py-1 sm:px-4 sm:py-3 sm:text-[18px] rounded outline-none`}
                                />
                                {error.password && (
                                    <span className="block text-[12px] sm:text-[16px] mb-2 sm:mb-4 text-red-500">
                                        {error.password}
                                    </span>
                                )}

                                <p className="underline cursor-pointer text-[12px] sm:text-4">Forgot your password?</p>

                                <div className="flex sm:block sm:text-right py-5">
                                    <button
                                        onClick={() => setStepOneForm('guest')}
                                        className="mr-4 border hover:border-black hover:bg-black hover:text-white border-black bg-white text-black  py-2 sm:py-4 w-[45%] sm:w-[250px] rounded-full text-[14px] sm:text-[18px] transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-2 sm:py-4 w-[45%] sm:w-[250px] rounded-full text-[14px] sm:text-[18px] transition-all duration-300"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default FirstStep;
