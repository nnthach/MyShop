import api from '~/config/axios';

export const getProductListAPI = (filterData) => {
    const res = api.get('/product/all', { params: filterData });

    return res;
};

export const getProductByIdAPI = (id) => {
    const res = api.get(`/product/${id}`);

    return res;
};
