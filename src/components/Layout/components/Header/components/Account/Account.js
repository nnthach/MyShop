import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import { boxShadow } from '~/components/Styles/styles';
import PANT from '~/assets/img/pant.webp';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

function Account() {
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const searchData = [
        {
            name: 'Loose fit denim pants',
            price: 820000,
            image: PANT,
        },
        {
            name: 'Loose fit denim pants',
            price: 820000,
            image: PANT,
        },
        {
            name: 'Loose fit denim pants',
            price: 820000,
            image: PANT,
        },
        {
            name: 'Loose fit denim pants',
            price: 820000,
            image: PANT,
        },
        {
            name: 'Loose fit denim pants',
            price: 820000,
            image: PANT,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue);
    };

    const handleClearSearch = () => {
        setSearchValue('');
        setSearchResult([]);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleOpenSearch = () => {
        setOpenSearch((openSearch) => !openSearch);
    };

    return (
        <div className="flex items-center justify-between text-[22px] sm:text-[26px] w-[80px] sm:w-[120px] space-x-auto">
            <Tippy
                visible={openSearch}
                interactive
                placement="bottom"
                render={(attrs) => (
                    <div
                        className="bg-white w-[100%] sm:w-[400px] rounded-lg p-4 shadow-lg sm:mr-[100px] mt-2"
                        style={{ boxShadow: boxShadow }}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <div className="flex items-center justify-between text-[20px]">
                            <p className="font-bold">Search products</p>
                            <AiOutlineClose
                                className="cursor-pointer hover:border-b hover:border-black"
                                onClick={handleOpenSearch}
                            />
                        </div>

                        <form onSubmit={handleSubmit} className="relative py-3 ">
                            <input
                                type="text"
                                className="border border-black w-full p-2 pr-20 text-[16px] leading-[34px] h-[34px] rounded-md outline-none"
                                placeholder="Search here..."
                                value={searchValue}
                                onChange={handleChange}
                            />
                            <button
                                className="absolute right-12 bottom-[18px] text-gray-400 hover:text-black"
                                onClick={handleClearSearch}
                            >
                                <IoIosCloseCircleOutline className="text-[22px]" />
                            </button>
                            <button type="submit" className="absolute pl-2 right-2 bottom-[18px] border-l border-black">
                                <AiOutlineSearch className="text-[22px]" />
                            </button>
                        </form>

                        <div>
                            {searchData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                                >
                                    <div className="text-[14px]">
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </div>
                                    <div>
                                        <img src={item.image} alt="item" className="w-[50px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center text-[16px] p-3 cursor-pointer hover:bg-gray-100">
                            See more 34 products
                        </div>
                    </div>
                )}
            >
                <AiOutlineSearch
                    className="cursor-pointer hover:border-b hover:border-black outline-none"
                    onClick={handleOpenSearch}
                />
            </Tippy>
            <AiOutlineShoppingCart className="cursor-pointer hover:border-b hover:border-black" />
            <AiOutlineUser className="cursor-pointer hover:border-b hover:border-black" />
        </div>
    );
}

export default Account;
