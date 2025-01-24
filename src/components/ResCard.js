import React, { useContext } from "react";
import { IMG_URL } from "../utils/constant";
import UserContext from "../contexts/UserContext";

const ResCard = (props) => {
  const { user2, setUser2 } =
    useContext(UserContext);
  setUser2("Sahil");
  console.log(user2);
  const {
    costForTwo,
    cloudinaryImageId,
    sla,
    name,
    avgRating,
    id,
  } = props?.res?.info;
  return (
    <div className="min-h-[300px] w-[250px] cursor-pointer bg-gray-200 p-2 rounded-lg ">
      <div className="res-image h-auto">
        <img
          src={`${IMG_URL}${cloudinaryImageId}`}
          alt="res-image"
          className="h-[150px] object-cover w-full rounded-lg"
        />
      </div>
      <div className="res-info flex flex-col justify-between">
        <h3 className="font-bold">{name}</h3>
        <p>{costForTwo}</p>
        <p>{avgRating} ⭐</p>
        <p>{sla.slaString} ⌛</p>
      </div>
    </div>
  );
};

export default ResCard;
