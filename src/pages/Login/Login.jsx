import React from "react";
import './Login.css';
import "../Registration/Registration.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from 'react-bootstrap/Container';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const Login =() =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

  

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    console.log({ email, password });
    setEmail("");
    setPassword("");
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
          <Fixedicons />
            <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Login</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">PAGES</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Login
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        
                        </div>
                    </div>
                   
                    </div>
                    {/* Head */}
            

       <div className="regist">
        <Container>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                <div className="new-cst">
                                    <h4>NEW CUSTOMER</h4>
                                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                    <button><Link to="/register">CREATE AN ACCOUNT</Link></button>
                                    </div>
                </div>
                <div className="col-md-6 col-sm-12">

                <div className="registration-item">
                            <div className="form-wrapper">
                            <ToastContainer />
                                <h4>LOGIN</h4>
                                <p>If you have an account with us, please log in.</p>
                                <ToastContainer />
                                <form onSubmit={formSubmitHandler} className="form">
                              <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                              />
                          
                              <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                              />
                              <button className="form-btn" type="submit">
                                Login
                              </button>
                            </form>
                                
                                </div>
                            </div>
                </div>
            </div>
        </Container>
        </div>
        <Footer />
        <ScrollToTop />
        </section>
}
</div>
    );
}
export default Login