import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import ShopGrid from "./pages/shopGrid/shopGrid";
import ShopList from "./pages/ShopList/ShopList";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Pricing/Pricing";
import BlogGrid from "./pages/Blog Grid/BlogGrid";
import BlogDetails from "./pages/Blog Details/BlogDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import FAQ from "./pages/FAQ's/FAQ's";
import HelpDesk from "./pages/Help Desk/HelpDesk";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ShopGrideSingle from "./pages/shopGrid/ShopGrideSingle";
import SingleProductPageRec from "./pages/Home/RecomendedSlider/SingleProductPageRec"; 
import SingleProductInner from "./pages/Home/FeaturedProduct/SingleProductInner";
// import React, { useEffect  , useTimeOut} from "react";
// import InnerBook from "./pages/InnerBook/InnerBook";
// import { useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import RecSingleProduct from "./pages/Home/RecomendedSlider/RecSingleProduct";
import FeatSinglePage from "./pages/Home/FeaturedProduct/FeatSinglePage";
import SingleInnerPage from "./pages/Home/IntroSlider/SingleInnerPage";



function App() {
   
  // let [loading, setLoading] = useState(false);



  // useEffect(() =>{
  //   setLoading(true)

  //   useTimeOut (() =>{
  //     setLoading(false)
  //   },5000)
  // },[])
  return (
     
  
      <div className="app">
     {/* {loading ?
      <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> : */}
    
      {/* <Header /> */}
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<About />} />
           <Route path="/shopGrid" element={<ShopGrid />} />
           <Route path="/ShopList" element={<ShopList />} />
           <Route path="/Services" element={<Services />} />
           <Route path="/Pricing" element={<Pricing />} />
           <Route path="/BlogGrid" element={<BlogGrid/>} />
           <Route path="/BlogDetails" element={<BlogDetails />} />
           <Route path="/ContactUs" element={<ContactUs />} />
           <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
           <Route path="/Registration" element={<Registration />} />
           <Route path="/login" element={<Login />} />
           <Route path="/FAQ" element={<FAQ />} />
           <Route path="/HelpDesk" element={<HelpDesk />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/Checkout" element={<Checkout />} />
           {/* <Route path="/book/:id" element={<InnerBook />} /> */}
           {/* <Route path='/products/:id' element={<SingleProduct />} /> */}
           <Route path='/products/:id' element={<SingleProductPage />} />
           <Route path='/grids/:id' element={<ShopGrideSingle />} />
           <Route path='/RecomendedSliderDatas/:id' element={<SingleProductPageRec />} />
           <Route path="/SingleInnerPage/:id" element={<SingleInnerPage />}/>
            
           <Route path='/FeaturedSliderDatas/:id' element={<SingleProductInner />} />

           <Route path="/RecSingleProduct/:id" element={<RecSingleProduct />} />
           <Route path="/FeatSinglePage/:id" element={<FeatSinglePage />} />
         </Routes>
       </BrowserRouter>  
   {/* } */}
      </div>
        
   
  );
}

export default App;