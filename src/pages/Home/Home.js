import IMAGES from '../../assets/img';
import './banner.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [index, setIndex] = useState(0);
    const bannerData = [IMAGES.banner1, IMAGES.banner2, IMAGES.banner3];
    const newArrivalData = [
        {
            name: 'Maverik 2 in 1 trouser grey blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
        {
            name: 'Trouser grey blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
        {
            name: 'Maverik 2 in 1 trouser grey blue blue blue blue blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
        {
            name: 'Trouser grey blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
        {
            name: 'Maverik 2 in 1 trouser grey blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
        {
            name: 'Maverik 2 in 1 trouser grey blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
        {
            name: 'Maverik 2 in 1 trouser grey blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
        {
            name: 'Maverik 2 in 1 trouser grey blue',
            price: 820000,
            category: 'pants',
            image: IMAGES.pants,
        },
    ];

    const handleNextBanner = () => {
        if (index >= bannerData.length - 1) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
        }
    };

    const handlePrevBanner = () => {
        if (index === 0) {
            setIndex(bannerData.length - 1);
        } else {
            setIndex((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index >= bannerData.length - 1) {
                setIndex(0);
            } else {
                setIndex((prev) => prev + 1);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div>
            {/* Banner */}
            <div className="relative banner h-[100vh] w-full bg-red-300 overflow-hidden">
                {/* Image container */}
                <div
                    className="banner-images flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }} // Move by index
                >
                    {bannerData.map((image, idx) => (
                        <img key={idx} src={image} alt={`banner-${idx}`} className="w-full h-full object-cover" />
                    ))}
                </div>

                {/* Navigation Icons */}
                <div className="icon absolute flex text-[16px] sm:text-[26px] text-gray-400 bottom-0 right-0">
                    <FaChevronLeft className="icon-banner-arrow border-r border-gray-300" onClick={handlePrevBanner} />
                    <FaChevronRight className="icon-banner-arrow" onClick={handleNextBanner} />
                </div>
            </div>

            {/* New Arrival */}
            <div className="bg-white w-full py-5 sm:py-10 text-center">
                <div className="new-arrival-wrap w-full sm:w-[80%] mx-auto">
                    <div className="heading">
                        <span className="text-2xl sm:text-4xl font-semibold border-b border-black">New Arrival</span>
                    </div>

                    {/*Wrap all product */}
                    <div className="new-arrival grid grid-cols-2 sm:grid-cols-4 gap-5 my-10">
                        {newArrivalData.map((item, index) => (
                            <Link to={`/products/${item.category}/search?name${item.name}`}>
                                <div key={index} className="bg-white cursor-pointer hover:scale-105">
                                    <img src={IMAGES.pants} alt="item" className="" />
                                    <div className="flex flex-col">
                                        <h5 className="two-line-heading p-2 h-[64px]">{item.name}</h5>
                                        <p className="font-semibold mt-auto">{item.price}&#8363;</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div>
                        <Link to="/products/all">
                            <button className="bg-black text-white font-semibold py-2 px-5 rounded-xl">
                                View All Products
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
