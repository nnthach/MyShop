import { useLocation } from 'react-router-dom';
import OrderFail from '~/pages/Order/components/OrderFail';
import OrderSuccess from '~/pages/Order/components/OrderSuccess';

function Order() {
    const location = useLocation();
    const { orderId, message } = location.state || {};
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Kết quả đặt hàng</h1>

            {message === 'Order success' ? <OrderSuccess orderId={orderId} /> : <OrderFail />}
        </div>
    );
}

export default Order;
