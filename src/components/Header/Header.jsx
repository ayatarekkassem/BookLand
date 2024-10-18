// import "./header.css";
import HeaderTop from "./HeaderTop";
import MainNavbar from "./Navbar";

const Header = () =>{
    return(
        <div className="header">
              
                <div className="headerTopItems">
                <HeaderTop />
                <MainNavbar />
         
            </div>
       
    </div>
    )
}
export default Header
