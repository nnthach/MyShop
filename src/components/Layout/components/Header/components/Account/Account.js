import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import { boxShadow } from '~/components/Styles/styles';

function Account() {
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

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
            <AiOutlineSearch
                className="relative cursor-pointer hover:border-b hover:border-black"
                onClick={handleOpenSearch}
            />
            <AiOutlineShoppingCart className="cursor-pointer hover:border-b hover:border-black" />
            <AiOutlineUser className="cursor-pointer hover:border-b hover:border-black" />

            {/*Search Box */}
            {openSearch ? (
                <div
                    className="absolute bottom-[-125%] right-0 sm:right-32 
                        bg-white w-full sm:w-[400px] p-4
                        shadow-lg sm:rounded-lg"
                    style={{ boxShadow: boxShadow }}
                >
                    <div className="flex items-center justify-between pb-3 text-[20px]">
                        <p className="font-bold">Search products</p>
                        <AiOutlineClose
                            className="cursor-pointer hover:border-b hover:border-black"
                            onClick={handleOpenSearch}
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="relative border border-black w-full p-2 pr-20 text-[16px] leading-[34px] h-[34px] rounded-md outline-none"
                            placeholder="Search here..."
                            value={searchValue}
                            onChange={handleChange}
                        />
                        <button className="absolute right-16 bottom-[22px]" onClick={handleClearSearch}>
                            <IoIosCloseCircleOutline className="text-[22px]" />
                        </button>
                        <button type="submit" className="absolute pl-2 right-6 bottom-[22px] border-l border-black">
                            <AiOutlineSearch className="text-[22px]" />
                        </button>
                    </form>
                </div>
            ) : null}
        </div>
    );
}

export default Account;
