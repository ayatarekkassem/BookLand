import React from "react";
import { useEffect, useState } from 'react';
import './Services.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaArrowRight } from "react-icons/fa6";
import "../Home/HomePage.css";
import {FaUsers , FaBook ,FaAppStoreIos , FaLeaf} from "react-icons/fa6";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import Fixedicons from '../../components/FixedIcons/FixedIcons';
const Services = () =>{
    // Loading
    const[loading , setLoading] = useState(false)

    useEffect(() =>{
      setLoading(true)
      setTimeout(()=>
         setLoading(false),3000)
       
     }, [])
    return(
      <div>

      {
       loading ?
       <div className="loading">
       <FaBookOpen />
       </div>
       :
        <section className="services">
            <Header />
            <Fixedicons  />
            <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Services</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">PAGES</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                                SERVICES
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        
                        </div>
                    </div>
                   
            </div>
            <div className="support">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="support-item">
                                <h4>24*7 Support</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                                <img src="	https:bookland.dexignzone.com/react/demo/static/media/service5.6748b77fe527613f06ff.jpg" alt="support" />
                                <button>Read More <FaArrowRight /></button>
                            </div>
                            {/* support item */}
                        
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="support-item">
                                <h4>Sitting Arrangement</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                                <img src="	https:bookland.dexignzone.com/react/demo/static/media/service2.fb8f389ca6f6191bc939.jpg" alt="support" />
                                <button>Read More <FaArrowRight /></button>
                            </div>
                            {/* support item */}
                         
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="support-item">
                                <h4>Proper Management</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                                <img src="	https:bookland.dexignzone.com/react/demo/static/media/service3.7ac98c1bc7939d6dd34e.jpg" alt="support" />
                                <button>Read More <FaArrowRight /></button>
                            </div>
                            {/* support item */}
                          
                        </div>
                        <div className="col-md-4 col-sm-6">
                        <div className="support-item">
                                <h4>Online Registration</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                                <img src="https:bookland.dexignzone.com/react/demo/static/media/service4.76c3c3a7e6196a2eed8a.jpg" alt="support" />
                                <button>Read More <FaArrowRight /></button>
                            </div>
                            {/* support item */}
                        </div>
                        <div className="col-md-4 col-sm-6">
                        <div className="support-item">
                                <h4>Download PDF</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                                <img src="	https:bookland.dexignzone.com/react/demo/static/media/service1.61a66f4d292f92e57f53.jpg" alt="support" />
                                <button>Read More <FaArrowRight /></button>
                            </div>
                            {/* support item */}
                        </div>
                      <div className="col-md-4 col-sm-6">
                      <div className="support-item">
                                <h4>Flexible Timing</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                                <img src="https:bookland.dexignzone.com/react/demo/static/media/service6.dff5f0210d454b6cfb44.jpg" alt="support" />
                                <button>Read More <FaArrowRight /></button>
                            </div>
                            {/* support item */}
                      </div>
                    </div>
                </div>
            </div>

                   {/* customers */}
          <section className='customers'>
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
          </section>
          {/* Newsletter */}
          <section className='newsletter'>
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
          </section>
            <Footer />
            <ScrollToTop />
        </section>
     
          }
          </div>
              );
          }
export default Services;