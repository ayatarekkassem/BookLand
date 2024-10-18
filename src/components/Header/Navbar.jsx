import React from "react";
// import { useState } from "react";
 import "./header.css";
import Logo from "../../images/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FaFacebookF , FaYoutube , FaLinkedinIn ,  FaInstagram  } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const MainNavbar = () =>{

  // const [fixednavbar, setfixednavbar] = useState(false);

  // const fixedMainNavbar = () => {
  //    console.log(window.scrollY);

  //   if(window.scrollY >= 80){
  //     setfixednavbar(true)
  //   }else{
  //     setfixednavbar(false)
  //   }
  // }
  // window.addEventListener("scroll" , fixedMainNavbar)

    return(
      // <div className={fixednavbar ? 'mainnavbar active' : 'mainnavbar'}>
        <div className="mainNavbar">
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
     
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="nav-search">
          <input type="search" placeholder="Search Books Here" />
          <FaSearch />
        </div>
          <Nav className="me-auto">
            <Link  to="/" className="link">Home</Link>
            <Link to="/about"  className="link">About Us</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item><Link  to="/Services">Services</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/FAQ">FAQ</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/HelpDesk">Help Desk</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/Pricing">Pricing</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/PrivacyPolicy">Privacy Policy</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item><Link  to="/ShopGrid">Shop Grid</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/ShopList">Shop List</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/Cart">Cart</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/Checkout">Checkout</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/Login">Login</Link></NavDropdown.Item>
              <NavDropdown.Item><Link  to="/Registration">Registration</Link></NavDropdown.Item>
              {/* <NavDropdown.Item to="/Services">Services</NavDropdown.Item> */}
            </NavDropdown>
             <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item><Link  to="/BlogGrid">Blog Grid</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/BlogDetails"> Blog Details</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/ContactUs"  className="link">Contact Us</Link>
          </Nav>
       
          <button><Link className="get" to="/ContactUs">Get In Touch</Link></button>
          <ul className="header-icons list-unstyled">
          <li><Link><FaFacebookF /></Link></li>
          <li><Link><FaYoutube /></Link></li>
          <li><Link><FaLinkedinIn /></Link></li>
          <li><Link><FaInstagram /></Link></li>
        </ul>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
    </div>
    // </div>
  );
}



export default MainNavbar