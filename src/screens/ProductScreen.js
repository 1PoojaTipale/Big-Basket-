// import React from 'react';
// import Header from '../component/Header';

// const ProductScreen=()=>
// {
//   return(
//     <div>
//       <Header/>
//       <h1>ProductScreen</h1>
//     </div>
//   );
// }
// export default ProductScreen;



import React from 'react';
import Header from '../component/Header';
import Img4 from '../Images/4.jpg'
import {BrowserRouter , Switch,Route, Link } from "react-router-dom";
import {Button }from "react-bootstrap";
import {FontAwesome, FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons';


function ProductInformation()
{

   const element=
   <FontAwesomeIcon icon={faTags}/>
        return(
            <div>
                 <Header />
                 <div class="row">
                 <div className="col-lg-6 text-center productInfoDiv">
                     <div className="row">
                         <div className="col-lg-12">
                         <img className="mx-auto d-block productImage " src={Img4}/>
                         </div>

                         {/* <div className="col-lg-12">
                         <button className="addToCartButton">GO TO CART</button>
                         <button className="buyNowButton">BUY NOW</button>
                         </div> */}

                         </div>
                
                </div>
                 <div className="col-lg-6 secondDivProduct productInfoDiv">
                <h2 className="capsium">Capsicum - Green </h2>
                <p>
                <h6 className="pc"> 1 pc (approx. 500 g to 800 g)</h6>
                <h6>₹MRP:<span><del>Rs 25</del></span> <span  className="mrp">Price:Rs 11.84</span></h6>
    <span className="text-danger   font-family: sans-serif;"><b>You Save:53% </b><span>(Inclusive of all taxes)</span></span>
                 
                        <ul>
                        <div className="col-lg-12">
                        <button className="one">1</button>
                        <button className="buyNowButton">BUY NOW</button>
                        <button className="save">SAVE</button>
                        </div>
                        </ul> 
                        </p>
                        </div> 
                        </div>
                        </div>
        );
}
export default ProductInformation;