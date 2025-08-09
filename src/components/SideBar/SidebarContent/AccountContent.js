import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '~/context/AuthContext';
import { SideBarContext } from '~/context/SideBarContext';
import { loginAPI, registerAPI } from '~/service/authService';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RiAdminFill } from 'react-icons/ri';
import { FaChalkboardUser } from 'react-icons/fa6';

function AccountContent() {
    const { userId, setUserId, handleLogout, authData } = useContext(AuthContext);
    const { setIsOpen, handleGetCartByUserId } = useContext(SideBarContext);
    const [isLogin, setIsLogin] = useState(true);
    const initialFormData = {
        email: '',
        username: '',
        password: '',
        confirm_password: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        if (isLogin) {
            const loginData = {
                email: formData.email,
                password: formData.password,
            };

            try {
                const res = await loginAPI(loginData);
                const { _id, accessToken, refreshToken } = res.data;

                setIsOpen(false);

                toast.success('Login successfully!');

                Cookies.set('accessToken', accessToken);
                Cookies.set('refreshToken', refreshToken);
                Cookies.set('userId', _id);

                setUserId(_id);

                await handleGetCartByUserId(_id, 'Cart');
            } catch (error) {
                console.log(error);
                toast.error('Failed to login!');
            }
        }
        if (!isLogin) {
            const registerData = {
                email: formData.email,
                username: formData.username,
                confirm_password: formData.confirm_password,
                password: formData.password,
            };
            try {
                const res = await registerAPI(registerData);

                toast.success('Register successfully!');

                setIsLogin(true);
            } catch (error) {
                console.log(error);
                toast.error('Failed to register!');
            }
        }
    };

    return (
        <div>
            <h4 className="text-center mb-4 font-bold text-[18px]">
                {userId ? 'Account' : isLogin ? 'Sign In' : 'Sign Up'}
            </h4>

            {userId ? (
                <div>
                    <div
                        onClick={() => {
                            navigate('/account');
                            setIsOpen(false);
                        }}
                        className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
                    >
                        <FaUser />
                        <p className="underline">{authData?.email}</p>
                    </div>
                    {authData?.role == 'Admin' && (
                        <div
                            onClick={() => {
                                navigate('/admin');
                                setIsOpen(false);
                            }}
                            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
                        >
                            <FaChalkboardUser />
                            <p>Admin</p>
                        </div>
                    )}

                    <div
                        className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt />
                        <p>Sign Out</p>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmitForm} className="flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border border-gray-400 px-2 py-1 text-[14px] outline-none"
                        />
                        <span className="text-[12px] text-red-500">error</span>
                    </div>

                    {!isLogin && (
                        <div className="flex flex-col gap-y-1">
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                id="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="border border-gray-400 px-2 py-1 text-[14px] outline-none"
                            />
                            <span className="text-[12px] text-red-500">error</span>
                        </div>
                    )}

                    <div className="flex flex-col gap-y-1">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="border border-gray-400 px-2 py-1 text-[14px] outline-none"
                        />
                        <span className="text-[12px] text-red-500">error</span>
                    </div>

                    {!isLogin && (
                        <div className="flex flex-col gap-y-1">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Enter confirm password"
                                id="confirm_password"
                                value={formData.confirm_password}
                                onChange={handleInputChange}
                                className="border border-gray-400 px-2 py-1 text-[14px] outline-none"
                            />
                            <span className="text-[12px] text-red-500">error</span>
                        </div>
                    )}

                    <button type="submit" className="mt-4 bg-black text-white p-2 text-[14px] font-semibold">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>

                    {isLogin ? (
                        <p className="text-[14px]">
                            Do not have account?{' '}
                            <span
                                className="text-blue-500 underline cursor-pointer"
                                onClick={() => {
                                    setIsLogin(false);
                                    setFormData(initialFormData);
                                }}
                            >
                                Create account
                            </span>
                        </p>
                    ) : (
                        <p className="text-[14px]">
                            Already have account?{' '}
                            <span
                                className="text-blue-500 underline cursor-pointer"
                                onClick={() => {
                                    setIsLogin(true);
                                    setFormData(initialFormData);
                                }}
                            >
                                Sign In
                            </span>
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}

export default AccountContent;
