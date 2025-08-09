import api from '~/config/axios';

export const createOrderAPI = async (data) => {
    const res = api.post('/order', data);

    return res;
};

export const createPaymentVNPAYAPI = async (data) => {
    const res = api.post('/order/create-payment-vnpay', data);

    return res;
};

export const getOrderByIdAPI = async (id) => {
    const res = api.get(`/order/${id}`);

    return res;
};

export const getOrderOfUserAPI = async (params) => {
    const res = api.get(`/order/my-orders`, { params });

    return res;
};

export const checkPaymentVNPAYAPI = async (params) => {
    const res = api.get(`/order/check-payment-vnpay`, { params });

    return res;
};

export const updateOrderAPI = (body, id) => {
    const res = api.put(`/order/${id}`, body);

    return res;
};
