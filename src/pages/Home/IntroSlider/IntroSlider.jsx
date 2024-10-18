import React, {   useContext } from "react";
import Slider from "react-slick";
import "./IntroSlider.css";
// import { IntroSliders } from "../../../data/introSliders";
import BookStoreContext from "../../../context/BookStoreContext";
//  import "./IntroSliderItem";
import { Link } from "react-router-dom";
import { IntroSliderDatas } from "../../../data/IntroSliderDatas";

//  export default class IntroSlider extends Component {
const IntroSlider = () =>{
   
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { addToCart } = useContext(BookStoreContext);
    return (
        <div className="introSlider">
            <div className="overlay">
            <div className="container">
                <div>
                    
                    <Slider {...settings}>
                 
                    {/* {IntroSliderDatas.map((slide) =>(
                         <Link  to={`/SingleInnerPage/${slide.id}`} key={slide.id}> */}

{IntroSliderDatas.map((slide) =>(
            
     
            
                     
                    
                             <div  className="slide-item">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                    <div className="slide-info">
                                    <h6>{slide.subTitle}</h6>
                                    <h1>{slide.title}</h1>
                                    <ul className="list-unstyled">
                                        <li>{slide.listOne}</li>
                                        <li>{slide.listTwo}</li>
                                    </ul>
                                    <p>{slide.para}</p>
                                    <ul className="list-unstyled">
                                        <li className="price">${slide.price}</li>
                                        <li className="del"><del>${slide.del}</del></li>
                                        <li className="off">{slide.off}% Off</li>
                                    </ul>
                                    <div className="buttons">
                                    <button className="buy" onClick={() => addToCart(slide, 1)}>{slide.btnBuy}</button>
                                    <button className="details">   
                                          <Link
              to={`/SingleInnerPage/${slide.id}`} key={slide.id}>
                                        {slide.btnDetails}
                                        </Link>
                
                  
                                    </button>
                                    </div>    
                                    </div>
                                    </div> 
                                    <div className="col-md-6 col-sm-12">
                                        <img src={slide.image} alt={slide.title} />    
                                    </div> 
                                </div>
                               
                            </div> 
                     
                         ))}
                   
                    </Slider>
                </div>
      </div>
        </div>
      </div>
    );
                        
  }
  export default IntroSlider