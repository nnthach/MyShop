import { useEffect, useState } from 'react';
import RightContent from './components/RightContent/RightContent';
import FilterMenu from './components/FilterMenu/FilterMenu';
import LeftContent from '~/pages/Cart/components/LeftContent/LeftContent';

function Cart() {
    const [openProductImage, setOpenProductImage] = useState([]);
    const [slideMenuHeading, setSlideMenuHeading] = useState('');
    const [openSlideBar, setOpenSlideBar] = useState(false);

    useEffect(() => {
        if (openProductImage.length > 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openProductImage]);

    const handleOpenSlideBar = () => {
        setOpenSlideBar((prev) => !prev);
    };

    return (
        <>
            <div className="sm:grid sm:grid-cols-3">
                {/*Left */}
                <LeftContent setOpenProductImage={setOpenProductImage} openProductImage={openProductImage} />

                {/*Right */}
                <RightContent handleOpenSlideBar={handleOpenSlideBar} setSlideMenuHeading={setSlideMenuHeading} />
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

export default Cart;
