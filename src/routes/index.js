import Admin from '~/pages/Admin/Admin';
import Cart from '~/pages/Cart/Cart';
import Checkout from '~/pages/Checkout/Checkout';
import Home from '~/pages/Home/Home';
import Product from '~/pages/Product/Product';
import ProductDetail from '~/pages/ProductDetail/ProductDetail';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/products/:category/*',
        component: Product,
    },
    {
        path: '/product/:productName',
        component: ProductDetail,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/checkout',
        component: Checkout,
    },
];

const privateRoutes = [
    {
        path: '/admin',
        component: Admin,
        layout: null,
    },
];

export { publicRoutes, privateRoutes };
