import { useContext } from 'react';
import AccountContent from '~/components/SideBar/SidebarContent/AccountContent';
import CartContent from '~/components/SideBar/SidebarContent/CartContent';
import MenuContent from '~/components/SideBar/SidebarContent/MenuConent';
import { SideBarContext } from '~/context/SideBarContext';

function SideBar() {
    const { isOpen, setIsOpen, type, setType } = useContext(SideBarContext);

    const handleToggleSidebar = () => {
        setIsOpen(false);
        setType('');
    };

    const handleRenderSideBarContent = () => {
        switch (type) {
            case 'Menu':
                return <MenuContent />;
            case 'Cart':
                return <CartContent />;
            case 'Account':
                return <AccountContent />;
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            <div
                className={`bg-black fixed top-0 left-0 right-0 bottom-0 duration-300 transition-all ease-in-out ${
                    isOpen ? 'opacity-80 visible z-10 ' : 'opacity-0 invisible z-0'
                }`}
            />

            <div
                className={`bg-white p-4 fixed top-0  overflow-y-auto ${
                    type === 'Menu' ? 'left-0' : 'right-0'
                } w-[350px] h-full transform transition-transform duration-300 ease-in-out z-20     ${
                    isOpen
                        ? 'translate-x-0 visible'
                        : type === 'Menu'
                        ? '-translate-x-full invisible z-0'
                        : 'translate-x-full invisible z-0'
                } `}
            >
                {handleRenderSideBarContent()}
            </div>

            <span
                className={`cursor-pointer absolute text-3xl z-20 duration-100 transition-all ease-in-out ${
                    type === 'Menu' ? 'left-[400px]' : 'right-[400px]'
                } top-[-60px] ${
                    isOpen ? 'visible' : 'invisible z-0'
                } bg-white w-[40px] h-[40px] rounded-full text-center leading-[36px]`}
                onClick={handleToggleSidebar}
            >
                &times;
            </span>
        </div>
    );
}

export default SideBar;
