import api from '~/config/axios';

export const getOrderDetailAPI = async (id) => {
    const res = api.get(`/order-detail/${id}`);

    return res;
};
