import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LOGO from '~/assets/img/maveriklogo.png';

function Header() {
    return (
        <div className="bg-white flex items-center justify-between py-2 px-10 h-[80px]">
            <div>
                <Link to="/">
                    <img className="w-[170px] sm:w-[280px]" src={LOGO} alt="logo" />
                </Link>
            </div>

            <div>
                <AiOutlineUser className="cursor-pointer text-[26px]" />
            </div>
        </div>
    );
}

export default Header;
