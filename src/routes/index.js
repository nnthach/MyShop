import Home from '~/pages/Home/Home';
import Product from '~/pages/Product/Product';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/products/:category/*',
        component: Product,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
