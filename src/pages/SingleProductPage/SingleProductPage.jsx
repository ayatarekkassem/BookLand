import React, { useContext, useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Header from '../../components/Header/Header';
import Footer from "../../components/footer/Footer";
import './SingleProductPage.css';
import "../shopGrid/shopGrid.css";
import Fixedicons from '../../components/FixedIcons/FixedIcons';
import BookStoreContext from "../../context/BookStoreContext";
import { FaBookOpen  } from "react-icons/fa6";
const SingleProductPage = () =>{
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

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
                    <div className="singleProductPage-info">
                        <img src={product.image} alt={product.title} />
                        <div>
                        <h3>{product.title}</h3>
                        <p>{product.para}</p>
                        <ul className="list-unstylled price" >
                            <li>Price:  ${product.price}</li>
                            <li><del>${product.del}</del></li>
                        </ul>
                        
                        <ul className="list-unstylled">
                            <li>{product.listOne}</li>
                            <li>{product.listTwo}</li>
                        </ul>
                        <ul>
                            <li>{product.discountOne}</li>
                            <li>{product.discountTwo}</li>
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

                        <button onClick={() => addToCart(product,qty)}>{product.btn}</button>
                    
                    </div>
                </div>
            <Footer />
            </div>
        </div>
           }
           </div>
    )
}
export default SingleProductPage;