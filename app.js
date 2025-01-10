import React from "react";
import ReactDOM from "react-dom/client";

/*

* Header
-logo
-nav-items

* Body
 -searchbar
 -restaurant-container
  -restaurant-card
    -restaurant-image
    -name of res,star rating ,cuisine,delivery time

* Footer
  -copyright
  -links
  -address
  -contact


*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
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
        </ul>
      </div>
    </div>
  );
};
const ResCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <div className="res-image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hxxasn2kf8g9eyi9eonq"
          alt="res-image"
        />
      </div>
      <div className="res-info">
        <h3>{props.resName}</h3>
        <p>{props.cuisine}</p>
        <p>Non-Veg</p>
        <p>20 min</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        {/* for future input field */}
      </div>
      <div className="res-container">
        {/* restaurant cards */}
        <ResCard
          resName="Taz restaurant"
          cuisine="Mutton"
        />
        <ResCard resName="Kfc" cuisine="Burger" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<AppLayout />);
