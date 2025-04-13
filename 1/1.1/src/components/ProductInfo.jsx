import React from "react";

const product = {
  name: "Laptop",
  price: 1200,
  availibility: "In stock",
};

const ProductInfo = () => {
  return (
    <div>
      <h1>Product name : {product.name}</h1>
      <h1>Product price : ${product.price}</h1>
      <h1>Product availibility : {product.availibility}</h1>
    </div>
  );
};

export default ProductInfo;
