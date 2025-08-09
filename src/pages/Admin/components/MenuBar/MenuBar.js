import { MdOutlineAttachMoney } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { IoShirtOutline } from 'react-icons/io5';
import { TbShoppingCartCopy } from 'react-icons/tb';
import { FaChartBar, FaRegChartBar } from 'react-icons/fa6';

function MenuBar({ content, setContent }) {
    return (
        <div className="bg-white p-8">
            <ul className="text-[20px] space-y-4">
                <li
                    onClick={() => {
                        setContent('Dashboard');
                    }}
                    className={`cursor-pointer flex items-center text-[18px] hover:bg-gray-100 p-2 rounded-md ${
                        content == 'Dashboard' && 'bg-gray-100'
                    }`}
                >
                    <span className="mr-2">
                        <FaRegChartBar />
                    </span>
                    Dashboard
                </li>
                <li
                    onClick={() => {
                        setContent('Users');
                    }}
                    className={`cursor-pointer flex items-center text-[18px] hover:bg-gray-100 p-2 rounded-md ${
                        content == 'Users' && 'bg-gray-100'
                    }`}
                >
                    <span className="mr-2">
                        <AiOutlineUser />
                    </span>
                    Users
                </li>
                <li
                    onClick={() => {
                        setContent('Products');
                    }}
                    className={`cursor-pointer flex items-center text-[18px] hover:bg-gray-100 p-2 rounded-md ${
                        content == 'Products' && 'bg-gray-100'
                    }`}
                >
                    <span className="mr-2">
                        <IoShirtOutline />
                    </span>
                    Products
                </li>
                <li
                    onClick={() => {
                        setContent('Orders');
                    }}
                    className={`cursor-pointer flex items-center text-[18px] hover:bg-gray-100 p-2 rounded-md ${
                        content == 'Orders' && 'bg-gray-100'
                    }`}
                >
                    <span className=" mr-2">
                        <TbShoppingCartCopy />
                    </span>
                    Orders
                </li>
                <li
                    onClick={() => {
                        setContent('Payment');
                    }}
                    className={`cursor-pointer flex items-center text-[18px] hover:bg-gray-100 p-2 rounded-md ${
                        content == 'Payment' && 'bg-gray-100'
                    }`}
                >
                    <span className="mr-2">
                        <MdOutlineAttachMoney />
                    </span>
                    Payment
                </li>
            </ul>
        </div>
    );
}

export default MenuBar;
