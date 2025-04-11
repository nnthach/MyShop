import api from '~/config/axios';

export const getProductListAPI = (filterData) => {
    console.log('filterdata', filterData);
    const res = api.get('/product/all', { params: filterData });

    return res;
};
