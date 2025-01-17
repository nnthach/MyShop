import Pagination from '~/components/Pagination/Pagination';
import './User.css';
import { FaEye } from 'react-icons/fa';
import { useState } from 'react';

function User() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const userData = [
        {
            id: 15523,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 19623,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 18923,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 10073,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 11123,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 12223,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 13323,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 13023,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 15023,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 14023,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 10123,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
        {
            id: 10223,
            username: 'nnthach2004',
            fullname: 'Nguyen Ngoc Thach',
            email: 'nguyenngocthach2301@gmail.com',
            createAt: '1/1/2025',
        },
    ];

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentData = userData.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
        <div className="">
            <div>
                <h1 className="text-4xl text-white font-semibold">Users</h1>
            </div>
            <div className="mt-10">
                {/*Filter */}
                <div className="flex items-center justify-between bg-slate-200 p-4">
                    <p className="bg-white w-[80px] text-center font-medium py-1 cursor-pointer rounded-md">View all</p>
                    <div className="flex">
                        <div className="mr-5">
                            <label className="mr-1 font-medium">Search by name</label>
                            <input className="border border-gray-300 rounded-md px-2 " name="searchName" />
                        </div>
                        <div>
                            <label className="mr-1 font-medium">Sort by</label>
                            <select className="border border-gray-300 rounded-md px-2">
                                <option value="createAt">Create At</option>
                            </select>

                            <select className="border border-gray-300 rounded-md px-2">
                                <option value="asc">Ascending</option>
                                <option value="des">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/*Table */}
                <div className="p-4 py-0 bg-white">
                    <table className="bg-white w-full text-left p-4  max-h-[100px] overflow-y-auto">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Create At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {currentData.map((user) => (
                                <tr key={user.id} className="border-b border-gray-200">
                                    <td>#{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createAt}</td>
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
                            totalProducts={userData.length}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
