import React, { Component } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import "./IntroSlider.css";

export default class Introslideritem extends Component {
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
    <div className="introSliderItems">
      <div>
       
        <Slider {...settings}>
          <div>
            <div className="introSliderItem">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY4A…MAAAAAAAAAAAAAAAAAOBl/5UsIYrfAg8IAAAAAElFTkSuQmCC" alt="slide 1" />
                <div className="introSliderIem-info">
                    <h5>Pushing Clouds</h5>
                    <h6>by Napoleon Hill</h6>
                    <div className="introslider-desc">
                        <p>$ 9.5</p>
                        <div className="stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
          </div>
          <div>
            <div className="introSliderItem">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/book9.024d97c841f84478f499.jpg" alt="slide 1" />
                <div className="introSliderIem-info">
                    <h5>Think and Grow Rich</h5>
                    <h6>by Napoleon Hill</h6>
                    <div className="introslider-desc">
                        <p>$ 10.4</p>
                        <div className="stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
          </div>
          <div>
          <div className="introSliderItem">
                <img src="	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY4A…MAAAAAAAAAAAAAAAAAOBl/5UsIYrfAg8IAAAAAElFTkSuQmCC" alt="slide 1" />
                <div className="introSliderIem-info">
                    <h5>Pushing Clouds</h5>
                    <h6>by Napoleon Hill</h6>
                    <div className="introslider-desc">
                        <p>$ 9.5</p>
                        <div className="stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
          </div>
          <div>
            <div className="introSliderItem">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/book9.024d97c841f84478f499.jpg" alt="slide 1" />
                <div className="introSliderIem-info">
                    <h5>Think and Grow Rich</h5>
                    <h6>by Napoleon Hill</h6>
                    <div className="introslider-desc">
                        <p>$ 10.4</p>
                        <div className="stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
          </div>
          <div>
          <div className="introSliderItem">
                <img src="	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY4A…MAAAAAAAAAAAAAAAAAOBl/5UsIYrfAg8IAAAAAElFTkSuQmCC" alt="slide 1" />
                <div className="introSliderIem-info">
                    <h5>Pushing Clouds</h5>
                    <h6>by Napoleon Hill</h6>
                    <div className="introslider-desc">
                        <p>$ 9.5</p>
                        <div className="stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}