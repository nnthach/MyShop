import axios from 'axios';
import Cookies from 'js-cookie';
import { refreshTokenAPI } from '~/service/authService';

const api = axios.create({
    baseURL: 'http://localhost:4000/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
api.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const accessToken = Cookies.get('accessToken');

        if (accessToken) {
            config.headers.Authorization = `Beaer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
api.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        const originalRequest = error.config;

        if (error?.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = Cookies.get('refreshToken');

            if (!refreshToken) return Promise.reject(error);

            try {
                const res = await refreshTokenAPI({ refreshToken });

                const newAccessToken = res.data.accessToken;

                Cookies.set('accessToken', newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return api(originalRequest);
            } catch (error) {
                return Promise.reject(error);
            }
        }

        console.log('res error', error);
        return Promise.reject(error);
    },
);

export default api;
