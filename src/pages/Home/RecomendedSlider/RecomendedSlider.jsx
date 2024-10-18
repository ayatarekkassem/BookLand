import React from "react";
import Slider from "react-slick";
// import BookStoreContext from "./../../../context/BookStoreContext";
import './RecomendedSlider.css';
import { Link } from "react-router-dom";
import RecomendedSliderDatas from "../../../data/RecomendedSliderDatas";
// import RecomendedSliderDatas from "../../../data/RecomendedSliderData";

function RecomendedSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  //  const { addToCart } = useContext(BookStoreContext);
  return (
    <div className="recomended">
      <div className="container">
    {/* <div className="slider-container"> */}
  
     
      <div className="recomened-slider">
         <div className="container">
           <div className="recomended-header text-center">
             <h2> Recomended For You </h2>
             <p className="recomended-header-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
           </div>
         <div>

   {/* <Slider {...settings}>
        
           {RecomendedSliderData.map((recomended) =>(
            <div key={recomended.id}>
              <img src={recomended.img} alt={recomended.title} />
              <h3 className="recomended-title">{recomended.title}</h3>
              <p>{recomended.price}</p>
              {/* <button className="recomded-btn" onClick={() => addToCart(item, 1)}>Add To Cart</button> */}
              {/* <div className="recomended-button">
              <button onClick={() => addToCart(recomended, 1)}  className="recomended-btn" >Add To Cart</button>
              </div>

            </div>
          ))}
         
        
        </Slider>  */}

        <div className="slider-container">
      <Slider {...settings}>
     
           {RecomendedSliderDatas.map((rec) =>(
            //  <Link to={`/RecomendedSliderDatas/${rec.id}`}  key={rec.id}>>
              <div className="rcom">
     
               <Link
              to={`/RecSingleProduct/${rec.id}`} key={rec.id}
              >
                  
              <div>
                <div className="rec-items">
                  <img src={rec.image} alt={rec.title} />
                  <h3 className="recomended-title">{rec.title}</h3>
                  <p>${rec.price}</p>
                </div>
            </div>
           </Link>
           </div>
           ))}
        
      </Slider>
    </div>
      </div>
        </div>
      </div>
     
    {/* </div> */}
    </div>
</div>
  );
}

export default RecomendedSlider;
