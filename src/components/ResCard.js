import React from "react";
import { IMG_URL } from "../utils/constant";
const ResCard = (props) => {
  const {
    costForTwo,
    cloudinaryImageId,
    sla,
    name,
    avgRating,
  } = props?.res?.info;
  return (
    <div className="res-card">
      <div className="res-image h-auto">
        <img
          src={`${IMG_URL}${cloudinaryImageId}`}
          alt="res-image"
        />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
        <p>{sla.slaString}</p>
      </div>
    </div>
  );
};

export default ResCard;
