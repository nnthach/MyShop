import Cart from '~/pages/Cart/Cart';
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
        path: '/product/:productId/:productName',
        component: ProductDetail,
    },
    {
        path: '/cart',
        component: Cart,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
