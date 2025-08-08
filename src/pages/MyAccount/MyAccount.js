import { CiMemoPad, CiUser } from 'react-icons/ci';
import MyOrder from '~/pages/MyAccount/components/MyOrder/MyOrder';

function MyAccount() {
    return (
        <div className="w-full bg-gray-200 p-10">
            <div className="flex items-start gap-5">
                {/*Aside */}
                <aside className="bg-white w-[20%] rounded-md p-4">
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md">
                            <CiUser fontSize={20} />
                            <p>My Account</p>
                        </li>
                        <li className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md">
                            <CiMemoPad fontSize={20} />
                            <p>My Orders</p>
                        </li>
                    </ul>
                </aside>

                {/*Main content */}
                <div className="min-h-[80vh] flex-1 bg-white rounded-md p-6">
                    <h1 className="text-2xl font-bold mb-6">My Orders</h1>
                    <MyOrder />
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
