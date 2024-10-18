import React from "react";
import { useEffect, useState } from 'react';
import "../PrivacyPolicy/PrivacyPolicy.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import "../Services/Services.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaCheck , FaArrowRight} from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const HelpDesk = () =>{
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
       <section className="privacypolicy">
        <Header />
        <Fixedicons />
            {/* Head */}
            <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Help Desk</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">PAGES</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Help Desk
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        
                        </div>
                    </div>
                   
            </div>
            <div className="privacypolicy-items">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-12">
                            <div className="privacypolicy-item">
                                <h4>HelpDesk</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <span>Contact Us</span> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h4>Emergency Service</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h4>Tips</h4>
                                <ul className="list-unstyled">
                                    <li><FaCheck />The DexignLab Privacy Policy was updated on 25 June 2018. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
                                    <li><FaCheck />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                    <li><FaCheck />Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                                    <li><FaCheck />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                    <li><FaCheck />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                </ul>
                                <h4>Our Help</h4>
                                <ul className="list-unstyled">
                                    <li><FaCheck />The DexignLab Privacy Policy was updated on 25 June 2018. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
                                    <li><FaCheck />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                    <li><FaCheck />Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                                    <li><FaCheck />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                    <li><FaCheck />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                </ul>

                            </div> 
                        </div>
                        <div className="col-lg-4 col-sm-5 cl-sm-12">
                            <div className="privacyPolicy-links">
                                <ul className="list-unstyled privacyPolicy-links-items">
                                <li><Link>About Us<FaArrowRight classNamearrow /></Link></li>
                                    <li><Link>Privacy Policy<FaArrowRight classNamearrow /></Link></li>
                                    <li><Link>Help Desk<FaArrowRight classNamearrow /></Link></li>
                                    <li><Link>Contact Us<FaArrowRight classNamearrow /></Link></li>
                                </ul>
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
    )
}
export default HelpDesk;