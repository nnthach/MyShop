function ProductCardHorizontal({ product }) {
    return (
        <div className="flex gap-3 bg-gray-100 p-1 align-center">
            <img
                src="https://product.hstatic.net/200000320785/product/artboard_3_copy_d321a20018c943cd95c2023456b07aa4.jpg"
                className="w-16 h-16"
            />

            <div className="flex flex-col gap-1">
                <p className="text-s">{product.name}</p>
                <p className="text-xs">{product.price} VND</p>
                <p className="text-xs">
                    Size: {product.size} - Qty: {product.quantity}
                </p>
            </div>

            <span className="ml-auto text-3xl cursor-pointer mb-4">&times;</span>
        </div>
    );
}

export default ProductCardHorizontal;
