import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function SecondStep({ step, doneStep, setStep, setDoneStep }) {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        city: '',
        district: '',
        ward: '',
        address: '',
        phone: '',
    });
    const [error, setError] = useState({
        firstname: '',
        lastname: '',
        city: '',
        district: '',
        ward: '',
        address: '',
        phone: '',
    });

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <div
                className={`h-[80px] sm:h-[100px] bg-gray-100 ${
                    step == 2 && !doneStep.includes(2)
                        ? 'bg-white'
                        : step != 2 || doneStep.includes(2)
                        ? 'bg-white'
                        : ''
                }  cursor-pointer flex items-center justify-between p-6 sm:p-8`}
            >
                <div
                    className={`text-[20px] sm:text-[26px] flex items-center text-gray-400${
                        step == 2 && !doneStep.includes(2)
                            ? 'text-black'
                            : step != 2 || doneStep.includes(2)
                            ? 'text-black'
                            : ''
                    }  `}
                >
                    {!doneStep.includes(2) ? (
                        <span
                            className={`inline-block text-center  w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] leading-[25px] rounded-full mr-4 border-2 border-black bg-black text-white `}
                        >
                            2
                        </span>
                    ) : (
                        <span className="inline-block  w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full mr-2 sm:mr-4 bg-green-600">
                            <FaCheck className="ml-[50%] translate-x-[-50%] mt-[50%] translate-y-[-50%] text-white" />
                        </span>
                    )}

                    <span className="">Delivery</span>
                </div>
                {doneStep.includes(2) ? (
                    <span
                        onClick={() => {
                            setStep(2);
                            setDoneStep(doneStep.filter((step) => step !== 2));
                        }}
                        className="underline text-[12px] sm:text-[14px] ml-auto"
                    >
                        Modify
                    </span>
                ) : null}
            </div>

            {step == 2 && !doneStep.includes(2) ? (
                <div className="bg-white p-6 sm:p-8 border-t border-gray-200">
                    <form
                        id="formData"
                        onSubmit={handleSubmitForm}
                        className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-5"
                    >
                        {/*Name */}
                        <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5">
                            <div>
                                <label className="sm:text-4 text-[14px] block mb-2 text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    onChange={handleChangeForm}
                                    value={formData.firstname}
                                    className={`w-full border ${
                                        error.firstname ? 'border-red-500' : 'border-gray-300'
                                    }  px-2 pb-2 py-1 sm:px-4 sm:py-3 sm:text-[18px] rounded outline-none`}
                                />
                                {error.firstname && <span className="block mb-4 text-red-500">{error.firstname}</span>}
                            </div>
                            <div>
                                <label className="sm:text-4 text-[14px] block mb-2 text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    onChange={handleChangeForm}
                                    value={formData.lastname}
                                    className={`w-full border ${
                                        error.lastname ? 'border-red-500' : 'border-gray-300'
                                    }  px-2 pb-2 py-1 sm:px-4 sm:py-3 sm:text-[18px] rounded outline-none`}
                                />
                                {error.lastname && <span className="block mb-4 text-red-500">{error.lastname}</span>}
                            </div>
                        </div>
                        {/*City */}
                        <div>
                            <label
                                className={`sm:text-4 text-[14px] block mb-2 mt-4 ${
                                    error.password ? 'text-red-500' : 'text-gray-700'
                                } text-gray-700`}
                            >
                                City
                            </label>
                            <select
                                name="city"
                                onChange={handleChangeForm}
                                value={formData.city}
                                className={`w-full border ${
                                    error.city ? 'border-red-500' : 'border-gray-300'
                                } px-2 py-1 sm:px-4 sm:py-3 text-[14px] sm:text-[18px] rounded outline-none`}
                            >
                                <option value="">Select City</option>
                            </select>
                            {error.city && <span className="block mb-4 text-red-500">{error.city}</span>}
                        </div>
                        {/*District */}
                        <div>
                            <label
                                className={`sm:text-4 text-[14px] block mb-2 mt-4 ${
                                    error.password ? 'text-red-500' : 'text-gray-700'
                                } text-gray-700`}
                            >
                                District
                            </label>
                            <select
                                name="district"
                                onChange={handleChangeForm}
                                value={formData.district}
                                className={`w-full border ${
                                    error.district ? 'border-red-500' : 'border-gray-300'
                                } px-2 py-1 sm:px-4 sm:py-3 text-[14px] sm:text-[18px] rounded outline-none`}
                            >
                                <option value="">Select District</option>
                            </select>
                            {error.district && <span className="block mb-4 text-red-500">{error.district}</span>}
                        </div>
                        {/*Ward */}
                        <div>
                            <label
                                className={`sm:text-4 text-[14px] block mb-2 mt-4 ${
                                    error.password ? 'text-red-500' : 'text-gray-700'
                                } text-gray-700`}
                            >
                                Ward
                            </label>
                            <select
                                name="ward"
                                onChange={handleChangeForm}
                                value={formData.ward}
                                className={`w-full border ${
                                    error.ward ? 'border-red-500' : 'border-gray-300'
                                } px-2 py-1 sm:px-4 sm:py-3 text-[14px] sm:text-[18px] rounded outline-none`}
                            >
                                <option value="">Select Ward</option>
                            </select>
                            {error.ward && <span className="block mb-4 text-red-500">{error.ward}</span>}
                        </div>
                        {/*Address */}
                        <div className="sm:col-span-2">
                            <label
                                className={`sm:text-4 text-[14px] block mb-2 mt-4 ${
                                    error.password ? 'text-red-500' : 'text-gray-700'
                                } text-gray-700`}
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                onChange={handleChangeForm}
                                value={formData.address}
                                className={`w-full border ${
                                    error.lastname ? 'border-red-500' : 'border-gray-300'
                                }  px-2 pb-2 py-1 sm:px-4 sm:py-3 sm:text-[18px] rounded outline-none`}
                            />

                            {error.address && <span className="block mb-4 text-red-500">{error.address}</span>}
                        </div>
                        {/*Phone */}
                        <div>
                            <label
                                className={`sm:text-4 text-[14px] block mb-2 mt-4 ${
                                    error.password ? 'text-red-500' : 'text-gray-700'
                                } text-gray-700`}
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChangeForm}
                                value={formData.phone}
                                className={`w-full border ${
                                    error.lastname ? 'border-red-500' : 'border-gray-300'
                                }  px-2 pb-2 py-1 sm:px-4 sm:py-3 sm:text-[18px] rounded outline-none`}
                            />

                            {error.phone && <span className="block mb-4 text-red-500">{error.email}</span>}
                        </div>
                    </form>
                    <div className="text-right mt-4">
                        <button
                            type="submit"
                            form="formData"
                            className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-3 sm:py-4 w-full sm:w-[300px] rounded-full text-[14px] sm:text-[18px] rounded-full transition-all duration-300"
                        >
                            Continue to Payment
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default SecondStep;
