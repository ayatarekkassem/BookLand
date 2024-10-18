import React from "react";
import { useEffect, useState } from 'react';
import "./Registration.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const Registration =() =>{

    const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //  Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (username.trim() === "") {
      return toast.error("Username is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    console.log({ email, password, username });
    setEmail("");
    setPassword("");
    setUsername("");
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
        <section className="registration">
          <Header />
 
          <Fixedicons  />
            <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Registration</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">PAGES</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Registration
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        
                        </div>
                    </div>
                   
            </div>
            {/* Head */}
            <div className="registration-items">
                <div className="container">
                    <div className="registration-item">
                    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Create new account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
      <div className="form-footer">
        Already have an account ?{" "}
        <Link to="/login" className="forms-link">
          Login
        </Link>
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
export default Registration