import React from "react";
import { useHistory } from "react-router-dom";


export default function CartItems({ product }) {
  console.log(product);

  let history = useHistory();

  const handleRemove = () => {
  localStorage.removeItem("product");
  history.push("/cart");
}


  return (

    <>
    <div className="productsq">
      {product?.image ? (
        <>
          <div>
            <img src={product?.image[0]} alt="shoe"  className="productimg"/>
            <h5 className="size">{product.name} 0-2 years ₦{product.price} </h5>
          </div>

          <div className="btnprice">
            <div >
                <button className="addMinus">-</button>
                <button className="addSub">+</button>
            {/* <button className="remove">
              
                <h3>Remove</h3>
                </button> */}
            </div>
            <div className="price">
              <h4> ₦{product.price} </h4>
            </div>
          </div>

      
        </>
      ): <p>No items in cart</p>}
    </div>
 <button onClick={handleRemove}  className="remove">
        Remove
      </button>

<hr className="carthr" />
    </>
  );
}
