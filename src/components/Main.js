import HeroImage from "../assets/images/hero-image.png";
import Amazon from "../assets/images/amazon.png";
import Flipkart from "../assets/images/flipkart.png";
export const Main = () => {
  return (
    <main>
      <div className="contanior">
        <div className="info">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btn">
            <button className="shop">Shop Now</button>
            <button className="category">Category</button>
          </div>

          <div className="bottom">
            <span>Also Available On</span>
            <div className="icon">
            
              <img src={Amazon} alt="amazon" />
              <img src={Flipkart} alt="flipkart" />
            </div>
          </div>
        </div>
        <div className="item">
          <img src={HeroImage} alt="Product" />
        </div>
      </div>
    </main>
  );
};
