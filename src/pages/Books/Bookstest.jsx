 import useContext from "react";
import BookStoreContext from "../../context/BookStoreContext";
import Header from "../../components/Header/Header";

const BookPage = (data) => {
    const { addToCart } = useContext(BookStoreContext);

  return (
    <div className="book">
      <Header />
         {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            {/* <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            /> */}
            <h3 className="book-slide-item-title">{item.title}</h3>
            <div className="book-slider-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              {/* <i onClick={() => handleOpenModal(item)} className="bi bi-eye-fill"></i> */}
           
              <i onClick={() => addToCart(item, 1)} className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
    
  )
};

export default BookPage;