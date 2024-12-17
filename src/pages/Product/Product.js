import { IMAGES, IMAGES_PRODUCT } from '../../assets/img';
import { TbEaseInOutControlPoints } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';

function Product() {
    const [hoverProductID, setHoverProductID] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSticky, setIsSticky] = useState(false);
    const productsPerPage = 16;

    const productsData = [
        {
            id: 1,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'Sold Out',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 2,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
        {
            id: 3,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'Sold Out',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 4,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimRaw1_1, IMAGES_PRODUCT.jacketDenimRaw1_2],
        },
        {
            id: 5,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
        {
            id: 6,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'In Stock',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 7,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'Sold Out',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1],
        },
        {
            id: 8,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimRaw1_1, IMAGES_PRODUCT.jacketDenimRaw1_2],
        },
        {
            id: 9,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
        {
            id: 10,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'In Stock',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 11,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
        {
            id: 12,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'In Stock',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 13,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
        {
            id: 14,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'In Stock',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 15,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'In Stock',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 16,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
        {
            id: 17,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimRaw1_1, IMAGES_PRODUCT.jacketDenimRaw1_2],
        },
        {
            id: 18,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
        {
            id: 19,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'In Stock',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 20,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimRaw1_1, IMAGES_PRODUCT.jacketDenimRaw1_2],
        },
        {
            id: 21,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'pants',
            status: 'In Stock',
            image: [IMAGES.pants1_1, IMAGES.pants1_2],
        },
        {
            id: 22,
            title: 'MAVERIK 2 IN 1 DENIM PANTS',
            price: 800000,
            category: 'jacket',
            status: 'In Stock',
            image: [IMAGES_PRODUCT.jacketDenimBlue1_1, IMAGES_PRODUCT.jacketDenimBlue1_2],
        },
    ];

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
    const currentProduct = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
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
                className={`bg-white px-5 sm:px-10 py-4 ${
                    isSticky ? 'fixed top-[80px] left-0 right-0 z-10 shadow-lg border-b border-gray-200' : ''
                }`}
            >
                <div className="flex justify-between items-center text-[14px] sm:text-[20px]">
                    <p>Home / All Products</p>

                    <button className="flex items-center justify-between border border-black w-[80px] sm:w-[100px] px-2 sm:px-4 py-1 rounded-2xl ">
                        <span>Filter </span>
                        <span className="text-[16px]">
                            <TbEaseInOutControlPoints />
                        </span>
                    </button>
                </div>
            </div>

            {/*Products */}
            <div className="w-full h-full bg-white">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                    {/*Single products */}
                    {currentProduct.map((product, index) => {
                        return (
                            <div key={product.id} className="h-[340px] sm:h-[480px] p-1">
                                <div
                                    className="relative h-[80%] w-full cursor-pointer"
                                    onMouseEnter={() => product.image.length > 1 && setHoverProductID(product.id)}
                                    onMouseLeave={() => setHoverProductID(null)}
                                >
                                    {/* image 1 */}
                                    <img
                                        src={product.image[0]}
                                        className={`absolute h-full w-full object-cover transition-opacity duration-500 ${
                                            hoverProductID === product.id ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    />

                                    {/* image 2 */}
                                    {product.image.length > 1 && (
                                        <img
                                            src={product.image[1]}
                                            className={`absolute h-full w-full object-cover transition-opacity duration-500 ${
                                                hoverProductID === product.id ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        />
                                    )}

                                    {product.status == 'Sold Out' ? (
                                        <span className="absolute right-2 bottom-2 bg-gray-200 px-2 font-medium text-gray-400">
                                            {product.status}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="sm:mt-[20px] px-1 sm:px-3 text-center">
                                    <h5 className="text-[12px] sm:text-[16px] two-line-heading">{product.title}</h5>
                                    <p className="text-[14px] mt-2 sm:text-[16px] font-semibold">
                                        {product.price}&#8363;{' '}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                productsPerPage={productsPerPage}
                totalProducts={productsData.length}
            />
        </div>
    );
}

export default Product;
