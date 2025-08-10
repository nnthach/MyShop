import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import { Fragment, Suspense } from 'react';
import SideBar from '~/components/SideBar/SideBar';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';
import LoadingIcon from '~/components/LoadingIcon/LoadingIcon';
import ProtectedRoute from '~/routes/ProtectedRoute';
import SideBarLeft from '~/components/SideBarLeft/SideBarLeft';

function App() {
    return (
        <div>
            <ScrollToTop />
            <ToastContainer />
            <SideBar />
            <SideBarLeft />
            <Suspense fallback={<LoadingIcon />}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
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
                                        {/* <ProtectedRoute component={Page} roleList={route.role} /> */}
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {privateRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
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
            </Suspense>
        </div>
    );
}

export default App;
