import { useContext } from "react";
import "./Checkout.css";
import BookStoreContext from "../../context/BookStoreContext";
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CheckoutOrder = () => {
  const { cartInfo} = useContext(BookStoreContext);

  const order = () => toast.success("Order Placed");

   
  return (
    <div className="CheckoutOrder">
        <div className="row">
            <div className="col-md-6 col-sm-12">
            <h3 className="cart-title">YOUR ORDER</h3>
      <div className="cart-wrapper">
      <ul className='list-unstyled table-head'>
          <li>Product</li>
          <li>Product name</li>
          <li>Total</li>
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
                <div>
                  
                  <div className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                 
                </div>
          
            </div>
          ))}
        </div>
            </div>
           

            </div>
            <div className="col-md-6 col-sm-12">
            <div className="cart-order-summary">
          <h3 className="order-summary-title">ORDER TOTAL</h3>
          <div className="order-summary-item">
            <span>Order Subtotal</span>
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
            <span>Order Total</span>
            <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="payment">
            <h3>PAYMENT METHOD</h3>
            <Form>
                <input type="text" placeholder="Name on Card" />
                <Form.Select aria-label="Default select example">
                    <option>Credit Card Type</option>
                    <option value="1">Cashback credit cards</option>
                    <option value="2">Travel credit cards.</option>
                    <option value="3">ABusiness credit cards</option>
                </Form.Select>
                <input type="number" placeholder="Credit Card Number" />
                <input type="number" placeholder="Card Verification Number" />
               
                <button onClick={order}>Place Order Now</button>
        <ToastContainer />
            </Form>
          </div>
        </div>
            </div>
       
      </div>
    </div>
  );
};

export default CheckoutOrder;