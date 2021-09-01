import React, { useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetails() {
  const [product, setProduct] = useState('');
  let { id } = useParams();

  const handleAddToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem("product"));
    let productLocal = [];
    if (storedProducts) {
      storedProducts = [...storedProducts, product];
      return localStorage.setItem("product", JSON.stringify(storedProducts));
    }
    productLocal.push(product);
    localStorage.setItem("product", JSON.stringify(productLocal));
    console.log({ storedProducts });
    alert("added to cart successfully");
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        let { data } = await axios.get(
          `https://mommycare-e-commerce-lite.herokuapp.com/api/v1/item/items/${id}`
        );
        console.log(data);
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, [id, product]);
  return (
    <div className="product_details">
      {product ? <div class="container mt-5">
        <div class="row">
          <div class="col">
            <img src={product?.image[0]} class=" cartimg " alt="..." />
          </div>
          {product?.image && (
            <div className="productNAme col">
              {" "}
              <h5>{product?.name}</h5>
              <img
                className="priceStars"
                src="/Stars/Group 15.png"
                alt="stars"
              />
              <div className="productid">
                <h5>₦{product?.price}</h5>
              </div>
              <div class="btn-group">
                <button
                  type="button"
                  class="sizeButton   dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Size 0-2 years
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <button class="dropdown-item" type="button">
                      0-2 year
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      2-4 year
                    </button>
                  </li>
                </ul>
              </div>
              <div className="sharebtn">
                <div classname="btnGroup">
                  <button className="addSub">+</button>
                  <button className="addSub">-</button>
                </div>

                <div className="shareIcons">
                  <IconContext.Provider
                    value={{ color: "#26ABEA", size: "60" }}
                  >
                    <AiIcons.AiOutlineHeart />
                    <FiIcons.FiShare2 />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="productd">
                <p>{product?.description}</p>
              </div>
              <div className="Addcart">
                <button className="sizeButton2" onClick={handleAddToCart}>
                  Add Cart
                </button>
              </div>
            </div>
          )}
          <div class="w-100"></div>
        </div>
      </div> : ''}
      
    </div>
  );
}
