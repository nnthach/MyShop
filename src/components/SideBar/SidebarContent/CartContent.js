import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCardHorizontal from '~/components/ProductCardHorizontal/ProductCardHorizontal';
import { SideBarContext } from '~/context/SideBarContext';
import { addToCartAPI, updateCartAPI } from '~/service/cartService';

function CartContent() {
    const { productCartData, setIsOpen, handleGetCartByUserId } = useContext(SideBarContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const userId = Cookies.get('userId');

    const totalPrice = productCartData.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const handleUpdateProductQuantity = async (productId, size, quantity) => {
        setIsLoading(true);
        const updateData = {
            userId,
            products: [
                {
                    productId,
                    quantity,
                    size,
                },
            ],
            isMultiple: false,
        };
        try {
            console.log('update pro qty data', updateData);
            const res = await updateCartAPI(updateData);
            console.log('update pro qty res', res);

            handleGetCartByUserId(userId, 'Cart');

            setIsLoading(false);
        } catch (error) {
            console.log('update pro qty err', error);
            setIsLoading(false);
        }
    };
    return (
        <div className="flex flex-col h-full">
            <h4 className="text-center font-bold text-xl">Cart</h4>

            {isLoading ? (
                <div>is loading</div>
            ) : (
                <>
                    <div className="my-4 h-[550px] overflow-auto flex flex-col gap-2">
                        {productCartData.map((product, index) => (
                            <ProductCardHorizontal
                                product={product}
                                key={index}
                                handleUpdateProductQuantity={handleUpdateProductQuantity}
                            />
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-auto text-xl font-medium">
                        <p>Total:</p>
                        <p>{totalPrice} VND</p>
                    </div>

                    <div className="mt-auto flex gap-1">
                        <button
                            onClick={() => {
                                navigate('/cart');
                                setIsOpen(false);
                            }}
                            className="py-1 border border-black w-[50%] hover:bg-black hover:text-white duration-300 ease-in-out"
                        >
                            Go to Cart
                        </button>
                        <button
                            onClick={() => {
                                navigate('/checkout');
                                setIsOpen(false);
                            }}
                            className="border border-black w-[50%] bg-black text-white  hover:bg-white hover:text-black duration-300 ease-in-out"
                        >
                            Go to Payment
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartContent;
