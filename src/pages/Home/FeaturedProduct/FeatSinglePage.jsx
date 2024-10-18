import React, { useContext, useState , useEffect } from "react";
import "../../shopGrid/shopGrid.css";
import { useParams } from "react-router-dom";
import "../../shopGrid/shopGrid.css";
import Header from '../../../components/Header/Header';
import Footer from "../../../components/footer/Footer";
import Fixedicons from '../../../components/FixedIcons/FixedIcons';
// import { Grids } from "../../data/Grids";
import BookStoreContext from "../../../context/BookStoreContext";
// import RecomendedSliderDatas from "../../../data/RecomendedSliderDatas";
import FeaturedSliderDatas from "../../../data/FeaturedSliderDatas";
import { FaBookOpen  } from "react-icons/fa6";
const FeatSinglePage =() =>{
    const { id } = useParams();
    const FeaturedSliderData = FeaturedSliderDatas.find(p => p.id === parseInt(id));

    // Add To Cart
    const { addToCart } = useContext(BookStoreContext);

    // Qty
    const [qty, setQty] = useState(1);
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
        <div className="singleProductPage">
            <Fixedicons />
             <Header />
             <div className="container">
                <div className="singleProductPage-item">
                    <div className="singleProductPage-img">
                        <img src={FeaturedSliderData.image} alt={FeaturedSliderData.title} />
                        </div>
                        <div className="singleProductPage-info">
                        <h3>{FeaturedSliderData.title}</h3>
                    
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
                        <button onClick={() => addToCart(FeaturedSliderData,qty)}>Add To Cart</button>
                
                        </div>
                    </div>
              
            <Footer />
            </div>
        </div>
          }
          </div>
    )
}
export default FeatSinglePage