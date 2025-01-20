import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const response = await fetch(
      MENU_URL + resId
    );
    if (!response) {
      console.error("Error fetching menu data");
      return;
    }
    const json = await response.json();
    setResInfo(json.data);
    // console.log(
    //   json?.data?.cards[4]?.groupedCard
    //     ?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
  };

  if (!resInfo) {
    return <Shimmer />;
  } else {
    const items =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap
        ?.REGULAR?.cards[2]?.card?.card
        ?.itemCards;
    return (
      <div className="menu">
        <h1>
          {resInfo?.cards[0]?.card?.card?.text}
        </h1>
        <hr />
        <h2>Menu</h2>
        <h4>Recommended</h4>
        <ul>
          {items.map((item) => {
            const {
              id,
              name,
              price,
              defaultPrice,
            } = item?.card?.info;
            return (
              <li className="list-items" key={id}>
                <p>{name}</p>
                <p>
                  Rs.
                  {price / 100 ||
                    defaultPrice / 100}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
