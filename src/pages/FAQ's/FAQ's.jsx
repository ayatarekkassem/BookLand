import React from "react";
import "./FAQ's.css";
import "../Services/Services.css";
import "../Home/HomePage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {FaUsers , FaBook ,FaAppStoreIos , FaLeaf} from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const FAQ = () =>{
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
       <section className="faq">
        <Header />
             
        <Fixedicons />
        <div className="services-header">
        <div className="overlay">
            <div className="container">
            <h1> FAQ's</h1>
            <div className="breadcrumb-header">
            <Breadcrumb>
                <Breadcrumb.Item href="#">PAGES</Breadcrumb.Item>
                <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                FAQ's
                </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            </div>
        </div>
        </div>
        {/* head */}
        <div className=" bookland">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                            <div className="bookland-item">
                                <h3>What Is Bookland?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Vestibulum nibh risus, in neque eleifen ?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Donec maximus, sapien id auctor ?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Donec maximus, sapien id auctor ?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                            </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="bookland-img">
                            <img src="	https:bookland.dexignzone.com/react/demo/static/media/pic2.21dc5ce7837d4b1813b8.jpg" alt="Bookland img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* bookland */}
        <div className=" bookland">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="bookland-img">
                            <img src="	https:bookland.dexignzone.com/react/demo/static/media/pic2.21dc5ce7837d4b1813b8.jpg" alt="Bookland img" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                            <div className="bookland-item">
                                <h3>Managing Books</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Vestibulum nibh risus, in neque eleifen ?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Donec maximus, sapien id auctor ?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>Donec maximus, sapien id auctor ?</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                              </Accordion>
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
          {/* <div className='newsletter'>
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
          </div> */}
          <Footer />
          <ScrollToTop />
        </section>
}
</div>
    )
}
export default FAQ