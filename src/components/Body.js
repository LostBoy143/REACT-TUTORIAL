import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import mockData from "../utils/mockData";

const Body = () => {
  const [resList, setResList] =
    useState(mockData);
  const [filResList, setFilResList] =
    useState(mockData);

  const [inputValue, setInputValue] =
    useState("");
  const filter = () => {
    filteredResList = resList.filter(
      (res) => res?.avgRating >= 4
    );
    setFilResList(filteredResList);
    // for testing purposes
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Something"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredResList =
                resList.filter((res) =>
                  res?.name
                    .toLowerCase()
                    .includes(
                      inputValue.toLowerCase()
                    )
                );
              setFilResList(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            filter();
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container ">
        {/* restaurant cards */}
        {filResList.map((res, idx) => {
          return <ResCard res={res} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Body;
