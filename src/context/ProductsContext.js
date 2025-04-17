import { createContext, useEffect, useState } from 'react';
import { getProductListAPI } from '~/service/productService';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [allProductData, setAllProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const initialData = {
        sortBy: '',
        color: [],
        size: [],
    };
    const [filterData, setFilterData] = useState(initialData);

    const sortBy = ['Latest Arrivals', 'Price - High to Low', 'Price - Low to High'];

    const colors = [
        { name: 'Black', bgColor: 'bg-black' },
        { name: 'White', bgColor: 'bg-white' },
        { name: 'Grey', bgColor: 'bg-gray-400' },
        { name: 'Brown', bgColor: 'bg-amber-800' },
        { name: 'Beige', bgColor: 'bg-[beige]' },
        { name: 'Yellow', bgColor: 'bg-yellow-300' },
        { name: 'Red', bgColor: 'bg-red-600' },
        { name: 'Orange', bgColor: 'bg-orange-500' },
        { name: 'Blue', bgColor: 'bg-blue-600' },
        { name: 'Green', bgColor: 'bg-green-600' },
        { name: 'Purple', bgColor: 'bg-purple-600' },
        { name: 'Pink', bgColor: 'bg-pink-400' },
    ];

    const size = ['S', 'M', 'L', 'XL'];

    useEffect(() => {
        handleGetAllProduct(filterData);
    }, []);

    const handleGetAllProduct = async (data) => {
        setIsLoading(true);

        try {
            const sortFormat = {
                'Latest Arrivals': '',
                'Price - High to Low': 'HighToLow',
                'Price - Low to High': 'LowToHigh',
            };

            const convertData = {
                ...data,
                sortBy: sortFormat[data.sortBy] || '',
            };

            const res = await getProductListAPI(convertData);
            setAllProductData(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        sortBy,
        colors,
        size,
        allProductData,
        isLoading,
        filterData,
        setFilterData,
        initialData,
        handleGetAllProduct,
    };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
