import React ,{useState , useEffect}from "react";
import './About.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaCheck } from "react-icons/fa6";
import { FaBookOpen , FaStar ,FaStore } from "react-icons/fa6";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Header from "../../components/Header/Header";
// import  SquareLoader from 'react-spinners/SquareLoader';
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const About = () => {
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
      <div>
     <Header />
      <Fixedicons />
      <div className="about">
      
        {/* About Intro */}
        <div className="about-intro">
          <div className="overlay">
            <div className="container">
            <h2>About Us</h2>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
              About Us
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          </div>
        </div>
        {/* Choice  */}
        <div className="choice ">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="choice-item first">
                  <img src="https:bookland.dexignzone.com/react/demo/static/media/about1.0a2c2d8d8419b0bcd559.jpg" alt="choice 1" />
                  <div className="choice-item-info">
                    <h2>50 <small>+</small></h2>
                    <h6>Years of Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="choice-item second">
                  <img src="	https:bookland.dexignzone.com/react/demo/static/media/about2.457a377599205bb369a7.jpg" alt="choice 2" />
                  <ul className="list-unstyled">
                    <li><FaCheck />Comics & Graphics</li>
                    <li><FaCheck />Biography</li>
                    <li><FaCheck />Literary Collections</li>
                    <li><FaCheck />Children Fiction</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <h3>Bookland Is Best Choice For Learners</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted</p>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mission">
          <div className="container">
            <div className="mission-heading">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
            {/* mission heading */}
            <div className="mission-items">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="mission-item">
                    <FaBookOpen />
                    <h4>Best Bookstore</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Learn More</button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="mission-item">
                    <FaStar />
                    <h4>Trusted Seller</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Learn More</button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                <div className="mission-item">
                  <FaStore />
                  <h4>Expand Store</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button>Learn More</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
      </div>
}
      </div>
    )
}
export default About;