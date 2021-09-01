import React from 'react'
import * as AiIcons from "react-icons/ai";
import  { Link } from "react-router-dom";

export default function CheckOutPage2() {
    return (
        


        <div class="row">


  <div class="formPage col-sm-6">
    <div class="myForm card">
      <div class=" card-body">

    <form className="email">
            <input  type="email" placeholder="Enter Email Address"/><br/> 
            <label>Email Address for sending product details</label>
    </form>

    <h4>Contact Details</h4>
    <form className="Fname">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
    </form>


    <form className="email">
            <input type="text" placeholder="Address"/>
    </form>

    <form className="email">
            <input type="text" placeholder="Nearest LandMark"/>
    </form>

    <form className="Fname">
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="State"/>
    </form>


    <form className="email">
            <input type="text" placeholder="Phone Number"/>
            <label>For contact about the order on delivery</label>
    </form>
 
        <div className="completeorder"> 
    <Link to="/Cart">  <h3>< AiIcons.AiOutlineLeft/> Return</h3></Link>  <Link to="/SuccessPage"> <button>complete order</button></Link>
        </div>

      </div>
    </div>
  </div>


     <div class="checkoutpagemain col-sm-6">
    <div class="checkoutpage card">
      <div class="checkoutpage card-body">

        
                      <div className= "checkoutpage2">
                            <div className="checkoutItem">
                                <img id="cartitem" src="\ProductDetails\Rectangle 312.png" alt="shoe"/>
                                <h5 className="itemName">Vannee set <br/>0 - 2 years</h5>
                            </div>

                            <div className="checkoutprice">
                            <h6> 17,500₦ </h6>
                            </div>
                    </div>
                    <button className="cartitem">1</button>
                         <hr/>
                    <div className="checkoutdiscount">
                       <input type="text" placeholder="Discount code" /> <button>Apply</button>
                    </div>

                    <hr/>
                  <div className="subTotal">
                      <h4>Sub total</h4> <h4> 17,500₦ </h4>
                  </div>

                  <div className="subTotal">
                      <h4>Delivery Fee</h4> <h4> 1,000₦ </h4>
                  </div>

                  <hr/>
                  <div className="subTotal">
                      <h4><strong>Total</strong></h4> <h4><strong> 18,500₦ </strong> </h4>
                  </div>
      </div>
    </div>
  </div>

</div>
    )
}
