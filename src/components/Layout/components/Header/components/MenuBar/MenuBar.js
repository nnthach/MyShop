import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa6';
import { SideBarContext } from '~/context/SideBarContext';

function MenuBar() {
    const { setIsOpen, setType } = useContext(SideBarContext);

    return (
        <div className="text-[22px] sm:text-[26px] w-[80px] sm:w-[120px]">
            <FaBars
                className="cursor-pointer block sm:block cursor-pointer hover:border-b hover:border-black"
                onClick={() => {
                    setType('Menu');
                    setIsOpen(true);
                }}
            />
        </div>
    );
}

export default MenuBar;
