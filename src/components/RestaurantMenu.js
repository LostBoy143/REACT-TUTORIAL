import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIdx, setShowIdx] = useState(null);

  if (!resInfo) {
    return <Shimmer />;
  } else {
    const items =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap
        ?.REGULAR?.cards[2]?.card?.card
        ?.itemCards;

    //getting data of categories

    const categories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    return (
      <div className="py-5 px-6 sm:px-0 w-full sm:w-6/12 mx-auto ">
        <h1 className="text-center font-bold text-[24px] p-2 border-b-2 border-b-orange-600">
          {resInfo?.cards[0]?.card?.card?.text}
        </h1>
        <h3 className="py-6">Menu</h3>

        {categories.map((category, idx) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            items={category?.card?.card}
            showItems={
              idx === showIdx ? true : false
            }
            setShowIdx={() => setShowIdx(idx)}
            showIdx={showIdx}
          />
        ))}
      </div>
    );
  }
};

export default RestaurantMenu;
