import './SlideOne.css';
import React, { Component } from "react";
import Slider from "react-slick";
import { FaCartShopping } from "react-icons/fa6";

export default class SliderOne extends Component {
  render() {
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
            slidesToShow: 3,
            slidesToScroll: 3,
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
    return (
      <div className="slider-one">
        <div className='container'>
      <div>
        <h2> Recomended For You </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <Slider {...settings}>
          <div>
            <div className="slider-one">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…bhXWVHxHe/tuY9JS1zroAAJTiryDZYnxdT17zDrNdCqf7pZ"  alt=" " />
                <h4>Homie</h4>
                <h6>$25.50</h6>
                <button><FaCartShopping />Add To Card </button>
            </div>
          </div>

          <div>
            <div className="slider-one">
                <img src="https:bookland.dexignzone.com/react/demo/static/media/book16.061b9fb8d8537506d31d.jpg"  alt=" " />
                <h4>Thunder Stunt</h4>
                <h6>$16.70</h6>
                <button><FaCartShopping />Add To Card </button>
            </div>  
          </div>

          <div>
            <div className="slider-one">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/book14.5b80c25bf2f173069442.jpg"  alt=" " />
                <h4>Heavy Lift</h4>
                <h6>$19.25</h6>
                <button><FaCartShopping />Add To Card </button>
            </div>  
          </div>

          <div>
              <div className="slider-one">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg"  alt=" " />
                <h4>Real Life</h4>
                <h6>$27.30</h6>
                <button><FaCartShopping />Add To Card </button>
              </div>  
          </div>

          <div>
              <div className="slider-one">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/book15.9514463d2ada5f2f17ce.jpg"  alt=" " />
                <h4>Terrible</h4>
                <h6>$24.89</h6>
                <button><FaCartShopping />Add To Card </button>
              </div>  
          </div>

          <div>
              <div className="slider-one">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/book5.a83827dd7e3bacbdb57e.jpg"  alt=" " />
                <h4>Take Tango</h4>
                <h6>$20.59</h6>
                <button><FaCartShopping />Add To Card </button>
              </div>  
          </div>

          <div>
          <div className="slider-one">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/book5.a83827dd7e3bacbdb57e.jpg"  alt=" " />
                <h4>Take Tango</h4>
                <h6>$20.59</h6>
                <button><FaCartShopping />Add To Card </button>
              </div> 
          </div>
       
        </Slider>
      </div>
      </div>
      </div>
    );
  }
}