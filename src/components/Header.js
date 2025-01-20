import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {}, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/store">
            <li>MyStore</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
