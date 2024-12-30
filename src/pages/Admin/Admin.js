import Header from './components/Header/Header';
import MenuBar from './components/MenuBar/MenuBar';

function Admin() {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Header />
            <div className="grow bg-red-500 w-full grid grid-cols-5">
                <MenuBar />
                <div className="bg-pink-400 col-span-4">container</div>
            </div>
        </div>
    );
}

export default Admin;
