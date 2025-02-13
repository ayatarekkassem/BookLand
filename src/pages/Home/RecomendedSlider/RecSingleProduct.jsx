import React, { useContext, useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import "../../shopGrid/shopGrid.css";
import Header from '../../../components/Header/Header';
import Footer from "../../../components/footer/Footer";
import Fixedicons from '../../../components/FixedIcons/FixedIcons';
// import { Grids } from "../../data/Grids";
import BookStoreContext from "../../../context/BookStoreContext";
import RecomendedSliderDatas from "../../../data/RecomendedSliderDatas";
import { FaBookOpen  } from "react-icons/fa6";

const RecSingleProduct = () =>{
    const { id } = useParams();
    const RecomendedSliderData = RecomendedSliderDatas.find(p => p.id === parseInt(id));

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

                <img src={RecomendedSliderData.image} alt={RecomendedSliderData.title} />
                </div>

                <div className="singleProductPage-info">
                <h3>{RecomendedSliderData.title}</h3>
               
                <p>{RecomendedSliderData.para}</p>
                 <ul className="list-unstylled price" >
                    <li>Price:  ${RecomendedSliderData.price}</li>
                </ul>
                
                <ul className="list-unstylled">
                    <li>{RecomendedSliderData.listOne}</li>
                    <li>{RecomendedSliderData.listTwo}</li>
                </ul> 
            

                  <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
                           <button onClick={() => addToCart(RecomendedSliderData,qty)}>Add To Cart</button>

                </div>
              
               </div>
            </div>
            <Footer />
            </div>
              }
              </div>
    )
}
export default RecSingleProduct