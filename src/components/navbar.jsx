import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";  
import { FaGithub } from "react-icons/fa";  
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return <div className="mb-12 flex item-center justify-between py-6 lg:mx-40 mt-4">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} width="75" height="30"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-lg">
            <FaLinkedin></FaLinkedin>
            <FaGithub></FaGithub>
            <FaInstagram></FaInstagram>
        </div>
    </div>
}

export default Navbar;