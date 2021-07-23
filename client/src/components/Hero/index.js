import React from "react";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
    return (
       <Carousel showArrows={true}>
           <div>
               <img src='https://images1.phoenixnewtimes.com/imager/u/magnum/11513690/lakeside_grill.jpg?cb=1605244544' alt='' />
           </div>
           <div>
               <img src='https://images.squarespace-cdn.com/content/v1/559d8cdde4b05b78390dc774/1584899143834-R5KGT19POVBF8OR8X00U/plate-2.jpg?format=400w' alt='' />
           </div>
           <div>
               <img src='https://kirbiecravings.com/wp-content/uploads/2017/05/avocado-bun-burgers-11a-700x567.jpg' alt=''/>
           </div>
           <div>
               <img src='https://images.squarespace-cdn.com/content/v1/5ea8bf7e04e5b30763f0e5ac/1605213926860-ACAKDU7F7D2TWBIF4260/Combo+Sushi+Platter.jpeg?format=400h' alt=''/>
           </div>
       </Carousel> 
    );
}

export default Hero;