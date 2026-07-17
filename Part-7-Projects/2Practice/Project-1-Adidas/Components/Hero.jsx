import React from "react";

const Hero = () => {
  return (
    <>
      <div className="box1">
        <div>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p className="para1">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btn">
            <button style={{ backgroundColor: "#D01C28" }}>Shop Now</button>
            <button>Category</button>
          </div>

          <p>Also Available ON</p>
          <div className="img1">
            <img src="flipkart.png" alt="flipkart" />
            <img src="amazon.png" alt="amazon" />
          </div>
        </div>

        <div>
          <img className="img2" src="shoes.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
