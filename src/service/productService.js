import api from '~/config/axios';

export const getProductListAPI = () => {
    const res = api.get('/product/all');

    return res;
};
