import React, { useContext } from "react";
import { useEffect, useState } from 'react';
import "./ShopList.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from "react-icons/fa6";
import { PiSidebarSimpleBold } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
//  import { FaRegHeart } from "react-icons/fa6";
import"../Home/HomePage.css";
import BookStoreContext from "../../context/BookStoreContext";
import { ShopListData } from "../../data/ShopListData";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const ShopList = () =>{
      // Loading
      const[loading , setLoading] = useState(false)

      useEffect(() =>{
        setLoading(true)
        setTimeout(()=>
           setLoading(false),3000)
         
       }, [])
    const { addToCart } = useContext(BookStoreContext);
    return(
        <div>

        {
         loading ?
         <div className="loading">
         <FaBookOpen />
         </div>
         :
        <section className="shoplist">
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
                             {ShopListData.map((List) =>(
                            <Link to={`/products/${List.id}`}  key={List.id}>
                                <div className="ShopList">
                                <div className="shoplist-item-img">
                                    
                                    <img src={List.image} alt="shopList" />
                                </div>
                                <div className="shoplist-item-info">
                                    <div className="shopListItem-header">
                                        <div className="shopListItemLiks">
                                            <Link>{List.link}</Link>
                                            <h3>{List.title}</h3>
                                            </div>
                                            <div className="price">
                                                <span className="price-first">${List.price} </span>
                                                <span><del>${List.del}</del></span>
                                            </div>
                                        </div>
                                        <div className="shopList-item-para">
                                            <p>{List.para}</p>
                                            <ul className="list-unstyled stars">
                                                <li className="first">{List.listOne}</li>
                                                <li><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></li>
                                                <li>{List.listTwo}</li>
                                            </ul>
                                            </div>
                                            <ul className="list-unstyled links">
                                                <li><Link>{List.discountOne}</Link></li>
                                                <li><Link>{List.discountTwo}</Link></li>
                                            </ul>
                                        
                                        <div className="shoplist-item-cart-li">
                                            {/* <ul className="list-unstyled">
                                                <li><span>{List.shopListItemOneUp}</span>{List.shopListItemOnedown}</li>
                                                <li><span>{List.shopListItemTwoUp}</span>{List.shopListItemTwodown}</li>
                                                <li><span>{List.shopListItemThreeUp}</span>{List.shopListItemThreedown}</li>
                                            </ul> */}
                                            <button onClick={() => addToCart(List, 1)}><FaCartShopping />{List.btn}</button>
                                        
                                        </div>
                                    {/* </div> */}
                                </div>
                            
                                </div>
                            </Link>
                        ))}
                        {/* shoplist-item */}
                        </div>
                        
      
                    </div>
                                            {/* Newsletter */}
          <div className='newsletter'>
            <div className="container">
            <div className="overlay">
            <div className="newsletter-items">
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
          
            </div>
        <Footer />

        <ScrollToTop />
        </section>
   }
   </div>
       );
   }

export default ShopList