import React from "react";
import { useEffect, useState } from 'react';

import "./shopGrid.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from "react-icons/fa6";
import { PiSidebarSimpleBold } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
// import { FaCartShopping } from "react-icons/fa6";
import"../Home/HomePage.css";
// import BookStoreContext from "../../context/BookStoreContext";
//  import { shopGridItems } from "../../data/shopGridItems";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { shopGriditemDataOne, shopGriditemDataThree, shopGriditemDataTwo } from "../../data/shopGriditemData";
import { FaBookOpen  } from "react-icons/fa6";
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const ShopGrid = () =>{
    // const { addToCart } = useContext(BookStoreContext);

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
        <section className="shopGrid">
        <Header />
        <Fixedicons />                
                <div className="books-upper">
                <div className="container">
                    <h2>Books</h2>
                        <div className="icons">
                            <FaBars />
                            <PiSidebarSimpleBold />
                            <AiOutlineBars />
                        </div>
                        {/* icons */}
                        <div className="Categories">
                            <Link>Categories</Link>
                            <DropdownButton  title="Newest" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">1 Days</Dropdown.Item>
                                <Dropdown.Item eventKey="1">2 Week</Dropdown.Item>
                                <Dropdown.Item eventKey="1">3 Weeks</Dropdown.Item>
                                <Dropdown.Item eventKey="1">1 Month</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    </div>
                    {/* Books Upper */}
                    <div className="shoplist-items">
                    <div className="container">
                     
                        {/* shopGrid-item */}
                        {/*  */}
                        <div className="shopGrid-items"> 
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                               
                                {shopGriditemDataOne.map((grid) =>(
                                <Link to={`/grids/${grid.id}`} key={grid.id}>
                                <div className="shopGrid-item" >
                                    <div className="shopGrid">
                                    <div className="shopGrid-item-img">
                                        
                                        <img src={grid.image} alt="shopGrid" />
                                    </div>
                                    <div className="shopGrid-item-info">
                                        <div className="shopGridItem-header">
                                            <div className="shopGridItemLiks">
                                                <Link>{grid.link}</Link>
                                                <h3>{grid.title}</h3>
                                                </div>
                                                <ul className="list-unstyled stars">
                                                    <li className="first">{grid.bookinfoOne}</li>
                                                    <li>{grid.bookInfoTwo}</li>
                                                </ul>
                                                <ul>
                                                    <li><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></li>

                                                </ul>
                                                <div className="overlay-price">
                                                    <span className="price-first">${grid.price} </span>
                                                    <span><del>${grid.del}</del></span>
                                                    {/* <button onClick={addToCart}><FaCartShopping />{grid.button}</button> */}

                                                </div>

                                            </div>
                                            
                                            
                                        {/* </div> */}
                                    </div>
                                
                                    </div>
                                </div>
                                </Link>
                                ))}
                                </div>
                                <div className="col-md-4 col-sm-6">
                                {shopGriditemDataTwo.map((grid) =>(
                                <Link to={`/grids/${grid.id}`} key={grid.id}>

                            <div className="shopGrid-item" >
                                <div className="shopGrid">
                                <div className="shopGrid-item-img">
                                    
                                    <img src={grid.image} alt="shopGrid" />
                                </div>
                                <div className="shopGrid-item-info">
                                    <div className="shopGridItem-header">
                                        <div className="shopGridItemLiks">
                                            <Link>{grid.link}</Link>
                                            <h3>{grid.title}</h3>
                                            </div>
                                            <ul className="list-unstyled stars">
                                                <li className="first">{grid.bookinfoOne}</li>
                                                <li>{grid.bookInfoTwo}</li>
                                                </ul>
                                            <ul>
                                                <li><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></li>

                                            </ul>
                                            <div className="overlay-price">
                                                <span className="price-first">${grid.price} </span>
                                                <span><del>${grid.del}</del></span>
                                                 {/* <button onClick={addToCart}><FaCartShopping />{grid.button}</button> */}

                                            </div>

                                        </div>
                                           
                                        
                                    {/* </div> */}
                                </div>
                            
                                </div>
                            </div>
                            </Link>
                                ))}
                                </div>
                                <div className="col-md-4 col-sm-6">
                                {shopGriditemDataThree.map((grid) =>(
                                      <Link to={`/grids/${grid.id}`} key={grid.id}>
                            <div className="shopGrid-item" >
                                <div className="shopGrid">
                                <div className="shopGrid-item-img">
                                    
                                    <img src={grid.image} alt="shopGrid" />
                                </div>
                                <div className="shopGrid-item-info">
                                    <div className="shopGridItem-header">
                                        <div className="shopGridItemLiks">
                                            <Link>{grid.link}</Link>
                                            <h3>{grid.title}</h3>
                                            </div>
                                            <ul className="list-unstyled stars">
                                                <li className="first">{grid.bookinfoOne}</li>
                                                <li>{grid.bookInfoTwo}</li>
                                                </ul>
                                            <ul>
                                                <li><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></li>

                                            </ul>
                                            <div className="overlay-price">
                                                <span className="price-first">${grid.price} </span>
                                                <span><del>${grid.del}</del></span>
                                                 {/* <button onClick={addToCart}><FaCartShopping />{grid.button}</button> */}

                                            </div>

                                        </div>
                                           
                                        
                                    {/* </div> */}
                                </div>
                            
                                </div>
                            </div>
                            </Link>
                                ))}
                                </div>
                            </div>
                        </div>
                        {/*  */}
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
        </section>
   }
   </div>
       );
   }
export default ShopGrid