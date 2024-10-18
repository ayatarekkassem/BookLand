import React from 'react'
import {  shopGriditemDataOne } from "../../data/shopGriditemData";
import { FaStar   , FaRegHeart} from "react-icons/fa6";
import { Link } from 'react-router-dom';
 import BookStoreContext from '../../context/BookStoreContext';

const shopGriditemOne = ({ shopGriditemDataOne }) =>{
     const { addToCart } = useContext(BookStoreContext);
    return(
       
        <div>
        {shopGriditemDataOne.map((shopGrid) =>(
            <Link to={`/shopGriditemDataOne/${shopGrid.id}`}  key={shopGrid.id}>
               <div className="shopGrid" >
                   <div className="book-item">
                   {/* <Link to={`/SingleProduct/${id}`} className="product-item"> */}
                       
                       <FaRegHeart className="heart" />
                       <img src={shopGrid.image} alt="Book1" />
                       <div className="book-info">
                           <h5><Link>{shopGrid.title}</Link></h5>
                           <div className="book-info-show">
                               <span>{shopGrid.bookinfoOne}</span>
                               <span>{shopGrid.bookInfoTwo}</span>
                       <div className="stars">
                       <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                   </div>
                   </div>
                   
                   <div className="book-over">
                       <p className="price"><span>{shopGrid.price}   </span><del>{shopGrid.del}</del></p>
                       {/* <button onClick={() => addToCart(shopGrid, 1)}><FaCartShopping />{shopGrid.button}</button> */}
                       {/* <Link
       
       className="modal-content-info-link"
       to={`/book/${id}`}
   >
       See More Details
   </Link> */}
                   </div>
                   </div>
               {/* </Link> */}
                   </div>
                   {/* ./BOOK ITEM */}
               </div>
           </Link>
         
       ))}
    </div>
    )
}
export default shopGriditemOne