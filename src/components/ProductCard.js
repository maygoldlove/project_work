import React from "react";
import { useHistory } from "react-router-dom";

export default function ProductCard({ products }) {
  let history = useHistory();

  const handleProduct = () => {
    console.log(products._id);
    history.push(`/product-details/${products._id}`)
  }
  return (
    <div class="m col-md-3 d-flex flex-column" onClick={handleProduct}>
      <img
        className="my-bestsellers-image"
        src={products.image[0]}
        alt={products.name}
      />{" "}
      <h6 className="bst-h6">₦ {products.price}</h6>{" "}
      <p>{products.name}</p>

      
    </div>



    
  );
}
