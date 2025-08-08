import { IoReload } from 'react-icons/io5';

function LoadingIcon() {
    return (
        <div className="flex items-center justify-center h-screen">
            <IoReload className="animate-spin text-black text-2xl" />
        </div>
    );
}

export default LoadingIcon;
