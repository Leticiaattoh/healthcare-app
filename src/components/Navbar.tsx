import { Link } from "react-router-dom";
 import logo from "../assets/images/logo.png"
const Navbar: React.FC = () => {
  return (
    <div className=" flex gap-4 list-none justify-between w-full text-lg md:text-xs lg:text-sm">
      <div className="flex items-center ml-[10%] gap-2  font-semibold">
        <img src={logo} alt="Logo" className="h-10 w-12" />
        <span className="  text-black">Trafalgar</span>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-5 text-xs gap-4 mr-[10%]">
        <Link to="/" className="no-underline text-gray-400 hover:text-black ">
          Home
        </Link>

        <Link
          to="/find"
          className="no-underline  text-[#9C98A6] hover:text-black "
        >
          Find a doctor
        </Link>

        <Link
          to="/apps"
          className="no-underline text-[#9C98A6] hover:text-black "
        >
          Apps
        </Link>
        <Link
          to="/testimonials"
          className="no-underline text-[#9C98A6] hover:text-black "
        >
          Tesimonials
        </Link>
        <Link
          to="/about"
          className="no-underline text-[#9C98A6] hover:text-black "
        >
          About us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
