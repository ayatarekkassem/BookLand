import "./header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from "../../images/logo.png";
import { FaRegHeart , FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import BookStoreContext from "../../context/BookStoreContext";
import { Link } from "react-router-dom";

const HeaderTop = () =>{
    const { cartInfoLength } = useContext(BookStoreContext);
    return(
        <div className="headerTop">
          <div className="container">
                <div className="headerTopdesc">
                    <div className="headerTopItem">
                        <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link>
                    </div>
                    {/* header top item */}
                    <div className="headerTopItem headertwo">
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Category</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Photography</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Arts</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Games</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Movies</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Biographies</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Children’s Books</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="header-search">
                        <input className="header-search-input" type='search' placeholder='Search Books Here' />
                        <FaSearch  className="header-search-icon" />
                    </div>
                    </div>
                    {/* header top item */}
                    <div className="headerTopItem headerTopItemCart">
                        <ul className='list-unsttyled headerTopIcons'>
                            <li><Link><FaRegHeart /></Link></li>
                            <li>
                            <Link to="/cart" className="header-middle-cart-wrapper">
                                {cartInfoLength > 0 && (
                                <b className="cart-notification">{cartInfoLength}</b>
                                )}
                                <FaCartShopping />
                            </Link>
                            
                            </li>
                        </ul>
                        {/* <div className='headerTop-card'>
                                <img src='https://bookland.dexignzone.com/xhtml/images/profile1.jpg' className='cartImg' alt='Bain'/>
                            <div className='headerTopCartInfo'>
                                <h4>Brian</h4>
                                <p>info@gmail.com</p>
                            </div>
                        </div> */}
                    </div>
                    {/* header top item */}
                    </div>
           </div>
        </div>
    )
}
export default HeaderTop
