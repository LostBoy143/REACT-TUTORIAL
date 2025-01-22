import { useState, useEffect } from "react";

const useProductData = () => {
  const [products, setProducts] = useState([]);

  // Define the fetch function
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products"
      );
      console.log(
        "Response status code:",
        response.status
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      console.log(json);
      setProducts(json.products);
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.message
      );
    }
  };

  // Call fetchData in useEffect
  useEffect(() => {
    fetchData();
  }, []);

  return products;
};

export default useProductData;
