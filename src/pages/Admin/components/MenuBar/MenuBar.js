import { MdOutlineDashboard, MdOutlineAttachMoney } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { IoShirtOutline } from 'react-icons/io5';
import { TbShoppingCartCopy } from 'react-icons/tb';

function MenuBar({ setContent }) {
    return (
        <div className="bg-white border-r border-black p-10">
            <ul className="text-[20px] space-y-6">
                <li
                    onClick={() => {
                        setContent('Dashboard');
                    }}
                    className="cursor-pointer flex items-center"
                >
                    <span className="text-[22px] mr-2">
                        <MdOutlineDashboard />
                    </span>
                    Dashboard
                </li>
                <li
                    onClick={() => {
                        setContent('Users');
                    }}
                    className="cursor-pointer flex items-center"
                >
                    <span className="text-[22px] mr-2">
                        <AiOutlineUser />
                    </span>
                    Users
                </li>
                <li
                    onClick={() => {
                        setContent('Products');
                    }}
                    className="cursor-pointer flex items-center"
                >
                    <span className="text-[22px] mr-2">
                        <IoShirtOutline />
                    </span>
                    Products
                </li>
                <li
                    onClick={() => {
                        setContent('Orders');
                    }}
                    className="cursor-pointer flex items-center"
                >
                    <span className="text-[22px] mr-2">
                        <TbShoppingCartCopy />
                    </span>
                    Orders
                </li>
                <li
                    onClick={() => {
                        setContent('Payment');
                    }}
                    className="cursor-pointer flex items-center"
                >
                    <span className="text-[22px] mr-2">
                        <MdOutlineAttachMoney />
                    </span>
                    Payment
                </li>
            </ul>
        </div>
    );
}

export default MenuBar;
