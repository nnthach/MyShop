function ProductDetailImage({ productDetailData }) {
    return (
        <div className=" bg-white sm:bg-red-400 border-r border-gray-200">
            <div className="slider-container h-[50vh] w-full sm:h-full sm:flex-col sm:overflow-y-auto">
                {productDetailData.images.map((image, index) => (
                    <div
                        key={index}
                        className="slider-item min-w-[100%] sm:w-full bg-gray-300 sm:min-h-[300px] scroll-"
                    >
                        <img className="h-full w-full object-cover" src={image} alt={`product-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetailImage;
