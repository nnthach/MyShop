import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';

function ProtectedRoute({ component: Component, roleList }) {
    const { authData } = useContext(AuthContext);
    const userRole = authData?.role || 'Guest';

    // Admin can access all pages
    if (userRole === 'admin') {
        return <Component />;
    }

    if (!roleList.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return <Component />;
}

export default ProtectedRoute;
