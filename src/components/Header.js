import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered");
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

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
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              id="auth-button"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
