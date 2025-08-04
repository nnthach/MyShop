import { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import RightCheckout from './components/RightCheckout/RightCheckout';
import FilterMenu from './components/FilterMenu/FilterMenu';
import HeaderStep from '~/pages/Checkout/components/HeaderStep/HeaderStep';
import StepContent from '~/pages/Checkout/components/StepContent/StepContent';

function Checkout() {
    const [slideMenuHeading, setSlideMenuHeading] = useState('');
    const [openSlideBar, setOpenSlideBar] = useState(false);

    const handleOpenSlideBar = () => {
        setOpenSlideBar((prev) => !prev);
    };
    return (
        <>
            <div className="bg-[#f8f8f8] px-6 sm:px-[128px] pb-10">
                <div className="py-8">
                    <FaArrowLeftLong className="cursor-pointer" />
                </div>
                <div className="w-full min-h-[1000px] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 ">
                    {/*Left */}
                    <div className="sm:col-span-2 space-y-4">
                        {/*Header step */}
                        <HeaderStep />
                        <StepContent />
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
