
import React from 'react';
import Header from '../component/Header';
import Image_slider from '../component/Image_slider';
import My_card from '../component/My_card';
import Img4 from '../Images/4.jpg'
import Img5 from '../Images/5.jpg'
import '../App.css';
const HomeScreen=()=>
{
  return(
   <div>
    
    <Header/>
  <Image_slider/>
 
    <h2 className=" myheading text-center">My Smart Basket</h2>
  <div className="row">
    <div className="col-lg-3">
 <My_card  product_image={Img4} product_name="Capsicum - Green" product_weight="500g" product_price="Rs 14.85"/>
 </div>
 <div className="col-lg-3">
 <My_card  product_image={Img5} product_name="Cauliflower"product_weight="1 pc (400 to 600g)" product_price="Rs 40"/>
   </div>  
   </div>  
</div>
  );
}
export default HomeScreen;




