import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';

function OrderFail() {
    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center h-full space-y-5">
            {/*Status  icon */}
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center">
                <IoIosClose color="white" fontSize={70} />
            </div>
            {/*Text */}
            <div className="text-center">
                <h1 className="text-3xl font-medium mb-2">We couldn’t process your payment</h1>
                <p className="text-gray-500">Please try again or choose a different payment method</p>
            </div>

            <Link to={'/'}>
                <button className="border border-black px-2 pb-1 rounded-lg">Back to Home</button>
            </Link>
        </div>
    );
}

export default OrderFail;
