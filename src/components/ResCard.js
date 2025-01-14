import React from "react";
import resList from "../utils/mockData";
const ResCard = () => {
  return resList.map((res, idx) => {
    const { name, cuisines, avgRating, sla } =
      res?.info;
    return (
      <div className="res-card" key={idx}>
        <div className="res-image h-auto">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hxxasn2kf8g9eyi9eonq"
            alt="res-image"
          />
        </div>
        <div className="res-info">
          <h3>{name}</h3>
          <p>{cuisines.join()}</p>
          <p>{avgRating}</p>
          <p>{sla.deliveryTime} mins</p>
        </div>
      </div>
    );
  });
};

export default ResCard;
