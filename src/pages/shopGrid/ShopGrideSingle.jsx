import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./shopGrid.css";
// import { products } from "../../data/products";
import Header from '../../components/Header/Header';
import Footer from "../../components/footer/Footer";
import Fixedicons from '../../components/FixedIcons/FixedIcons';
import { Grids } from "../../data/Grids";
import BookStoreContext from "../../context/BookStoreContext";


const ShopGrideSingle = () =>{
    const { id } = useParams();
    const grid = Grids.find(p => p.id === parseInt(id));
    console.log(grid);

      // Add To Cart
      const { addToCart } = useContext(BookStoreContext);

      // Qty
      const [qty, setQty] = useState(1);

    return(
        <div className="singleProductPage">
            <Fixedicons />
             <Header />
             <div className="container">
            <div className="singleProductPage-info">
                <img src={grid.image} alt={grid.title} />
                <div>
                <h3>{grid.title}</h3>
                <p>{grid.para}</p>
                <ul className="list-unstylled price" >
                    <li>Price:  ${grid.price}</li>
                    <li><del>${grid.del}</del></li>
                </ul>
                
                 <ul className="list-unstylled">
                    <li>{grid.bookinfoOne}</li>
                    <li>{grid.bookInfoTwo}</li>
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

                <button onClick={() => addToCart(grid,qty)}>{grid.button}</button>
            </div>
            <Footer />
            </div>
        </div>
        
    )
}
export default ShopGrideSingle;