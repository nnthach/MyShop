import { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import FirstStep from './components/FirstStep/FirstStep';
import SecondStep from './components/SecondStep/SecondStep';
import ThridStep from './components/ThridStep/ThridStep';
import RightCheckout from './components/RightCheckout/RightCheckout';
import FilterMenu from './components/FilterMenu/FilterMenu';

function Checkout() {
    const [slideMenuHeading, setSlideMenuHeading] = useState('');
    const [openSlideBar, setOpenSlideBar] = useState(false);

    const handleOpenSlideBar = () => {
        setOpenSlideBar((prev) => !prev);
    };
    return (
        <>
            <div className="bg-[#f8f8f8] px-[128px] pb-10">
                <div className="py-8">
                    <FaArrowLeftLong className="cursor-pointer" />
                </div>
                <div className="w-full min-h-[1000px] grid grid-cols-3 gap-6 ">
                    {/*Left */}
                    <div className="col-span-2 space-y-4">
                        {/*First Step */}
                        <FirstStep />

                        {/*Second Step */}
                        <SecondStep />

                        {/*Thrid Step */}
                        <ThridStep />
                    </div>
                    {/*Right */}
                    <RightCheckout setSlideMenuHeading={setSlideMenuHeading} handleOpenSlideBar={handleOpenSlideBar} />
                </div>
            </div>

            {/*Slidebar */}
            <FilterMenu
                slideMenuHeading={slideMenuHeading}
                openSlideBar={openSlideBar}
                handleOpenSlideBar={handleOpenSlideBar}
            />

            {/*Overlay */}
            <div
                className={
                    openSlideBar
                        ? 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 sm:opacity-80 z-0 sm:z-[4] ease duration-1000'
                        : 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 ease duration-500 sm:z-[-4] pointer-events-none'
                }
            ></div>
        </>
    );
}

export default Checkout;
