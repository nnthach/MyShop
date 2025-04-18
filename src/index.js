import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SideBarProvider } from '~/context/SideBarContext';
import { AuthProvider } from '~/context/AuthContext';
import { ProductsProvider } from '~/context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProductsProvider>
            <AuthProvider>
                <SideBarProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </SideBarProvider>
            </AuthProvider>
        </ProductsProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
