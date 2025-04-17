import Cookies from 'js-cookie';
import { getUserInfoAPI } from '~/service/authService';

const { createContext, useState, useEffect } = require('react');

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);
    const [userId, setUserId] = useState(Cookies.get('userId'));

    const handleLogout = () => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('userId');
        setAuthData(null);

        window.location.reload();
    };

    useEffect(() => {
        if (userId) {
            getUserInfoAPI(userId)
                .then((res) => {
                    setAuthData(res.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [userId]);
    const value = { authData, setAuthData, userId, setUserId, handleLogout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
