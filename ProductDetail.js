import React from "react";

function ProductDetail({ product }) {
  return (
    <div className="section card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button className="add-btn">ADD TO CART</button>
    </div>
  );
}

export default ProductDetail;
