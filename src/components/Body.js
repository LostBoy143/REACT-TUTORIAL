import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const filter = () => {
    filteredResList = resList.filter(
      (res) => res?.info?.avgRating >= 4.4
    );
    setResList(filteredResList);
    // for testing purposes
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(
        "Network response was not ok"
      );
    }
    const jsonData = await response.json();
    console.log(jsonData?.data);
    setResList(
      jsonData?.data?.cards[1]?.card?.card
        ?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ">
      <div className="search">
        {/* for future input field */}
      </div>
      <button
        className="filter-button"
        onClick={() => {
          filter();
        }}
      >
        Top rated restaurants
      </button>
      <div className="res-container ">
        {/* restaurant cards */}
        {resList.map((res) => {
          return (
            <ResCard
              res={res}
              key={res?.info?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
