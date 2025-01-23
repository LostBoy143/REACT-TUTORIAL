import ResCard from "./ResCard"; // Component for individual restaurant cards
import { useState, useEffect } from "react"; // React hooks
import Shimmer from "./Shimmer"; // Loading effect component
import { Link } from "react-router"; // For navigation links
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]); // Complete restaurant list
  const [filResList, setFilResList] = useState(
    []
  ); // Filtered restaurant list
  const [inputValue, setInputValue] =
    useState(""); // Search input state
  // Filter restaurants with an average rating of 4.2 or higher
  const filter = () => {
    const filteredResList = resList.filter(
      (res) => res?.info?.avgRating >= 4.2
    );
    setFilResList(filteredResList);
  };
  const onlineStatus = useOnlineStatus();
  // Fetch restaurant data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch restaurant data from the Swiggy API
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
    const restaurants =
      resData?.data?.cards[4]?.card?.card
        ?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(restaurants); // Update full list
    setFilResList(restaurants); // Update filtered list
  };

  // Show shimmer effect while data is loading
  if (onlineStatus === false) {
    return (
      <div className="offline message">
        Hey buddy ! You are offline...
      </div>
    );
  } else if (resList.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="p-8 ">
        {/* Filter and search section */}
        <div className="filter">
          <div className=" flex gap-2 pl-6 mb-2">
            {/* Search input */}
            <input
              type="text"
              className="border-[1px] border-gray-400 text-sm p-1 px-4 rounded-xl"
              placeholder="Search Something..."
              value={inputValue}
              onChange={(e) =>
                setInputValue(e.target.value)
              }
            />
            <button
              className="border-[1px] border-gray-400 bg-green-200 hover:bg-green-400 text-gray-900 p-1 px-2 rounded-xl"
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
            {/* Button to filter top-rated restaurants */}
            <button
              className="border-[1px] border-gray-400 hover:bg-blue-300 duration-500 px-4 rounded-xl py-1 ml-16"
              onClick={filter}
            >
              Top rated restaurants
            </button>
          </div>
        </div>
        {/* Render restaurant cards */}
        <div className="mt-16 px-5 flex flex-wrap justify-between gap-6">
          {filResList.map((res) => (
            <Link
              key={res.info.id}
              to={"/restaurants/" + res?.info?.id}
            >
              <ResCard res={res} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
