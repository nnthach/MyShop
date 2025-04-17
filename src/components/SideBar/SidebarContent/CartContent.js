import { useContext } from 'react';
import ProductCardHorizontal from '~/components/ProductCardHorizontal/ProductCardHorizontal';
import { SideBarContext } from '~/context/SideBarContext';

function CartContent() {
    const { productCartData } = useContext(SideBarContext);
    return (
        <div className="flex flex-col h-full">
            <h4 className="text-center font-bold text-xl">Cart</h4>

            <div className="my-4 h-[550px] overflow-auto flex flex-col gap-2">
                {productCartData.map((product, index) => (
                    <ProductCardHorizontal product={product} key={index} />
                ))}
            </div>

            <div className="flex justify-between items-center mt-auto text-xl font-medium">
                <p>Total:</p>
                <p>1000 VND</p>
            </div>

            <div className="mt-auto flex gap-1">
                <button className="py-1 border border-black w-[50%] hover:bg-black hover:text-white duration-300 ease-in-out">
                    Go to Cart
                </button>
                <button className="border border-black w-[50%] bg-black text-white  hover:bg-white hover:text-black duration-300 ease-in-out">
                    Go to Payment
                </button>
            </div>
        </div>
    );
}

export default CartContent;
