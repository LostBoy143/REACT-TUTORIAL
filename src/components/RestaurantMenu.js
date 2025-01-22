import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
