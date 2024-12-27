import { useState } from 'react';

function FirstStep() {
    const [stepOneForm, setStepOneForm] = useState('guest');

    return (
        <div>
            <div className="h-[100px] bg-gray-100 cursor-pointer flex items-center p-8">
                <div className="text-[26px]">
                    <span className="text-gray-400 inline-block text-center w-[40px] h-[40px] leading-[35px] rounded-full mr-4 border-2 border-gray-400">
                        1
                    </span>
                    <span className="text-gray-400">Identification</span>
                </div>
            </div>
            <div className="bg-white p-8 border-t border-gray-200">
                {stepOneForm == 'guest' ? (
                    //Guest
                    <div>
                        <p className="mb-6">
                            Please enter your email address. You may continue as a guest or connect to your MyLV account
                            if you already have one.
                        </p>
                        <form>
                            <label className="block mb-2 text-gray-700">Email</label>
                            <input
                                type="text"
                                name="email"
                                className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                            />
                            <span className="block mb-4 text-red-500">Please enter correct email</span>
                            <div className="flex items-center mb-6">
                                <input type="checkbox" className=" w-[20px] h-[20px] mr-2" />
                                <span>
                                    I have read and understood the{' '}
                                    <span class="underline cursor-pointer">Privacy Policy</span>, and I agree to receive
                                    marketing communications via email.
                                </span>
                            </div>

                            <div className="text-right pt-2">
                                <button className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-4 w-[300px] rounded-full text-[18px] transition-all duration-300">
                                    Continue as a Guest
                                </button>
                            </div>
                        </form>

                        <div class="relative flex items-center py-5 mt-4">
                            <div class="flex-grow border-t border-[#e1e1e1]"></div>
                            <span class="mx-4 text-md text-[#e1e1e1] font-medium">OR</span>
                            <div class="flex-grow border-t border-[#e1e1e1]"></div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span>Sign in to your account</span>
                            <button
                                onClick={() => setStepOneForm('signin')}
                                className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-4 w-[300px] rounded-full text-[18px] transition-all duration-300"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                ) : (
                    // Account
                    <div>
                        <p className="mb-6">Connect with you Maverik account</p>
                        <form>
                            <label className="block mb-2 text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                            />
                            <span className="block mb-4 text-red-500">Please enter correct username</span>

                            <label className="block mb-2 text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                            />
                            <span className="block mb-4 text-red-500">Please enter correct password</span>

                            <p className="underline cursor-pointer">Forgot your password?</p>

                            <div className="text-right py-5">
                                <button
                                    onClick={() => setStepOneForm('guest')}
                                    className="mr-4 border hover:border-black hover:bg-black hover:text-white border-black bg-white text-black  py-4 w-[250px] rounded-full text-[18px] transition-all duration-300"
                                >
                                    Cancel
                                </button>
                                <button className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-4 w-[250px] rounded-full text-[18px] transition-all duration-300">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FirstStep;
