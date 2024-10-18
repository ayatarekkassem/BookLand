import React, {  useContext } from "react";
import "./FeaturedProduct.css";
import Slider from "react-slick";
import BookStoreContext from "../../../context/BookStoreContext";
import { Link } from "react-router-dom";
import FeaturedSliderDatas from "../../../data/FeaturedSliderDatas";

//  export default class FeaturedProduct extends Component{
  const FeaturedProduct = () =>{
  
   
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { addToCart } = useContext(BookStoreContext);
    return (
      <div className="featured-slider">
        <div className="container">
        <div className="recomended-header text-center">
            <h2> Featured Product </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
          {/* heading */}
        
      
        <div className="feat-slider">
        <Slider {...settings}>
                       
           {FeaturedSliderDatas.map((featured) =>(
   
              <div className="feat-item">
                <img src={featured.image} alt={featured.title} />
                <div className="featured-desc">
                <h6>{featured.title}</h6>
                <h3>{featured.title}</h3>
                <ul className="list-unstyled">
                  <li>{featured.listOne}</li>
                  <li>{featured.listTwo}</li>
                </ul>
                <p>{featured.info}</p>
                <ul className="list-unstyled price-info">
                  <li className="price">${featured.price}</li>
                  <li className="del"><del>${featured.del}</del></li>
                  <li className="discount">{featured.discount}% OFF</li>
                </ul>
                <div className="butons">
                  <button onClick={() => addToCart(featured, 1)}  className="buy-btn" >Buy Now</button>
                  <button className="details-btn">             
                    <Link to={`/FeatSinglePage/${featured.id}`}  key={featured.id}>
                    See Detais
                    </Link>
                  </button>
                </div>
              </div>
              </div>

          ))}
          
      
        </Slider>
      </div>
      </div>
     </div>
    );
   }
export default FeaturedProduct
