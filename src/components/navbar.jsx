import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";  
import { FaGithub } from "react-icons/fa";  
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mb-12 flex item-center justify-between py-6 lg:mx-40 mt-4">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} width="75" height="30" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-lg">
        <a
          href="https://www.linkedin.com/in/jaideep-d-naik-405335205/"
          target="blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          href="https://github.com/jaideepdnaik"
          target="blank"
          rel="noopener noreferrer"
        >
          <FaGithub></FaGithub>
        </a>
        <a
          href="https://www.instagram.com/jaideep_d_naik/"
          target="blank"
          rel="noopener noreferrer"
        >
          <FaInstagram></FaInstagram>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
