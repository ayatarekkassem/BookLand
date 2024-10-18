
import React, { Component } from "react";
import Slider from "react-slick";
import './Brands.css';


export default class Responsive extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div classname="brand">
            <div className="container">
        <div>
          
          <Slider {...settings}>
            <div>
             <div className="feature-slider-item">
              <div className="feature-slider-item-img">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/client3.8f4a8ebd08dd86485e77d77544822b15.svg" alt="feature " />
                </div>
              </div>
              {/* slide */}
            </div>

            <div>
            <div className="feature-slider-item">
              <div className="feature-slider-item-img">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/client4.40eb4261d6b58bad9e3886d2a57216b9.svg" alt="Brand" />
              </div>
            </div>
            {/*  */}
            </div>

            <div>
              <div className="feature-slider-item">
                <div className="feature-slider-item-img">
                    <img src="https:bookland.dexignzone.com/react/demo/static/media/client5.ead8c6792c0a6696a1b73eb3c813e029.svg" alt="Brand" />
                </div>
              </div>
              {/*  */}
            </div>
            
            <div>
            <div className="feature-slider-item">
              <div className="feature-slider-item-img">
                <img src="https:bookland.dexignzone.com/react/demo/static/media/client2.d59dd747034709f043022c954e61a8d1.svg" alt="Brand" />
              </div>
            </div>
            {/*  */}
            </div>

            <div>
            <div className="feature-slider-item">
              <div className="feature-slider-item-img">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/client1.d6c44cbf2f909a4118959ef1ee1ed5c0.svg" alt="Brand " />
              </div>
            </div>
            {/*  */}
            </div>
            
          </Slider>
        </div>
        </div>
        </div>
      );
    }
  }