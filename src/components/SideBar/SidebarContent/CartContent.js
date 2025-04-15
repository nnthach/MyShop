import { useContext } from 'react';
import ProductCardHorizontal from '~/components/ProductCardHorizontal/ProductCardHorizontal';
import { SideBarContext } from '~/context/SideBarContext';

function CartContent() {
    const { productCartData } = useContext(SideBarContext);
    return (
        <div>
            <h4>Cart</h4>

            <div className="bg-slate-400">
                {productCartData.map((product, index) => (
                    <ProductCardHorizontal product={product} key={index} />
                ))}
            </div>
        </div>
    );
}

export default CartContent;
