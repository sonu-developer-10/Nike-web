import React from "react";
import Shoe from "../images/shoe_image.png";
import Flipkart from "../images/flipkart.png";
import Amazon from "../images/amazon.png";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
            <img src={Flipkart} alt="flipkart-logo" />
                <img src={Amazon} alt="amazon-logo" />
            </div>
        </div>
       
      </div>
      <div className="hero-image">
      <img src={Shoe} alt="hero" />
      </div>
     
    </main>
  );
};

export default Hero;
