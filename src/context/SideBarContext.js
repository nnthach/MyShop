import Cookies from 'js-cookie';
import { getCartByIdAPI } from '~/service/cartService';

const { createContext, useState, useEffect } = require('react');

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSideBarLeft, setIsOpenSideBarLeft] = useState(false);
    const [type, setType] = useState('');
    const [productCartData, setProductCartData] = useState([]);
    const userId = Cookies.get('userId');
    const handleGetCartByUserId = async (userId, type) => {
        if (userId && type === 'Cart') {
            try {
                const res = await getCartByIdAPI(userId);

                setProductCartData(res.data.products);
            } catch (error) {
                console.log(error);
                setProductCartData([]);
            }
        }
    };

    useEffect(() => {
        handleGetCartByUserId(userId, 'Cart');
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpenSideBarLeft) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpenSideBarLeft]);

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetCartByUserId,
        productCartData,
        isOpenSideBarLeft,
        setIsOpenSideBarLeft,
    };
    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
};
