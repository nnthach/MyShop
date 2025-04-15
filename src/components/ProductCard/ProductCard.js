import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    const [hoverProductID, setHoverProductID] = useState(null);

    const formatProductNameUrl = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    };
    return (
        <Link
            key={product._id}
            to={`/product/${formatProductNameUrl(product.name)}`}
            state={{ productId: product._id }}
            className="h-[320px] sm:h-[480px] p-1 border border-gray-100"
        >
            <div
                className="relative h-[80%] w-full cursor-pointer"
                onMouseEnter={() => product.images.length > 1 && setHoverProductID(product._id)}
                onMouseLeave={() => setHoverProductID(null)}
            >
                {/* image 1 */}
                <img
                    src={product.images[0]}
                    className={`absolute h-full left-1/2 -translate-x-1/2 object-cover transition-opacity duration-500 ${
                        hoverProductID === product._id ? 'opacity-0' : 'opacity-100'
                    }`}
                />

                {/* image 2 */}
                {product.images.length > 1 && (
                    <img
                        src={product.images[1]}
                        className={`absolute h-full left-1/2 -translate-x-1/2 object-cover transition-opacity duration-500 ${
                            hoverProductID === product._id ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                )}

                {/* {product.status == 'Sold Out' ? (
                                                    <span className="absolute right-2 bottom-2 bg-gray-200 px-2 font-medium text-gray-400">
                                                        {product.status}
                                                    </span>
                                                ) : null} */}
            </div>
            <div className="sm:mt-[20px] px-1 sm:px-3 text-center">
                <h5 className="text-[12px] sm:text-[16px] two-line-heading">{product.name}</h5>
                <p className="text-[14px] mt-2 sm:text-[16px] font-semibold">{product.price}&#8363; </p>
            </div>
        </Link>
    );
}

export default ProductCard;
