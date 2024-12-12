import { FaFacebookF, FaSquareInstagram } from 'react-icons/fa6';

function Footer() {
    return (
        <div className="bg-black text-white py-8">
            <div className="grid grid-cols-4 gap-16 p-5 px-10">
                {/*One */}
                <div>
                    <h4 className="text-[26px] font-semibold mb-4">About Us</h4>
                    <p className="text-justify">
                        Maverik Studio, established in 2018, is dedicated to offering high-quality, stylish, and
                        versatile fashion products. We create designs that are both fashionable and practical, catering
                        to diverse lifestyles and needs. At Maverik Studio, we aim to provide an exceptional shopping
                        experience with modern, sustainable fashion.
                    </p>
                    <div className="flex mt-4">
                        <span
                            className="flex items-center justify-center w-[30px] h-[30px] bg-gray-300 text-black 
                         hover:border-4 hover:border-gray-300 hover:bg-black hover:text-white hover:scale-125 transition-transform duration-200 ease-in-out  
                        rounded-full text-[18px] cursor-pointer"
                        >
                            <FaFacebookF />
                        </span>
                        <span
                            className="ml-4 flex items-center justify-center w-[30px] h-[30px] bg-gray-300 text-black 
                         hover:border-4 hover:border-gray-300 hover:bg-black hover:text-white hover:scale-125 transition-transform duration-200 ease-in-out  
                        rounded-full text-[18px] cursor-pointer"
                        >
                            <FaSquareInstagram />
                        </span>
                    </div>
                </div>
                {/*Two */}
                <div>
                    <h4 className="text-[26px] font-semibold mb-4">Services</h4>
                    <p className="mb-2 cursor-pointer">Return Policy</p>
                    <p className="mb-2 cursor-pointer">Shipping Policy</p>
                    <p className="cursor-pointer">Payment Guide</p>
                </div>
                {/*Three */}
                <div>
                    <h4 className="text-[26px] font-semibold mb-4">Contact Us</h4>
                    <p className="mb-2 cursor-pointer">
                        Address: 230/1 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City
                    </p>
                    <p className="mb-2 cursor-pointer">Email: maverikstudio@gmail.com</p>
                    <p className="cursor-pointer">Phone: 0901234567</p>
                </div>
                {/*Four */}
                <div>
                    <h4 className="text-[26px] font-semibold mb-4">Our Stores</h4>
                    <p className="mb-2 cursor-pointer">
                        Store 1: 230/1 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City
                    </p>
                    <p className="cursor-pointer">Store 2: Aqua 4 Vinhome Golden River, District 1, Ho Chi Minh City</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
