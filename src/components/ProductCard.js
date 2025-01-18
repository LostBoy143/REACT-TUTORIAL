import React from "react";

const Productard = (props) => {
  const {
    id,
    images,
    title,
    category,
    rating,
    price,
  } = props?.data;
  return (
    <div className="product-card" key={id}>
      <img src={images[0]} alt="product-img" />
      <h3 id="title">{title}</h3>
      <p id="category">{category}</p>
      <div id="rating">{rating?.rate}</div>
      <h3 id="price">$ {price}</h3>
    </div>
  );
};

export default Productard;
