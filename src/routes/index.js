import { lazy } from 'react';

const publicRoutes = [
    {
        path: '/',
        component: lazy(() => import('~/pages/Home/Home')),
    },
    {
        path: '/products/:category/*',
        component: lazy(() => import('~/pages/Product/Product')),
    },
    {
        path: '/product/:productName',
        component: lazy(() => import('~/pages/ProductDetail/ProductDetail')),
    },
    {
        path: '/cart',
        component: lazy(() => import('~/pages/Cart/Cart')),
    },
    {
        path: '/checkout',
        component: lazy(() => import('~/pages/Checkout/Checkout')),
    },
    {
        path: '/order/loading',
        component: lazy(() => import('~/pages/Order/OrderLoading')),
    },
    {
        path: '/order',
        component: lazy(() => import('~/pages/Order/Order')),
    },
    {
        path: '/account',
        component: lazy(() => import('~/pages/MyAccount/MyAccount')),
    },
];

const privateRoutes = [
    {
        path: '/admin',
        component: lazy(() => import('~/pages/Admin/Admin')),
        layout: null,
    },
];

export { publicRoutes, privateRoutes };
