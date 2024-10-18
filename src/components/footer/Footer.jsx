import './Footer.css';
import { FaFacebookF , FaYoutube , FaLinkedinIn ,  FaInstagram , FaLocationDot , FaPhoneFlip , FaEnvelope ,FaAngleRight , FaHeart  } from "react-icons/fa6";
import Logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer>
    <div className= "container">
      <div className="footer-items">
        <div className="footer-item">
          <img src={Logo} alt="logo" />
          <p>Bookland is a Book Store <br />Ecommerce Website Template by <br />DexignZone lorem ipsum dolor sit</p>
          <div className="footer-icons">
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      <div className='row'>
      <div className='col-md-3 col-sm-6'>
        <div className="footer-item">
          <h5>Our Links</h5>
          <ul className="list-unstyled">
            <li><FaAngleRight />About us</li>
            <li>< FaAngleRight/>Contact us</li>
            <li><FaAngleRight />Privacy Policy</li>
            <li><FaAngleRight />Pricing Table</li>
            <li><FaAngleRight />FAQ</li>
          </ul>
        </div>
        {/*  */}
        </div>
      <div className='col-md-3 col-sm-6'>
        <div className="footer-item">
          <h5>Bookland ?</h5>
          <ul className="list-unstyled">
            <li><FaAngleRight />Bookland</li>
            <li>< FaAngleRight/>Services</li>
            <li><FaAngleRight />Book Details</li>
            <li><FaAngleRight />Blog Details</li>
            <li><FaAngleRight />Shop</li>
          </ul>
        </div>
        {/*  */}
        </div>



       <div className='col-md-3 col-sm-6'>
       <div className="footer-item">
          <h5>Resources</h5>
          <ul className="list-unstyled">
            <li><FaAngleRight />Download</li>
            <li><FaAngleRight />Help Center</li>
            <li><FaAngleRight />Shop Cart</li>
            <li><FaAngleRight />Shop Cart</li>
            <li><FaAngleRight />Login</li>
            <li><FaAngleRight />Partner</li>
          </ul>
        </div>
        {/*  */}
       </div>

        {/*  */}
       

      
         

            
             <div className='col-md-3 col-sm-6'>
          <div className="footer-item">
          <h5>Get in Touch With Us</h5>
          <ul className="list-unstyled">
            <li><FaLocationDot />832 Thompson Drive, San Fransisco CA 94107,US</li>
            <li><FaPhoneFlip />+123 345123 556<br />
              +123 345123 556</li>
              <li><FaEnvelope />support@bookland.id<br />
info@bookland.id</li>
          </ul>
        </div>
        </div>

        </div>

      </div>
    </div>
    {/* Copyright */}
    <div className='copyright'>
      <div className="container">
        <div className="copyright-items">
        {/* <div classname="copyright-desc">
        <div className="copyright-para">
          <p>Bookland Book Store Ecommerce Website - © 2023 All Rights Reserved</p>
          </div>
          <div className='copyright-item'>
            <p>Made with  by </p>
            <FaHeart />
            <Link> DexignZone</Link>
          </div>
        </div> */}

        <div className="copyright-desc-info">
          <p>Bookland Book Store Ecommerce Website - © 2023 All Rights Reserved</p>
          <div className="copyright-desc-info-item">
            <p>Made with  by 
            <FaHeart />
            <Link> DexignZone</Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>


   
   
    {/* row */}
  </footer>    
  );
};

export default Footer;