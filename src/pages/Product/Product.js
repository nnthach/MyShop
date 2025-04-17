import { IMAGES } from '../../assets/img';
import { TbEaseInOutControlPoints } from 'react-icons/tb';
import { useContext, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import FilterMenu from './FilterMenu/FilterMenu';
import { Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '~/context/ProductsContext';
import LoadingIcon from '~/components/LoadingIcon/LoadingIcon';
import ProductCard from '~/components/ProductCard/ProductCard';

function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isSticky, setIsSticky] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const productsPerPage = 16;
    const { filterData, setFilterData, initialData, handleGetAllProduct, isLoading, allProductData } =
        useContext(ProductsContext);

    const navigate = useNavigate();

    const handleOpenFilter = () => {
        setOpenFilter((openFilter) => !openFilter);
    };

    const handleClearFilter = (e) => {
        e.preventDefault();

        console.log('clear', filterData);
        setFilterData(initialData);
        handleGetAllProduct(filterData);
    };

    useEffect(() => {
        if (openFilter) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openFilter]);

    useEffect(() => {
        const bannerHeight = document.querySelector('.banner').offsetHeight;
        const handleScroll = () => {
            if (window.scrollY >= bannerHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Get per PAGE
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = allProductData.slice(indexOfFirstProduct, indexOfLastProduct);

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 bg-white bg-opacity-80 flex justify-center items-center">
                <LoadingIcon />
            </div>
        );
    }
    return (
        <>
            <div>
                {/*Banner */}
                <div className="banner w-full h-[200px] sm:h-[80vh] bg-white grid grid-cols-4">
                    <img src={IMAGES.bannerProduct1} className="h-full object-cover border-r border-black" />
                    <img src={IMAGES.bannerProduct2} className="h-full object-cover border-r border-black" />
                    <img src={IMAGES.bannerProduct3} className="h-full object-cover border-r border-black" />
                    <img src={IMAGES.bannerProduct4} className="h-full object-cover" />
                </div>
                {/*Filter */}
                <div
                    className={`bg-white px-5 sm:px-10 py-4 z-[2] ${
                        isSticky ? 'fixed top-[80px] left-0 right-0 z-[2] shadow-lg border-b border-gray-200' : ''
                    }`}
                >
                    <div className="flex justify-between items-center text-[14px] sm:text-[20px]">
                        <p>
                            <span className='cursor-pointer text-gray-400' onClick={() => navigate('/')}>Home</span> / All Products
                        </p>

                        <button
                            onClick={handleOpenFilter}
                            className="flex items-center justify-between border border-black w-[80px] sm:w-[100px] px-2 sm:px-4 py-1 rounded-2xl "
                        >
                            <span>Filter </span>
                            <span className="text-[16px]">
                                <TbEaseInOutControlPoints />
                            </span>
                        </button>
                    </div>
                </div>

                {/*Products */}
                <div className="w-full min-h-[100px] bg-white">
                    {allProductData.length === 0 ? (
                        <div className="text-center">
                            <p className="text-center font-bold">No Products Found</p>
                            <button
                                className="border border-black rounded-3xl py-1 px-2 mt-2"
                                onClick={(e) => handleClearFilter(e)}
                            >
                                Return Default
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="w-full h-full bg-white">
                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-x-4">
                                    {/*Single products */}
                                    {currentProduct.map((product, index) => {
                                        return <ProductCard product={product} key={index} />;
                                    })}
                                </div>
                            </div>
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                productsPerPage={productsPerPage}
                                totalProducts={allProductData.length}
                            />
                        </>
                    )}
                </div>
            </div>

            {/*Slide filter */}
            <FilterMenu setOpenFilter={setOpenFilter} openFilter={openFilter} handleOpenFilter={handleOpenFilter} />

            {/*Overlay */}
            <div
                className={
                    openFilter
                        ? 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 sm:opacity-80 z-0 sm:z-[4] ease duration-1000'
                        : 'fixed bg-black top-0 left-0 bottom-0 right-0 opacity-0 ease duration-500 sm:z-[-4] pointer-events-none'
                }
            ></div>
        </>
    );
}

export default Product;
