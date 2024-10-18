import React ,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {  shopGriditemDataOne, shopGriditemDataThree, shopGriditemDataTwo } from "../../data/shopGriditemData";
import { FaBookOpen  } from "react-icons/fa6";
import "../shopGrid/shopGrid.css";


const SingleProductPage = () =>{
    const { id } = useParams();
    const shopGriditemDataOne = shopGriditemDataOne.find(p => p.id === parseInt(id));
    const shopGriditemDataTwo = shopGriditemDataTwo.find(p => p.id === parseInt(id));
    const shopGriditemDataThree = shopGriditemDataThree.find(p => p.id === parseInt(id));
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
            <div className="singleProductPage-img">
                <img src={shopGriditemDataOne.image} alt={shopGriditemDataOne.title} />
                <h3>{shopGriditemDataOne.title}</h3>
            </div>
            <div className="singleProductPage-img">
                <img src={shopGriditemDataTwo.image} alt={shopGriditemDataTwo.title} />
                <h3>{shopGriditemDataTwo.title}</h3>
            </div>
            <div className="singleProductPage-img">
                <img src={shopGriditemDataThree.image} alt={shopGriditemDataThree.title} />
                <h3>{shopGriditemDataThree.title}</h3>
            </div>
        </div>
           
        }
        </div>
    )
}
export default SingleProductPage;