import { useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import UserContext from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="flex  bg-pink-100 h-[96px] shadow-lg mb-3 px-4 justify-between items-center">
      <div className="w-24">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex gap-8">
          <Link to="/">
            <li className="hover:text-gray-700 hover:border-b-[2px] border-gray-600">
              Home
            </li>
          </Link>
          <Link to="/store">
            <li className="hover:text-gray-700 hover:border-b-[2px] border-gray-600">
              MyStore
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-gray-700 hover:border-b-[2px] border-gray-600">
              About us
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-gray-700 hover:border-b-[2px] border-gray-600">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
