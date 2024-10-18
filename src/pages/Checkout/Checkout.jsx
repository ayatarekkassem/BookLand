import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import "./Checkout.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import CheckoutOrder from "./CheckoutOrder";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const Checkout = () =>{
       // Loading
       const[loading , setLoading] = useState(false)

       useEffect(() =>{
         setLoading(true)
         setTimeout(()=>
            setLoading(false),3000)
          
        }, [])

        

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
    return(
        <div>

        {
         loading ?
         <div className="loading">
         <FaBookOpen />
         </div>
         :
        <section className="checkout">
            <Header />
            <div className="checkout-content">
                <div className="checkout-header text-center">
                    <div className="overlay">
                        <div className="checkout-header-title">
                    <h2>Checkout</h2>
                    <div className="checkoutHeader-links">
                         <Breadcrumb>
                            <Breadcrumb.Item href="#">Shop</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                                Checkout
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    </div>
                </div>
                </div>
                <div className="address">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="address-items">
                                    <form>
                                        <h3>BILLING & SHIPPING ADDRESS</h3>
                                        <Form.Select aria-label="Default select example">
                                            <option>Åland Islands</option>
                                            <option value="1">Albania</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Andorra</option>
                                        </Form.Select>
                                        <input type="text" placeholder="First Name" required />
                                        <input  type="text" placeholder="Last Name" required />
                                        <input type="text" placeholder="Company Name" required />
                                        <input type="text" placeholder="Address" required />
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <input type="text" placeholder="Apartment, suite, unit etc." required/>
                                                <input type="text" placeholder="State / County" required />
                                                
                                                <input
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    type="password"
                                                    placeholder="Password"
                                                required />
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input type="text" placeholder="Town / City" required/>
                                                <input type="text" placeholder="Postcode / Zip" required />
                                                <input type="number" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <button>Create an account </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="ship">
                                   
                                    <Accordion defaultActiveKey="0">
      
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Ship to a different address
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>ils in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
                                        <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
                                        <form>
                                            <Form.Select aria-label="Default select example">
                                                <option>Åland Islands</option>
                                                <option value="1">Albania</option>
                                                <option value="2">Afghanistan</option>
                                                <option value="3">Andorra</option>
                                            </Form.Select>
                                            <input type="text" placeholder="First Name" required />
                                            <input  type="text" placeholder="Last Name" required />
                                            <input type="text" placeholder="Company Name" required />
                                            <input type="text" placeholder="Address" required />
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <input type="text" placeholder="Apartment, suite, unit etc." required/>
                                                    <input type="text" placeholder="State / County" required />
                                                    <input type="email" placeholder="Email" required />
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <input type="text" placeholder="Town / City" required/>
                                                    <input type="text" placeholder="Postcode / Zip" required />
                                                    <input type="number" placeholder="Phone" required />
                                                </div>
                                            </div>
                                            
                                        </form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                    <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                    <textarea>Notes about your order, e.g. special notes for delivery</textarea>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="order">
                            <CheckoutOrder />
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
export default Checkout