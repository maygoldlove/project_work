import React from 'react'
import  { Link } from "react-router-dom";

export default function FooterSection() {
    return (
        

          
     <div class=" footer-container container-fluid">
            <Link to="/"> <img id="footerImg" src="/nav bar/Desktop Logo.png" alt="home-icon"/> </Link>

        
    

          <div class="row">
          <div class="col-md-3 d-flex flex-column"> 
                <h4>Quick Links</h4>
                <ul>
                  <a href=""><li>Contact Us</li></a> 
                  <a href=""><li>About Us</li></a> 
                  <a href=""><li>Delivery</li></a> 
                  <a href=""><li>Account</li></a> 
                </ul> 
            </div>



          <div class="col-md-3 d-flex flex-column"> <h4>Terms & Polices</h4>
                      <ul>
                      <a href=""><li>Privacy Terms</li></a> 
                      <a href=""> <li>Terms and Conditions</li></a> 
                       </ul>  
            </div>



          <div class="col-md-3 d-flex flex-column">  <h4>Socials</h4>
              <ul>
              <a href=""><li> <img src="/footericons/facebook.png" alt="facebook"/> </li></a> 
              <a href=""> <li>  <img src="/footericons/instagram.png" alt="instagram"/>  </li></a> 
              <a href=""><li> <img src="/footericons/twitter.png" alt="twitter"/> </li></a> 
              </ul> 
            </div>




          <div class="col-md-3 d-flex flex-column">  <div className="stay-update">
            
                <h4>Stay Updated</h4>
                  <p>Subscribe our newsteller to receive<br/>
                    updates about  new products and<br/>
                    latest promotions.</p>
                      
                        <input type="email" placeholder="email"/>
                </div> </div>
        </div>


          


                         <hr id="footerhr"/>
                        <h4>Ⓒ  2021 mommycare.com. All rights reserved</h4>
          
        </div>

        
      
    )
}
