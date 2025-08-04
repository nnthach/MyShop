import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { useContext, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { SideBarContext } from '~/context/SideBarContext';

function Account() {
    const [setOpenSearch] = useState(false);
    const { setIsOpen, setType, productCartData } = useContext(SideBarContext);

    const handleOpenSearch = () => {
        setOpenSearch((openSearch) => !openSearch);
    };

    return (
        <div className="flex items-center justify-between text-[22px] sm:text-[26px] w-[80px] sm:w-[120px] space-x-auto">
            <AiOutlineSearch
                className="cursor-pointer hover:border-b hover:border-black outline-none"
                onClick={handleOpenSearch}
            />
            <div>
                <AiOutlineShoppingCart
                    className="relative cursor-pointer hover:border-b hover:border-black"
                    onClick={() => {
                        setType('Cart');
                        setIsOpen(true);
                    }}
                />

                <span className="absolute top-4 right-[80px] inline-block text-[10px] bg-black text-white w-5 h-5 rounded-full text-center leading-5 font-bold">
                    {productCartData.reduce((acc, curr) => acc + curr.quantity, 0)}
                </span>
            </div>
            <AiOutlineUser
                className="cursor-pointer hover:border-b hover:border-black"
                onClick={() => {
                    setType('Account');
                    setIsOpen(true);
                }}
            />
        </div>
    );
}

export default Account;
