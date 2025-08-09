import Pagination from '~/components/Pagination/Pagination';
import './User.css';
import { FaEye } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getUserListAPI } from '~/service/authService';

function User() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const [userListData, setUserListData] = useState([]);
    const [filter, setFilter] = useState({
        email: '',
        sortBy: 'createdAt',
        order: 'desc',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const getAllData = async () => {
        try {
            console.log('filter to BE', filter);
            // user list
            const userList = await getUserListAPI(filter);
            console.log('get user list api', userList);
            setUserListData(userList.data);
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
    const currentData = userListData.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
        <div>
            <div>
                <h1 className="text-4xl text-black font-semibold">Users</h1>
            </div>
            <div className="mt-10">
                {/*Filter */}
                <div className="flex items-center justify-between bg-slate-200 p-4 rounded-tr-lg rounded-tl-lg">
                    <p className="bg-white w-[80px] text-center font-medium py-1 cursor-pointer rounded-md">View all</p>
                    <div className="flex">
                        <div className="mr-5">
                            <label className="mr-1 font-medium">Search by email</label>
                            <input
                                className="border border-gray-300 rounded-md px-2 "
                                name="email"
                                onChange={(e) => handleChange(e)}
                                value={filter.email}
                            />
                        </div>
                        <div>
                            <label className="mr-1 font-medium">Sort by create date</label>

                            <select
                                className="border border-gray-300 rounded-md px-2"
                                name="order"
                                onChange={(e) => handleChange(e)}
                                value={filter.order}
                            >
                                <option value="desc">Descending</option>
                                <option value="asc">Ascending</option>
                            </select>
                        </div>

                        <button
                            className="bg-white px-2 pb-1 rounded-md ml-2"
                            onClick={() => setFilter({ email: '', sortBy: 'createdAt', order: 'desc' })}
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
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Create At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {currentData.map((user) => (
                                <tr key={user._id} className="border-b border-gray-200">
                                    <td>#{user._id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {new Date(user.createdAt).toLocaleDateString('en-GB', {
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
                            totalProducts={userListData.length}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
