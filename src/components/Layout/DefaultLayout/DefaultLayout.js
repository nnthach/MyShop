import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="mx-auto min-h-[500px] w-full bg-blue-500 mt-[80px]">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
