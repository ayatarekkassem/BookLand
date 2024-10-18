import {  useEffect } from "react";
import "./ScrollToTop.css";

import { FaAnglesUp } from "react-icons/fa6";

export default function ScrollToTop() {
  useEffect(() => {
     
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div>
      <button className='scrollToTop' onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
        <FaAnglesUp />
      </button>
    </div>
  );
}