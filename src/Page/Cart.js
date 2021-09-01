import React, { useState } from "react";
import { useEffect } from "react";
import CartItems from "../components/CartItems";
import { useHistory } from "react-router-dom";

export default function Cart() {
    let history = useHistory();

  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0)

  const getTotal = () => {
    let storedProducts = JSON.parse(localStorage.getItem("product"));
    setCartProducts(storedProducts);

   let totalAgg = storedProducts?.reduce(
      (accumulator, current) => accumulator + current?.price,
      0
    );
    setTotal(totalAgg)
  }

const handleCheckout = () => {
  localStorage.removeItem("product");
  history.push("/CheckOutPage2");
}


  useEffect(() => {
    let storedProducts = JSON.parse(localStorage.getItem("product"));
    setCartProducts(storedProducts);
  }, []);
  useEffect(() => {
    getTotal()
  }, []);

  return (
    <div>
      <h4 className="myCart"> Cart</h4>

      <div className="productqyt">
        <div>
          <h4>Product</h4>
        </div>

        <div className="QUT">
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>
      </div>
      <hr className="carthr" />
      {cartProducts?.length > 0 &&
        cartProducts.map((product) => <CartItems product={product} />)}
     
      

      {/* <div className="productsq">
        <div className="productimg">
          <img src="\Cart\Clohes 11 1.png" alt="shoe" />
          <h5 className="size">Clothes 0-2 years 17,500₦ </h5>
        </div>

        <div className="btnprice">
          <div>
            <Link to="/Button">
              {" "}
              <button className="addMinus">-</button>
            </Link>
            <Link to="/Button">
              {" "}
              <button className="addSub">+</button>
            </Link>
          </div>
          <div>
            <h4> 6,500₦ </h4>
          </div>
        </div>
      </div>
      <button className="remove">
        <h3>Remove</h3>
      </button>

      <hr className="carthr" />

      <div className="productsq">
        <div className="productimg">
          <img src="\Cart\Toys 1 11.png" alt="shoe" />
          <h5 className="size">Game 2-5 years 10,800₦ </h5>
        </div>

        <div className="btnprice">
          <div>
            <Link to="/Button">
              {" "}
              <button className="addMinus">-</button>
            </Link>
            <Link to="/Button">
              {" "}
              <button className="addSub">+</button>
            </Link>
          </div>
          <div>
            <h4> 17,500₦ </h4>
          </div>
        </div>
      </div>
      <button className="remove">
        <h3>Remove</h3>
      </button>

      <hr className="carthr" /> */}
      <div className="mommycare">
        <h5>
          {" "}
          Shopping online for kids clothes,Shoes an Toys has never been an easy
          task, Our love for kids on mommycare are exceptional. we have a large
          collection from topnotch brands at the best price.
        </h5>

        <h3>
          <strong>Total:₦{total}</strong>
        </h3>
      </div>
      <div className="checkbtn">
          {" "}
          <button onClick={handleCheckout} className="checkout">Checkout</button>{" "}

      </div>
    </div>
  );
}
