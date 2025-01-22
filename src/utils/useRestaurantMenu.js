import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

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
  };

  return resInfo;
};
export default useRestaurantMenu;
