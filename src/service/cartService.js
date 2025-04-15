import api from '~/config/axios';

export const addToCartAPI = (body) => {
    const res = api.post('/cart', body);

    return res;
};

export const getCartByIdAPI = (userId) => {
    const res = api.get(`/cart/${userId}`);

    return res;
};
