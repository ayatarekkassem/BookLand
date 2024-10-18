import './HomePage.css';
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { FaCalendarDays } from "react-icons/fa6";
import {FaUsers , FaBook ,FaAppStoreIos , FaLeaf} from "react-icons/fa6";
import { ImPower } from "react-icons/im";
import { IoShieldCheckmark } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import Footer from '../../components/footer/Footer';
import TestimonialsSlider from './TestimonialsSlider/TestimonialsSlider';
//  import SliderOne from './SliderOne/SliderOne';
import Brands from './Brands/Brands';
import IntroSlider from './IntroSlider/IntroSlider';

import Fixedicons from '../../components/FixedIcons/FixedIcons';
// import RecomendedSlider from './RecomendedSlider/RecomendedSlider';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
 //import SliderIntro from './IntroSlider/SliderIntro';
 import { FaBookOpen  } from "react-icons/fa6";
 import { useEffect, useState } from 'react';
import RecomendedSlider from './RecomendedSlider/RecomendedSlider';
 
const HomePage = () => {
   // Loading
   const[loading , setLoading] = useState(false)

   useEffect(() =>{
     setLoading(true)
     setTimeout(()=>
        setLoading(false),3000)
      
    }, [])
  return (
    <div>

    {
     loading ?
     <div className="loading">
     <FaBookOpen />
     </div>
     :
    <div className="home">

        <Header />
        {/* <MainHomeSlider /> */}
        <Fixedicons />
        <IntroSlider />
        <RecomendedSlider />

     {/* Info Items */}
     <div className="info-items">
          <div className="container">
            <div className='row'>
              <div className='col-md-3 col-sm-6'>
                <div className='info-item'>
                < ImPower />
                <h5>Quick Delivery</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='info-item'>
                < IoShieldCheckmark />
                  <h5>Secure Payment</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='info-item'>
                  <AiFillLike />
                  <h5>Best Quality</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='info-item'>
                  <FaStar />
                  <h5>Return Guarantee</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Sliders */}

        <FeaturedProduct />

        <Brands />
        
        <TestimonialsSlider />
     
        {/* Latestnews */}
         <div className="Latestnews">
          <div className="Latestnews-title text-center">
          <h3>Latest News</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
          <div className="recomended-items">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="recomended-item">
                    <Link><img src="	https:bookland.dexignzone.com/react/demo/static/media/blog4.6978fe75eaa95d319065.jpg" alt="Benfites of reading" /></Link>
                    <div className="recomeded-item info">
                      <h6><Link>Benefits of reading: Smart, Diligent, Happy, Intelligent</Link></h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                      <p className="calander"><FaCalendarDays />24 March, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                <div className="recomended-item">
                    <Link><img src="	https:bookland.dexignzone.com/react/demo/static/media/blog3.efa9753515a19b88e2d8.jpg" alt=""  /></Link>
                    <div className="recomeded-item info">
                      <h6><Link>10 Things you must know to improve your reading skills</Link></h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                      <p className="calander"><FaCalendarDays />24 March, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="recomended-item">
                    <Link><img src="	https:bookland.dexignzone.com/react/demo/static/media/blog2.8431476ce3d4ecdc08ef.jpg" alt=""  /></Link>
                    <div className="recomeded-item info">
                      <h6><Link>We Must know why reading is important for children?</Link></h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                      <p className="calander"><FaCalendarDays />24 March, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                <Link><img src="	https:bookland.dexignzone.com/react/demo/static/media/blog1.195ba600da0212ef3461.jpg" alt=""  /></Link>
                    <div className="recomeded-item info">
                      <h6><Link>Benefits of reading: Smart, Diligent, Happy, Intelligent</Link></h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                      <p className="calander"><FaCalendarDays />24 March, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* customers */}
          <div className='customers'>
            <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-6'>
                <div className='customer-items'>
                  <FaUsers />
                  <h4>125,663</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
              <div className='customer-items'>
                  <FaBook />
                  <h4>50,672</h4>
                  <p>Book Collections</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
              <div className='customer-items'>
                  <FaAppStoreIos />
                  <h4>1,562</h4>
                  <p>Our Stors</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
              <div className='customer-items'>
                  <FaLeaf />
                  <h4>1,562</h4>
                  <p>Our Stores</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className='newsletter'>
            <div className="overlay">
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-sm-12'>
                  <h4>Subscribe our newsletter for newest books updates</h4>
                </div>
                <div className='col-md-4 col-sm-12'>
                  <input type='email' placeholder='Your Email Address' />
                  <button className='btn'>SUBSCRIBE</button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <Footer />
    
         <ScrollToTop />
       </div>
}
</div>
);
};

export default HomePage;