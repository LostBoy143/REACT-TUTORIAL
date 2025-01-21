import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filResList, setFilResList] = useState(
    []
  );
  console.log(useState());
  const [inputValue, setInputValue] =
    useState("");
  const filter = () => {
    console.log("button clicked");
    const filteredResList = resList.filter(
      (res) => res?.info?.avgRating >= 4.2
    );

    setFilResList(filteredResList);

    // for testing purposes
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}`
      );
    }
    const resData = await response.json();
    // console.log(
    //   resData?.data?.cards[4]?.card?.card
    //     ?.gridElements?.infoWithStyle?.restaurants
    // );
    setResList(
      resData?.data?.cards[4]?.card?.card
        ?.gridElements?.infoWithStyle?.restaurants
    );
    setFilResList(
      resData?.data?.cards[4]?.card?.card
        ?.gridElements?.infoWithStyle?.restaurants
    );
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
                  res?.info?.name
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
        {filResList.map((res) => {
          return (
            <Link
              key={res.info.id}
              to={"/restaurants/" + res?.info?.id}
            >
              {" "}
              <ResCard res={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
