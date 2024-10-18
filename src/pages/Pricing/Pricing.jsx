import React from "react";
import { useEffect, useState } from 'react';
import "./Pricing.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import '../Services/Services.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaCheck  } from "react-icons/fa6";
import {FaUsers , FaBook ,FaAppStoreIos , FaLeaf} from "react-icons/fa6";
import"../Home/HomePage.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const Pricing =() =>{
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
        <section className="pricing">
            <Header/>
              <Fixedicons />
            <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Pricing Table</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">PAGES</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                            PRICING TABLE
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        
                        </div>
                    </div>
                   
            </div>
            {/* Plans */}
            <div className="plans">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="plan-item">
                                <h3>Basic Plan</h3>
                                <h2>$99 <small>/Month</small></h2>
                                <p>Aliquam dui lacus, lobortis quis sapien non.</p>
                                <ul className="list-unstyled">
                                    <li><FaCheck />Graphic Design</li>
                                    <li><FaCheck />Web Design</li>
                                    <li><FaCheck />UI/UX</li>
                                    <li><FaCheck />HTML/CSS</li>
                                    <li><FaCheck />SEO Marketing</li>
                                    <li><FaCheck />Business Analysis</li>
                                </ul>
                                <div className="plan-item-button">
                                    <button>Start Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="plan-item">
                                <h3>Standart Plan</h3>
                                <h2>$149 <small>/Month</small></h2>
                                <p>Aliquam dui lacus, lobortis quis sapien non.</p>
                                <ul className="list-unstyled">
                                    <li><FaCheck />Graphic Design</li>
                                    <li><FaCheck />Web Design</li>
                                    <li><FaCheck />UI/UX</li>
                                    <li><FaCheck />HTML/CSS</li>
                                    <li><FaCheck />SEO Marketing</li>
                                    <li><FaCheck />Business Analysis</li>
                                </ul>
                                <div className="plan-item-button">
                                    <button>Start Now</button>
                                </div>
                                                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                        <div className="plan-item">
                                <h3>Premium Plan</h3>
                                <h2>$199 <small>/Month</small></h2>
                                <p>Aliquam dui lacus, lobortis quis sapien non.</p>
                                <ul className="list-unstyled">
                                    <li><FaCheck />Graphic Design</li>
                                    <li><FaCheck />Web Design</li>
                                    <li><FaCheck />UI/UX</li>
                                    <li><FaCheck />HTML/CSS</li>
                                    <li><FaCheck />SEO Marketing</li>
                                    <li><FaCheck />Business Analysis</li>
                                </ul>
                                <div className="plan-item-button">
                                    <button>Start Now</button>
                                </div>
                            </div>
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
export default Pricing