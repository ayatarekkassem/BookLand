import React, { useContext, useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import "../../shopGrid/shopGrid.css";
import Header from '../../../components/Header/Header';
import Footer from "../../../components/footer/Footer";
import Fixedicons from '../../../components/FixedIcons/FixedIcons';
import BookStoreContext from "../../../context/BookStoreContext";
import { IntroSliderDatas } from "../../../data/IntroSliderDatas";
import { FaBookOpen  } from "react-icons/fa6";
const  SingleInnerPage =() =>{
    const { id } = useParams();
    const IntroSliderData = IntroSliderDatas.find(p => p.id === parseInt(id));

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
        <div className="SingleInnerPage">
              <div className="singleProductPage">

            <Fixedicons />
             <Header />
             <div className="container">
            <div className="singleProductPage-item">
               <div className="singleProductPage-img">

                <img src={IntroSliderData.image} alt={IntroSliderData.title} />
                </div>

                <div className="singleProductPage-info">
                <h3>{IntroSliderData.title}</h3>
               
                <p>{IntroSliderData.para}</p>
                 <ul className="list-unstylled price" >
                    <li>Price:  ${IntroSliderData.price}</li>
                </ul>
                
                <ul className="list-unstylled">
                    <li>{IntroSliderData.listOne}</li>
                    <li>{IntroSliderData.listTwo}</li>
                </ul> 
            

                  <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
            <button onClick={() => addToCart(IntroSliderData,qty)}>Add To Cart</button>

                </div>
              
               </div>
            </div>
            <Footer />
            </div>
        </div>
        }
        </div>
    )
}
export default SingleInnerPage;