import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ProductCard from "./ProductCard";
const FakeStore = () => {
  const [inputVal, setInputVal] = useState("");
  const [products, setProducts] = useState([]);
  const [filProducts, setFilProducts] = useState(
    []
  );
  console.log(products);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://dummyjson.com/products"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const productData = await response.json();

    setProducts(productData.products);
    setFilProducts(productData.products);
  };

  if (products.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="fake-store-container">
      <div className="search-container">
        <input
          type="text"
          value={inputVal}
          placeholder="Search for products"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilProducts(
              products.filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(
                    inputVal.toLowerCase()
                  )
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="product-container">
        {filProducts.map((product) => (
          <ProductCard
            data={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FakeStore;
