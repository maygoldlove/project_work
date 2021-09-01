import './App.css';
import  {BrowserRouter as  Router, Switch, Route } from "react-router-dom";

import Home from './Page/Home'
import Navbar from './Page/Navbar';
import Desktop9 from './Page/GirlClothes';
import FooterSection from './Page/FooterSection';
import Desktop10 from './Page/Toys';
import BoyClothes from './Page/BoyClothes';
import Shoes from './Page/Shoes';
import CheckOutPage2 from './Page/CheckOutPage2';
import ProductDetails from './Page/ProductDetails';
import Cart from './Page/Cart';
import SuccessPage from './Page/SuccessPage';
// import Button from './components/Button';


function App() {
  return (
    <div className="App">
  
<Router>
  <Navbar /> 

      <Switch>

        <Route path='/' exact >

      <Home />
      {/* <Button/> */}
      </Route>

<Route path="/Desktop9">
  
  <Desktop9/>
  </Route>

<Route path="/Desktop10">
  <Desktop10/>
  </Route>

  <Route path="/BoyClothes">
  <BoyClothes/>
  </Route>

  
  <Route path="/Shoes">
  <Shoes/>
  </Route>



  <Route path="/CheckOutPage2">
  < CheckOutPage2/>
  </Route>

  <Route path="/product-details/:id">
  < ProductDetails/>
  </Route>

 
   
  <Route path="/Cart">
  < Cart/>
  </Route>
  
  <Route path="/SuccessPage">
  <SuccessPage/>
  </Route>
 
</Switch>
<FooterSection />
</Router>

             
    </div>

  



  
  );
}

export default App;
