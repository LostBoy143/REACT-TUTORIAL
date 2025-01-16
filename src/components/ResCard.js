import React from "react";
import { IMG_URL } from "../utils/constant";
const ResCard = (props) => {
  const {
    costForTwo,
    id,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
  } = props?.res?.info;
  return (
    <div className="res-card" key={id}>
      <div className="res-image h-auto">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="res-image"
        />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <p>{cuisines.join()}</p>
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
        <p>{deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default ResCard;
