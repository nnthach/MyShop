import { createContext, useEffect, useState } from 'react';
import { getProductListAPI } from '~/service/productService';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [allProductData, setAllProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const handleGetAllProduct = async () => {
            try {
                const res = await getProductListAPI();
                console.log('product list', res);
                setAllProductData(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        handleGetAllProduct();
    }, []);

    const value = { allProductData, isLoading };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
