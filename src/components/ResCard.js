import React from "react";
import { IMG_URL } from "../utils/constant";
const ResCard = (props) => {
  const {
    cost,

    name,
    avgRating,
    deliveryTime,
  } = props?.res;
  return (
    <div className="res-card">
      <div className="res-image h-auto">
        <img
          src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M="
          alt="res-image"
        />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <p>{cost}</p>
        <p>{avgRating}</p>
        <p>{deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default ResCard;
