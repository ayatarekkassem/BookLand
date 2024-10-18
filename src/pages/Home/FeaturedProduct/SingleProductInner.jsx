import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../../shopGrid/shopGrid.css";
import Header from '../../../components/Header/Header';
import Footer from "../../../components/footer/Footer";
import Fixedicons from '../../../components/FixedIcons/FixedIcons';
// import { Grids } from "../../data/Grids";
import BookStoreContext from "../../../context/BookStoreContext";
// import FeaturedSliderDatas from "../../../data/FeaturedSliderDatas";
import FeaturedSliderDatas from "../../../data/FeaturedSliderDatas";
const SingleProductInner = () =>{
    const { id } = useParams();
    const FeaturedSliderData = FeaturedSliderDatas.find(p => p.id === parseInt(id));

    // Add To Cart
    const { addToCart } = useContext(BookStoreContext);

    // Qty
    const [qty, setQty] = useState(1);
    
    return(
        <div className="singleProductPage">
            <div>
            <Fixedicons />
             <Header />
             <div className="container">
            <div className="singleProductPage-info">
                <img src={FeaturedSliderData.image} alt={FeaturedSliderData.title} />
                <div>
                <h3>{FeaturedSliderData.title}</h3>
               
                <p>{FeaturedSliderData.para}</p>
                <p>{FeaturedSliderData.para}</p>
                 <ul className="list-unstylled price" >
                    <li>Price:  ${FeaturedSliderData.price}</li>
                </ul>
                
                <ul className="list-unstylled">
                    <li>{FeaturedSliderData.listOne}</li>
                    <li>{FeaturedSliderData.listTwo}</li>
                </ul> 
            

                  <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
           
                </div>

                <button onClick={() => addToCart(FeaturedSliderData,qty)}>Add To Cart</button>
              
               
            </div>
            <Footer />
            </div>
            </div>
        </div>
    )
}
export default SingleProductInner;