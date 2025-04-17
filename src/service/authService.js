import api from '~/config/axios';

export const loginAPI = async (data) => {
    const res = api.post('/user/login', data);

    return res;
};

export const registerAPI = async (data) => {
    const res = api.post('/user/register', data);

    return res;
};

export const refreshTokenAPI = async (data) => {
    const res = api.post('/user/refresh-token', data);

    return res;
};

export const getUserInfoAPI = async (id) => {
    const res = api.get(`/user/${id}`);

    return res;
};
