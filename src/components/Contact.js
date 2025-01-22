import React from "react";
import useProductData from "../utils/useProductData";
function Contact() {
  console.log(useProductData());
  return (
    <div>
      <h1>This is contact page</h1>
    </div>
  );
}

export default Contact;
