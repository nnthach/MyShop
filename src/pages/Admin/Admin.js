import { useState } from 'react';
import Header from './components/Header/Header';
import MenuBar from './components/MenuBar/MenuBar';
import Dashboard from './components/Content/Dashboard/Dashboard';
import Product from './components/Content/Product/Product';
import User from './components/Content/User/User';
import Payment from './components/Content/Payment/Payment';
import Order from './components/Content/Order/Order';

function Admin() {
    const [content, setContent] = useState('Dashboard');

    const renderContent = (content) => {
        switch (content) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Products':
                return <Product />;
            case 'Users':
                return <User />;
            case 'Payment':
                return <Payment />;
            case 'Orders':
                return <Order />;
            default:
                return;
        }
    };
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Header />
            <div className="grow bg-red-500 w-full grid grid-cols-5">
                <MenuBar setContent={setContent} />
                <div className="bg-black col-span-4 p-10">{renderContent(content)}</div>
            </div>
        </div>
    );
}

export default Admin;
