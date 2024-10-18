import React, { useContext } from "react";
import "./FixedIcons.css";
import { FaHeadset , FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BookStoreContext from "../../context/BookStoreContext";

const Fixedicons = () =>{
      const { cartInfoLength } = useContext(BookStoreContext);
    return(
        <div className="fixed-icons">
            <ul className="listunstyled">
                <li className="support"><span><FaHeadset /></span><span className="hide">Support</span></li>
                {/* <li className="buy"><span><FaCartShopping /></span><span  className="hide">Buy Now</span></li> */}
                <li className="fixed-cart"><Link to="/cart" className="header-middle-cart-wrapper color">
                                {cartInfoLength > 0 && (
                                <b className="cart-notification">{cartInfoLength}</b>
                                )}
                                <span  className="hide">Buy Now</span>
                                <FaCartShopping />
                            </Link></li>
            </ul>
        </div>
    )
}
export default Fixedicons;