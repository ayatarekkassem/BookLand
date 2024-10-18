import {useContext } from "react";
import BookStoreContext from "../../context/BookStoreContext";
import React, { Component } from "react";
import Slider from "react-slick";
import {render} from "react"
import { Link } from "react-router-dom";
 import Modal from "../modal/Modal";
 import "./book-slider.css";
 import Rating from "./Rating";


export default class BookSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
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
      <div className="mainSlider">
        <div className="container">
       
        <div>
          
          <Slider {...settings}>
            <div>
              <div className="mainSlider-items">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                <div className="mainSlider-item">
                    <h6>BEST MANAGEMENT</h6>
                    <h1>Think and Grow Rich</h1>
                    <ul className="list-unstyled">
                      <li><Link>Napoleon Hill</Link></li>
                      <li><Link>Business & Strategy</Link></li>
                    </ul>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                    <div className="mainSlider-price">
                      <span>$10.4</span>
                      <del>$15.25</del>
                      <span>33% OFF</span>
                    </div>
                    <div className="mainSlider-buttons">
                      <Link>Buy Now</Link>
                      <Link>See Details</Link>
                    </div>
                  
                  </div>

                </div>
                <div className="col-md-6 col-sm-12">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/banner-media2.2097107a6e8c5f803b5b.png" alt="slider" />

                </div>
                {/* ----- */}
             
                </div>
              </div>
            </div>
          {/* mainSlider item */}


          <div>
              <div className="mainSlider-items">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                <div className="mainSlider-item">
                    <h6>BEST MANAGEMENT</h6>
                    <h1>Think and Grow Rich</h1>
                    <ul className="list-unstyled">
                      <li><Link>Napoleon Hill</Link></li>
                      <li><Link>Business & Strategy</Link></li>
                    </ul>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                    <div className="mainSlider-price">
                      <span>$10.4</span>
                      <del>$15.25</del>
                      <span>33% OFF</span>
                    </div>
                    <div className="mainSlider-buttons">
                      <Link>Buy Now</Link>
                      <Link>See Details</Link>
                    </div>
                  
                  </div>

                </div>
                <div className="col-md-6 col-sm-12">
                <img src="	https:bookland.dexignzone.com/react/demo/static/media/banner-media2.2097107a6e8c5f803b5b.png" alt="slider" />

                </div>
                {/* ----- */}
             
                </div>
              </div>
            </div>
          {/* mainSlider item */}

          
          </Slider>
        </div>
      
        </div>
      </div>
    );
  }
}