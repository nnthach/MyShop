import { IMAGES } from '../../assets/img';
import './home.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import VIDEOS from '~/assets/video';
import { ProductsContext } from '~/context/ProductsContext';
import ProductCard from '~/components/ProductCard/ProductCard';

function Home() {
    const [index, setIndex] = useState(0);
    const itemRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const bannerData = [IMAGES.banner1, IMAGES.banner2, IMAGES.banner3];
    const { allProductData } = useContext(ProductsContext);

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

    const collectionData = [
        {
            title: 'MAVERIK 4TH ANNIVERSARY',
            image: IMAGES.campaign2,
        },
        {
            title: 'MAVERIK 4TH ANNIVERSARY',
            image: IMAGES.campaign3,
        },
        {
            title: 'MAVERIK 4TH ANNIVERSARY',
            image: IMAGES.campaign4,
        },
        {
            title: 'MAVERIK 4TH ANNIVERSARY',
            image: IMAGES.campaign5,
        },
        {
            title: 'MAVERIK 4TH ANNIVERSARY',
            image: IMAGES.campaign6,
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

    // Collection drag
    const handleMouseDown = (e) => {
        console.log('event', e);
        setIsMouseDown(true);
        setStartX(e.pageX - itemRef.current.offsetLeft);
        setScrollLeft(itemRef.current.scrollLeft);
        console.log('pagex', e.pageX);
        console.log('itemref', itemRef);
        console.log('offsetleft', itemRef.current.offsetLeft);
        console.log('scrollleft', itemRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - itemRef.current.offsetLeft;
        console.log('x', x);
        const speed = (x - startX) * 1;
        console.log('startX', startX);
        console.log('speed', speed);
        itemRef.current.scrollLeft = scrollLeft - speed;
    };

    return (
        <div className="flex flex-col">
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
                        <span className="text-xl sm:text-4xl font-semibold border-b border-black">New Arrival</span>
                    </div>

                    {/*Wrap all product */}
                    <div className="new-arrival grid grid-cols-2 sm:grid-cols-4 gap-5 my-10">
                        {allProductData.slice(0, 8).map((item) => (
                            <ProductCard product={item} />
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

            {/*Campaign video */}
            <div className="bg-[var(--background-lightgrey)] w-full sm:h-[80vh] p-5 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
                    <div>
                        <video
                            className="w-full h-full object-cover aspect-video"
                            controls
                            autoPlay
                            loop
                            preload="none"
                            muted
                        >
                            <source src={VIDEOS.campaign1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="text-[14px] sm:text-[22px] sm:p-5 text-center sm:text-left">
                        <h4 className="font-medium text-[18px] sm:text-[26px] mb-4">
                            UNIQUELY CLASSIC CAMPAIGN | FW24{' '}
                        </h4>
                        <p className="mb-4">
                            “Each individual is a unique color!”, that is also the biggest inspiration for developing
                            the Uniquely Classic collection.
                        </p>
                        <p className="mb-4">
                            With the constant motto of honoring each person's unique values, each design in the
                            collection is interwoven between timeless simplicity and contemporary sophistication, and
                            the shape system is professionally researched. deeper to always follow the flow of the
                            times, and with an elegant color palette for a pleasant feeling, all of which combine with
                            only one mission: to help customers confidently express their unique style and avoid
                            stereotyping.
                        </p>
                        <p className="mb-4">
                            The Uniquely Classic collection is not only fashionable but also an affirmation of style,
                            difference and confidence, allowing each individual to become "classic" in their own way.
                        </p>

                        <div className="p-2 sm:p-0 bg-black sm:bg-opacity-0 rounded-lg text-white">
                            <Link className="sm:bg-black rounded-lg text-[16px] sm:text-[18px] font-medium sm:p-1 sm:pb-2 sm:px-4 cursor-pointer">
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*Collection */}
            <div className="w-full bg-white px-4 py-8">
                <div className="overflow-hidden">
                    <div className="text-[18px] sm:text-[24px] mb-8">
                        <h3>OUR COLLECTION</h3>
                    </div>

                    {/*Collection container */}
                    <div
                        className="flex gap-4 overflow-x-auto sm:pb-6 custom-scrollbar"
                        ref={itemRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setIsMouseDown(false)}
                        onMouseUp={() => setIsMouseDown(false)}
                    >
                        {collectionData.map((collection, index) => (
                            <div
                                key={index}
                                onClick={() => console.log('clicked')}
                                className="w-[70%] sm:w-[30%] flex flex-col flex-shrink-0 aspect-w-16 aspect-h-9 cursor-pointer select-none"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={collection.image}
                                        draggable="false"
                                        className="h-auto w-full object-cover hover:scale-105"
                                    />
                                </div>
                                <p className="text-[14px] sm:text-[18px] mt-4 two-line-heading">{collection.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
