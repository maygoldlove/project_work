import React from 'react'
import  { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons/lib';

export default function SuccessPage() {
    return (

       
        
        <IconContext.Provider value={{color: '#26ABEA', size:100,}}>
        <div class="SuccessPage container">

            <AiIcons.AiFillCheckCircle/>
        
            <h1>Order Successful</h1>
            <h6>Order ID:562478DR</h6>
            <hr/>
            <h6>Delivery Information</h6>
            <h6>Amaka Samuel 0815672637</h6>
            <p>2B River complex, Warri, Delta.</p>

           <Link to="/"><button className="sbtn">continue shopping</button></Link><br/>
           <Link to="/cart"> <button className="sbtn1">view Order</button> </Link>
            
        </div>
        </IconContext.Provider>
    )
}
