import classNames from "classnames";
import { FaPlateWheat } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentPath = useLocation().pathname;
  
  return (
    <nav className="md:mx-20 absolute z-50">
      <ul className="flex md:space-x-20 space-x-8 text-base md:text-lg px-4 md:px-0 py-10 justify-start">
        <li>
          <Link to="/" className="flex md:px-20 items-center font-bold text-lg md:text-xl">
            <FaPlateWheat className="mr-2" />
            PIRINGAN
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={classNames({
              "border-b-2 md:border-b-4 border-green-600": currentPath === "/",
              "text-gray-600": currentPath !== "/",
              "font-semibold": true,
            })}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={classNames({
              "border-b-2 md:border-b-4 border-green-600": currentPath === "/about",
              "text-gray-600": currentPath !== "/about",
              "font-semibold": true,
            })}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
