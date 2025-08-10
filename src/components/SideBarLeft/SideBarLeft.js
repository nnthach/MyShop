import { useContext } from 'react';
import MenuContent from '~/components/SideBarLeft/SidebarContent/MenuConent';
import { SideBarContext } from '~/context/SideBarContext';

function SideBarLeft() {
    const { isOpenSideBarLeft, setIsOpenSideBarLeft, setType } = useContext(SideBarContext);

    const handleToggleSidebar = () => {
        setIsOpenSideBarLeft(false);
        setType('');
    };

    return (
        <div className="relative">
            <div
                className={`bg-black fixed top-0 left-0 right-0 bottom-0 duration-300 transition-all ease-in-out ${
                    isOpenSideBarLeft ? 'opacity-80 visible z-10 ' : 'opacity-0 invisible z-0'
                }`}
                onClick={handleToggleSidebar}
            />

            <div
                className={`bg-white p-4 fixed top-0 left-0 w-[350px] h-full transform transition-transform duration-300 ease-in-out z-[9999]
        ${isOpenSideBarLeft ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            >
                <MenuContent />
                <div
                    className="cursor-pointer absolute text-3xl top-[20px] right-[-50px] bg-white w-[40px] h-[40px] rounded-full text-center leading-[36px]"
                    onClick={handleToggleSidebar}
                >
                    &times;
                </div>
            </div>
        </div>
    );
}

export default SideBarLeft;
