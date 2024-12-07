import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <div>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = DefaultLayout;
                    const Page = route.component;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
