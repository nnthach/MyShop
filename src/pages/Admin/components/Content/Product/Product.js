import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa6';
import Pagination from '~/components/Pagination/Pagination';
import { getProductListAPI } from '~/service/productService';

function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const typeList = ['', 'top', 'bottom', 'accessory'];

    const [productListData, setProductListData] = useState([]);
    const [filter, setFilter] = useState({
        name: '',
        type: '',
        sortBy: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const productStock = (product) => {
        const stock = product.size.reduce((acc, item) => {
            return acc + item.amount;
        }, 0);
        return stock;
    };

    const getAllData = async () => {
        try {
            console.log('filter to BE', filter);
            const productList = await getProductListAPI(filter);
            console.log('get product list api', productList);
            setProductListData(productList.data);
        } catch (error) {
            console.log('get all data err', error);
        }
    };

    useEffect(() => {
        getAllData();
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('set time');
            getAllData();
        }, 1000);

        return () => {
            console.log('clear time');
            clearTimeout(timeoutId);
        };
    }, [filter]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentData = productListData.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
        <div>
            <div>
                <h1 className="text-4xl text-black font-semibold">Products</h1>
            </div>
            <div className="mt-10">
                {/*Filter */}
                <div className="flex items-center justify-between bg-slate-200 p-4 rounded-tr-lg rounded-tl-lg">
                    {/*Filter type */}
                    <div className="flex gap-2">
                        {typeList.map((type, index) => (
                            <p
                                key={index}
                                onClick={() =>
                                    setFilter((prev) => ({
                                        ...prev,
                                        type,
                                    }))
                                }
                                className={` w-[80px] text-center font-medium py-1 cursor-pointer rounded-md 
                                    ${
                                        filter.type == type
                                            ? 'bg-white'
                                            : 'bg-transparent text-gray-300 border border-gray-300'
                                    }
                                    `}
                            >
                                {type ? type.charAt(0).toUpperCase() + type.slice(1) : 'View all'}
                            </p>
                        ))}
                    </div>
                    {/*Filter other */}
                    <div className="flex">
                        <div className="mr-5">
                            <label className="mr-1 font-medium">Search by name</label>
                            <input
                                className="border border-gray-300 rounded-md px-2 "
                                name="name"
                                onChange={(e) => handleChange(e)}
                                value={filter.name}
                            />
                        </div>
                        <div>
                            <label className="mr-1 font-medium">Sort by</label>

                            <select
                                className="border border-gray-300 rounded-md px-2"
                                name="sortBy"
                                onChange={(e) => handleChange(e)}
                                value={filter.sortBy}
                            >
                                <option value="">Price</option>
                                <option value="HighToLow">Price - High to Low</option>
                                <option value="LowToHigh">Price - Low to High</option>
                            </select>
                        </div>

                        <button
                            className="bg-white px-2 pb-1 rounded-md ml-2"
                            onClick={() => setFilter({ name: '', sortBy: '', type: '' })}
                        >
                            Clear
                        </button>
                    </div>
                </div>
                {/*Table */}
                <div className="p-4 py-0 bg-white rounded-br-lg  rounded-bl-lg">
                    <table className="bg-white w-full text-left p-4  max-h-[100px] overflow-y-auto">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="w-[250px] overflow-hidden">ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Stock</th>
                                <th>Create At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((product) => (
                                <tr key={product._id} className="border-b border-gray-200">
                                    <td>#{product._id}</td>
                                    <td>
                                        <img src={product.images[0]} className="w-12 h-12 border border-gray-200" />
                                    </td>
                                    <td>
                                        <strong>{product.name}</strong>
                                    </td>
                                    <td>{product.price}</td>
                                    <td>{product.type.charAt(0).toUpperCase() + product.type.slice(1)}</td>
                                    <td>{productStock(product)}</td>
                                    <td>
                                        {new Date(product.createdAt).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </td>
                                    <td className="text-cyan-400 text-[20px] cursor-pointer">
                                        <FaEye />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/*Pagination */}
                    <div className="pagination w-full flex justify-center items-center">
                        <Pagination
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            productsPerPage={productsPerPage}
                            totalProducts={productListData.length}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
