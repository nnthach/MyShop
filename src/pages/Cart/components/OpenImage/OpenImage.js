import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function OpenImage({ openProductImage, setOpenProductImage }) {
    const [indexImageOpen, setIndexImageOpen] = useState(0);

    const nextImage = () => {
        if (indexImageOpen >= openProductImage.length - 1) {
            setIndexImageOpen(0);
        } else {
            setIndexImageOpen((prev) => prev + 1);
        }
    };

    const prevImage = () => {
        if (indexImageOpen <= 0) {
            setIndexImageOpen(openProductImage.length - 1);
        } else {
            setIndexImageOpen((prev) => prev - 1);
        }
    };
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-30 h-[100vh] bg-gray-100 ">
            <div className="relative w-full h-full flex items-center justify-center">
                <IoIosArrowBack
                    onClick={prevImage}
                    className="absolute left-1 sm:left-10 w-[50px] h-[50px] bg-white border border-gray-100 rounded-full p-3 cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
                />
                <img
                    src={openProductImage[indexImageOpen]}
                    className="w-full h-auto sm:h-full sm:w-auto object-cover"
                />
                <IoIosArrowForward
                    onClick={nextImage}
                    className="absolute right-1 sm:right-10 w-[50px] h-[50px] bg-white border border-gray-100 rounded-full p-3 cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
                />
                <AiOutlineClose
                    onClick={() => setOpenProductImage([])}
                    className="absolute bg-white rounded-full w-[40px] h-[40px] p-2 top-5 right-5 text-[26px] cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
                />
            </div>
        </div>
    );
}

export default OpenImage;
