import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";  
import { FaGithub } from "react-icons/fa";  
import { FaInstagram } from "react-icons/fa";  

const Navbar = () => {
    return <div className="bg-black-800 mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" width="60" height="30"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin></FaLinkedin>
            <FaGithub></FaGithub>
            <FaInstagram></FaInstagram>
        </div>
    </div>
}

export default Navbar;