function SecondStep() {
    return (
        <div>
            <div className="h-[100px] bg-gray-100 cursor-pointer flex items-center p-8">
                <div className="text-[26px]">
                    <span className="text-gray-400 inline-block text-center w-[40px] h-[40px] leading-[35px] rounded-full mr-4 border-2 border-gray-400">
                        2
                    </span>
                    <span className="text-gray-400">Delivery</span>
                </div>
            </div>
            <div className="bg-white p-8 border-t border-gray-200">
                <form className="grid grid-cols-3 gap-x-5">
                    {/*Name */}
                    <div className="col-span-3 grid grid-cols-2 gap-x-5">
                        <div>
                            <label className="block mb-2 text-gray-700">First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                            />
                            <span className="block mb-4 text-red-500">Please enter correct name</span>
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-700">Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                            />
                            <span className="block mb-4 text-red-500">Please enter correct name</span>
                        </div>
                    </div>
                    {/*City */}
                    <div>
                        <label className="block mb-2 text-gray-700">City</label>
                        <select
                            name="city"
                            className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                        >
                            <option>City</option>
                        </select>
                        <span className="block mb-4 text-red-500">Please choose city</span>
                    </div>
                    {/*District */}
                    <div>
                        <label className="block mb-2 text-gray-700">District</label>
                        <select
                            name="district"
                            className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                        >
                            <option>District</option>
                        </select>
                        <span className="block mb-4 text-red-500">Please choose district</span>
                    </div>
                    {/*Ward */}
                    <div>
                        <label className="block mb-2 text-gray-700">Ward</label>
                        <select
                            name="ward"
                            className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                        >
                            <option>Ward</option>
                        </select>
                        <span className="block mb-4 text-red-500">Please choose ward</span>
                    </div>
                    {/*Address */}
                    <div className="col-span-2">
                        <label className="block mb-2 text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                        />

                        <span className="block mb-4 text-red-500">Please enter correct address</span>
                    </div>
                    {/*Phone */}
                    <div>
                        <label className="block mb-2 text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            className="w-full border border-gray-300 px-4 py-3 text-[18px] rounded outline-none"
                        />

                        <span className="block mb-4 text-red-500">Please enter correct phone number</span>
                    </div>
                </form>
                <div className="text-right mt-4">
                    <button className="border hover:border-black hover:bg-white hover:text-black bg-black text-white py-4 w-[300px] rounded-full text-[18px] transition-all duration-300">
                        Continue to Payment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SecondStep;
