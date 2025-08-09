import { lazy } from 'react';

const publicRoutes = [
    {
        path: '/',
        component: lazy(() => import('~/pages/Home/Home')),
        role: ['Guest', 'Customer', 'Admin'],
    },
    {
        path: '/products/:category/*',
        component: lazy(() => import('~/pages/Product/Product')),
        role: ['Guest', 'Customer', 'Admin'],
    },
    {
        path: '/product/:productName',
        component: lazy(() => import('~/pages/ProductDetail/ProductDetail')),
        role: ['Guest', 'Customer', 'Admin'],
    },
    {
        path: '/cart',
        component: lazy(() => import('~/pages/Cart/Cart')),
        role: ['Customer', 'Admin'],
    },
    {
        path: '/checkout',
        component: lazy(() => import('~/pages/Checkout/Checkout')),
        role: ['Customer', 'Admin'],
    },
    {
        path: '/order/loading',
        component: lazy(() => import('~/pages/Order/OrderLoading')),
        role: ['Customer', 'Admin'],
    },
    {
        path: '/order',
        component: lazy(() => import('~/pages/Order/Order')),
        role: ['Customer', 'Admin'],
    },
    {
        path: '/account',
        component: lazy(() => import('~/pages/MyAccount/MyAccount')),
        role: ['Customer', 'Admin'],
    },
];

const privateRoutes = [
    {
        path: '/admin',
        component: lazy(() => import('~/pages/Admin/Admin')),
        layout: null,
        role: ['Admin'],
    },
];

export { publicRoutes, privateRoutes };
