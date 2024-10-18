import "./Contactus.css";
import"../Services/Services.css";

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaLocationDot , FaRegEnvelope } from "react-icons/fa6";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { FaBookOpen  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    //  Form Submit Handler
    const formSubmitHandler = (event) => {
      event.preventDefault();
  
      if (name.trim() === "") {
        return toast.error("Full Name is required");
      }


      if (email.trim() === "") {
        return toast.error("Email is required");
      }
  
 
  
      if (phone.trim() === "") {
        return toast.error("Phone is required");
      }

    }; 
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
        <div className="contact">
        <Header />
                <div className="contact-intro">
                <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Contact</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                                Contact
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        
                        </div>
                    </div>
                   
            </div>
                </div>
                {/* contact intro */}
             
    
        
        <section className="contact-section">
                   
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="contact-info">
                                    <div className="contact-intro-overlay">
                                        <h3>Get In Touch</h3>
                                        <p>If you are interested in working with us, please get in touch.</p>
                                        <div className="contact-items">
                                            <div className="contact-item">
                                                <FaLocationDot />
                                                <div className="contact-item-info">
                                                    <h4>Our Address</h4>
                                                    <p>1247/Plot No. 39, 15th Phase, Huab Colony, Kukatpally, Hyderabad</p>
                                                </div>
                                            </div>
                                            {/* contact-item */}
                                            <div className="contact-item">
                                                <FaRegEnvelope />
                                                <div className="contact-item-info">
                                                    <h4>Our Email</h4>
                                                    <p>info@gmail<br />services@gmail.com</p>
                                                </div>
                                            </div>
                                            {/* contact-item */}
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="contact-form">
                                    <h6>CONTACT US</h6>
                                    <h3>Get In Touch With Us</h3>
                              
                                    <ToastContainer />
                                <form onSubmit={formSubmitHandler} className="form">
                              
                                          <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Full Name"
                              />
                              <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                              />
                               <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="number"
                                placeholder="phone"
                              />
                            <textarea placeholder="Message" required></textarea>
                              <button className="form-btn" type="submit">
                                Contact
                              </button>
                            </form>
                                    </div>
                                    {/* contact fprm */}
                                </div> 
                            </div>
                        </div>
                   
                </section>
        <Footer />
        </div>
}
</div>
  
    )
}
export default ContactUs