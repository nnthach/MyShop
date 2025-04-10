import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useContext, useState } from 'react';
import { boxShadow } from '~/components/Styles/styles';
import PANT from '~/assets/img/pant.webp';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { SideBarContext } from '~/context/SideBarContext';

function Account() {
    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSearch = () => {
        setOpenSearch((openSearch) => !openSearch);
    };

    return (
        <div className="flex items-center justify-between text-[22px] sm:text-[26px] w-[80px] sm:w-[120px] space-x-auto">
            <AiOutlineSearch
                className="cursor-pointer hover:border-b hover:border-black outline-none"
                onClick={handleOpenSearch}
            />
            <AiOutlineShoppingCart
                className="cursor-pointer hover:border-b hover:border-black"
                onClick={() => {
                    setIsOpen(true);
                    setType('Cart');
                }}
            />
            <AiOutlineUser className="cursor-pointer hover:border-b hover:border-black" onClick={() => {
                    setIsOpen(true);
                    setType('Account');
                }}/>
        </div>
    );
}

export default Account;
