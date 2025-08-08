function ProductCardHorizontal({ product, handleUpdateProductQuantity }) {
    return (
        <div className="flex gap-3 bg-gray-100 p-1 align-center">
            <img src={product?.images?.[0] || '/default-image.jpg'} className="w-16 h-16" />

            <div className="flex flex-col gap-1">
                <p className="text-s">
                    {product.name} ({product.size})
                </p>
                <p className="text-xs">{product.price} VND</p>
                <div>
                    <p className="text-xs">
                        Qty{' '}
                        <select
                            className="border border-gray-300 hover:border-black"
                            value={product.quantity}
                            onChange={(e) =>
                                handleUpdateProductQuantity(product.productId, product.size, parseInt(e.target.value))
                            }
                        >
                            {[...Array(10)].map((_, i) => (
                                <option value={i + 1} key={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </p>
                </div>
                <p className="text-xs">
                    Subtotal: <strong>{product.price * product.quantity}</strong>
                </p>
            </div>

            <span className="ml-auto text-3xl cursor-pointer mb-4">&times;</span>
        </div>
    );
}

export default ProductCardHorizontal;
