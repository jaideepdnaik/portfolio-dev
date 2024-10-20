import logo from "../assets/Logo.png";  

const Navbar = () => {
    return <div className="bg-black-800 mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" />
        </div>
    </div>
}

export default Navbar;