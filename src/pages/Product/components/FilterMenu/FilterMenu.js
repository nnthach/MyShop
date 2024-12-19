import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function FilterMenu({ openFilter, handleOpenFilter }) {
    const [openChild, setOpenChild] = useState(null);
    const [filterData, setFilterData] = useState({
        sortBy: '',
        colour: [],
        size: [],
    });

    const sortBy = ['Latest Arrivals', 'Price - High to Low', 'Price - Low to High'];

    const colors = [
        { name: 'Black', bgColor: 'bg-black' },
        { name: 'White', bgColor: 'bg-white' },
        { name: 'Grey', bgColor: 'bg-gray-400' },
        { name: 'Brown', bgColor: 'bg-amber-800' },
        { name: 'Beige', bgColor: 'bg-[beige]' },
        { name: 'Yellow', bgColor: 'bg-yellow-300' },
        { name: 'Red', bgColor: 'bg-red-600' },
        { name: 'Orange', bgColor: 'bg-orange-500' },
        { name: 'Blue', bgColor: 'bg-blue-600' },
        { name: 'Green', bgColor: 'bg-green-600' },
        { name: 'Purple', bgColor: 'bg-purple-600' },
        { name: 'Pink', bgColor: 'bg-pink-400' },
    ];

    const size = ['S', 'M', 'L', 'XL'];

    const handleOpenChild = (index) => {
        setOpenChild((prev) => (prev === index ? null : index));
    };

    const handleApplyFilter = (e) => {
        e.preventDefault();

        console.log(filterData);
    };

    const handleFilterColor = (color) => {
        setFilterData((prev) => ({
            ...prev,
            colour: prev.colour.includes(color)
                ? prev.colour.filter((selectedColor) => selectedColor !== color)
                : [...prev.colour, color],
        }));
    };

    const handleFilterSize = (sizeChoose) => {
        setFilterData((prev) => ({
            ...prev,
            size: prev.size.includes(sizeChoose)
                ? prev.size.filter((selectedSize) => selectedSize !== sizeChoose)
                : [...prev.size, sizeChoose],
        }));
    };

    useEffect(() => {
        setOpenChild(null);
    }, [handleOpenFilter]);

    return (
        <div
            className={
                openFilter
                    ? 'fixed top-0 sm:top-0 right-0 h-full w-full sm:w-[550px] overflow-y-auto custom-scrollbar z-[5] pt-5  bg-white opacity-100 ease-in-out duration-1000 transform translate-x-0'
                    : 'fixed top-0 sm:top-0 right-[-100%] h-full w-full sm:w-[550px] z-[5] py-5  bg-white opacity-0 ease-in-out duration-500 transform translate-x-[-100%] pointer-events-none'
            }
        >
            <div className="relative text-center ">
                <p className="text-[18px] sm:text-[24px] font-semibold">FILTER</p>
                <AiOutlineClose
                    className="text-[18px] sm:text-[24px] absolute top-[50%] translate-y-[-50%] right-5 cursor-pointer"
                    onClick={handleOpenFilter}
                />
            </div>
            <form onSubmit={handleApplyFilter} className="flex flex-col text-[20px] space-y-5">
                {/*Sort by */}
                <div className="text-center mt-5 pt-5 border-t border-black">
                    <h5 className="text-[14px] sm:text-[18px] font-medium sm: font-regular">SORT BY</h5>
                    <div>
                        <ul className="grid grid-cols-2 gap-4 p-5">
                            {sortBy.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => {
                                        setFilterData((prev) => ({ ...prev, sortBy: option }));
                                    }}
                                    className={`border ${
                                        filterData.sortBy === option ? 'border-black' : 'border-gray-400'
                                    } hover:border-black text-[14px] sm:text-[16px] py-2 cursor-pointer`}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*Color */}
                <div className="text-center mt-5 pt-5 border-t border-black">
                    <h5 className="text-[14px] sm:text-[18px] font-medium sm: font-regular">COLOUR</h5>
                    <div>
                        <ul className="grid grid-cols-2 gap-4 p-5">
                            {colors.map((color, index) => (
                                <li
                                    key={color.name}
                                    onClick={() => handleFilterColor(color.name)}
                                    className={`relative border ${
                                        filterData.colour.includes(color.name) ? 'border-black' : 'border-gray-400'
                                    }  hover:border-black text-[14px] sm:text-[16px] py-2 cursor-pointer`}
                                >
                                    {color.name}
                                    <span
                                        className={`absolute inline-block h-[30px] w-[30px] border border-gray-500 ${color.bgColor} left-1 top-[50%] translate-y-[-50%] rounded-sm`}
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*Size */}
                <div className="text-center mt-5 pt-5 border-t border-black">
                    <h5 className="text-[14px] sm:text-[18px] font-medium sm: font-regular">SIZE</h5>
                    <div>
                        <ul className="grid grid-cols-4 gap-4 p-5">
                            {size.map((size, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleFilterSize(size)}
                                    className={`border ${
                                        filterData.size.includes(size) ? 'border-black' : 'border-gray-400'
                                    }  hover:border-black text-[14px] sm:text-[16px] py-2 cursor-pointer`}
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*Button */}
                <div className="sticky bottom-0 bg-white w-full border-t border-black grid grid-cols-2 gap-4 p-5 text-[14px] sm:text-[16px] font-medium z-10">
                    <button
                        type="reset"
                        onClick={() => {
                            setFilterData({ sortBy: '', colour: [], size: [] });
                        }}
                        className="border border-black py-2"
                    >
                        CLEAR
                    </button>
                    <button type="submit" className="border border-black py-2 bg-black text-white">
                        APPLY
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FilterMenu;