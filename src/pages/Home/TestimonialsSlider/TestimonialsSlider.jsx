import React, { Component } from "react";
import Slider from "react-slick";
import "../HomePage.css";
import "./TestimonialsSlider.css";
import { FaStar } from "react-icons/fa6";



  export default class TestimonialsSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
   <div className="testimonials">
    <div className="container">
        <div className="testim-header text-center">
            <h2>What Customer’s Said</h2>
            <p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
						</p>
            </div>
       
{/* Testim slider */}
<div className="testim-items">

<div>
        
        <Slider {...settings}>
          <div>
            <div className="tesim-item">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <img className="testim-item-img" src="https:bookland.dexignzone.com/xhtml/images/testimonial/testimonial5.jpg" alt="" />
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="tistim-info">
                    <p>
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
									  </p>
                      <div className="testim-desc">
                        <h5>Johnson Simanungkalit</h5>
                        <h6>faculty of Economics 2023</h6>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span>4.8</span>
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* testim item */}
          </div>
         

          <div>
            <div className="tesim-item">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <img className="testim-item-img" src="https:bookland.dexignzone.com/xhtml/images/testimonial/testimonial6.jpg" alt="" />
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="tistim-info">
                   
                      <div className="testim-desc">
                       <p>
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
									  </p>
                        <h5>Johnson Simanungkalit</h5>
                        <h6>faculty of Economics 2023</h6>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            {/* testim item */}
          </div>
        </Slider>
      </div>
      {/* testim slider */}
    </div>
    </div>
    </div>
  );
};
};



