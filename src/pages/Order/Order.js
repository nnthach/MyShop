import { useLocation } from 'react-router-dom';
import OrderFail from '~/pages/Order/components/OrderFail';
import OrderSuccess from '~/pages/Order/components/OrderSuccess';

function Order() {
    const location = useLocation();
    const { orderId, message } = location.state || {};
    return (
        <div className="h-[90vh]">
            {message === 'Order success' ? <OrderSuccess orderId={orderId} /> : <OrderFail />}
        </div>
    );
}

export default Order;
