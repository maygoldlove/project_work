import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  { Link } from "react-router-dom";

import ProductCard from '../components/ProductCard';
export default function Home() {
const [products, setProducts] = useState([{
  name: 'Sleep in Clothes',
  price: '4,599',
  img: '/homepageimg/Clothes-42.png'


}])
const [product, setProduct ]= useState([])

const getProducts = async () => {
 let {data} = await axios.get("https://mommycare-e-commerce-lite.herokuapp.com/api/v1/item/items")
 setProduct(data.data)
}

useEffect(() => {
  getProducts()
}, [products, setProducts])

    return (
        <div>

{/* section-0 className Rectangle */}

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
     <div class="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
  
      <div className="carousel-inner">
            <div className="carousel-item active">
               <img className="Cardimg1" src="/homepageimg/BigScreen.png" alt="rectangle1" /> 
               <div className="centered carousel-caption d-none d-md-block">
                  <h1>
                    Dazzle In Our <br/>
                    Beautiful Summer<br/>
                    Collections
                 </h1> 
                  <Link to="/Desktop9"> <button className="shop">Shop now</button></Link>
               </div>
           </div>


      <div className="carousel-item">
               <img src="\homepageimg\baby-shoes-4675337_1920 2.png" className="Cardimg1" alt="..."/>
             <div className="centered carousel-caption d-none d-md-block">
               <h1>
                  Dazzle In Our <br/>
                  Beautiful Summer<br/>
                  Collections
                </h1>
                 <Link to="/Shoes"> <button className="shop">Shop now</button> </Link>
              </div>
       </div>


         <div className="carousel-item">
                  <img src="\homepageimg\Clothes 21.png" className="Cardimg1" alt="..."/>
              <div className="centeredOne carousel-caption d-none d-md-block">
                      <h1>
                        Dazzle In Our <br/>
                        Beautiful Summer<br/>
                        Collections
                      </h1>
                     <Link to="BoyClothes"> <button className="shop">Shop now</button> </Link>
               </div>
          </div>

  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
  </button>

  <div className="whatsapp">
          <a href="https://www.whatsapp.com">  <img src="/homepageimg/WhatsApp Buttonn.png" alt="whatsApp" /> </a>
        </div>
</div>




            {/* section-1 className Home-Featured-categories */}
          <div class="my-section container">
            <div class="featureCategories">
            <hr/>
                        <h1>Featured Categories</h1>
            <hr/>
             </div>
                  <div class="my-featured-container row">
      
          <div class=" f-img col-md-4">
               <Link to="/BoyClothes"> <img className="f-image" src="/homepageimg/Clothes 1 (1).png" alt="clothes"/> </Link>
                <h4 class="my-h4">Clothes</h4>
           </div>


          <div class=" col-md-4">
            <Link to="/Shoes"> <img className="f-image" src="/homepageimg/Shoe 6 4.png" alt="shoe" /></Link>
               <h4 class="my-h4">Shoes</h4>
          </div>

           <div class="col-md-4">
           <Link to="/Desktop10">  <img className="f-image"  src="/homepageimg/Rectangle 312.png" alt="minions" /> </Link>
                <h4 class="my-h4">Toys</h4>
           </div>

     </div>

</div>
            
{/* section-2 Bestsellers className Home-bestsellers */}

  <div class="feature-container container">

  <div class="featureCategories">
            <hr/>
                        <h1>Top Product</h1>
            <hr/>
             </div>

        <div class="Home-Bestsellers row">
          {product.map(product =>(
            <ProductCard products={product}/>

          ))}
          {/* <div class="m col-md-3 d-flex flex-column"><img className="my-bestsellers-image"   src="/homepageimg/Clothes 42.png" alt="teddybear"/> <img className="star-img" src="/homepageimg/stars.png"/> <h6>Sleep in Clothes</h6> <h6 className="bst-h6">₦ 4,599</h6>  </div>
          <div class="m col-md-3 d-flex flex-column">  <img className="my-bestsellers-image" src="/homepageimg/Clothes 67.png" alt="cloth68"/> <img className="star-img" src="/homepageimg/stars.png"/> <h6>Summer Wear</h6><h6 className="bst-h6"> ₦ 4,599</h6> </div>
          <div class="m col-md-3 d-flex flex-column"> <img className="my-bestsellers-image" src="/homepageimg/Head band.png" alt="shoe48"/><img className="star-img" src="/homepageimg/stars.png"/>  <h6>Baby Hair Band</h6><h6 className="bst-h6">₦ 4,599</h6></div>
          <div class="m col-md-3 d-flex flex-column"> <img className="my-bestsellers-image" src="/homepageimg/wear 1 1.png" alt="cloth23"/><img className="star-img" src="/homepageimg/stars.png"/> <h6>Pant Shirt and Trouser</h6> <h6 className="bst-h6">₦ 4,599</h6> </div> */}
        </div>

        {/* <div class="Home-Bestsellers row"> 
          <div class="m col-md-3 d-flex flex-column"> <img className="my-bestsellers-image" src="/homepageimg/Clothes 20.jpg" alt="cloth53"/><img className="star-img" src="/homepageimg/stars.png" alt=""/> <h6>Infant Wear</h6> <h6 className="bst-h6">₦ 4,599</h6> </div>
          <div class="m col-md-3 d-flex flex-column"> <img className="my-bestsellers-image" src="/homepageimg/baby-concept-with-shoe-composition 2.png" alt="shoe19"/> <img className="star-img" src="/homepageimg/stars.png"alt=""/> <h6>Baby Shoe</h6><h6 className="bst-h6">₦ 4,599</h6> </div>
          <div class="m col-md-3 d-flex flex-column"> <img className="my-bestsellers-image" src="/homepageimg/Shoe 17 1.png" alt="cloth21"/> <img className="star-img" src="/homepageimg/stars.png" alt=""/> <h6>Toddler Slipon</h6><h6 className="bst-h6">₦ 4,599</h6> </div>
          <div class="m col-md-3 d-flex flex-column">  <img className="my-bestsellers-image" src="/homepageimg/Shoe 50 1.png" alt="toy"/> <img className="star-img" src="/homepageimg/stars.png" alt=""/> <h6>Cartoon Slippers</h6><h6 className="bst-h6">₦ 4,599</h6></div>
        </div> */}
  </div>


 </div>
    )
}
