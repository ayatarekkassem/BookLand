import '../cart/Cart.css';
import { useContext } from "react";
import BookStoreContext from "../../context/BookStoreContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
 import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaPlus , FaTrashCan } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import { FaBookOpen  } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const Cart = () => {
  const { cartInfo, removeFromCart, addToCart } = useContext(BookStoreContext);

         // Loading
         const[loading , setLoading] = useState(false)

         useEffect(() =>{
           setLoading(true)
           setTimeout(()=>
              setLoading(false),3000)
            
          }, [])
  return (
    <div>

        {
         loading ?
         <div className="loading">
         <FaBookOpen />
         </div>
         :
    <div className="cart">
      <Header />
      <div className="checkout-header text-center">
                    <div className="overlay">
                        <div className="checkout-header-title">
                          <h2>Cart</h2>
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
      <div className='container'>
        <div className="cart-wrapper">
          <div className="container">
          <ul className='list-unstyled table-head'>
            <li>Product</li>
            <li>Product name</li>
            <li>Unit Price</li>
            <li>Quantity</li>
            <li>Total</li>
            <li>Close</li>
          </ul>
          <div className="cart-items">
            
            {cartInfo.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-img"
                  />
                </div>
              
                  <div>
                    <div className="cart-item-book-title">
                      {item.title}
                    </div>   
                  </div>

                  <div className="cart-item-price">
                      {/* ${(item.price * item.quantity).toFixed(2)} */}
                     $ {item.price}
                    </div>
                    
                 
                    <div className="cart-item-quantity">
                      <button
                        onClick={() => addToCart(item, parseInt(item.quantity) + 1)}>
                          <FaPlus />
                        </button>
                      <b>{item.quantity}</b>
                      <button
                        disabled={item.quantity <= 1}
                        onClick={() => addToCart(item, parseInt(item.quantity) - 1)}
                        
                      >-</button>
                    </div>
                    {/* <div className="cart-item-price">
                      ${item.price}
                    </div> */}
                    <div className="cart-item-price">
                      
                      {/* {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)} */}
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                   
                    <div className="trash" onClick={() => removeFromCart(item.id)}>
                    <FaTrashCan />
                    </div>
                    
                  
                
              </div>
            ))}
            </div>
          </div>
         {/* ./ cart item */}
        <div classname="shipping">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className='shipping-item'>
                <h4>CALCULATE SHIPPING</h4>
                <form>
                  <Form.Select aria-label="Credit Card Type">
                    <option>Open this select menu</option>
                    <option value="1">Another Option</option>
                    <option value="2">A Option</option>
                    <option value="3">A Option</option>
                </Form.Select>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <input type='text' placeholder='Credit Card Number' />
                  </div>
                  <div className="col-md-6 col-sm-12">
                  <input type='text' placeholder='Credit Card Number' />
                  </div>
                </div>
                <input type='text' placeholder='Coupon Code' />
                <button>Apply Coupon</button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
            <div className='shipping-item'>
                <h4>CART SUBTOTAL</h4>
          <div className="cart-order-summary">
          <div className="order-summary-item">
            <span>
              Order Subtotal
            </span>
            <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="order-summary-item">
            <span>Shipping</span>
            <span>Free Shipping</span>
          </div>
          <div className="order-summary-item">
            <span>Coupon</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <button><Link to="/Checkout">Proceed to Checkout</Link>
          </button>
        </div>
              </div>
            </div>
          </div>
        </div>
         
        </div>
      </div>
      <Footer/>
    </div>
}
</div>
  );
};

export default Cart;