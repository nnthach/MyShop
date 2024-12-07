import LOGO from '~/assets/img/maveriklogo.png';

function Header() {
    return (
        <div className="flex items-center justify-between h-[80px] bg-black text-white">
            {/*Menu */}
            <div className="">alo alo</div>

            {/*Logo */}
            <div>
                <img className="w-[280px]" src={LOGO} alt="logo" />
            </div>

            {/*Account */}
            <div>
                
            </div>
        </div>
    );
}

export default Header;
