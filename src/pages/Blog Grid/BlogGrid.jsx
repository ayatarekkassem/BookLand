import "./BlogGrid.css";
import '../Services/Services.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { FaRegCalendar , FaUserLarge , FaComment  } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { FaBookOpen  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Fixedicons from '../../components/FixedIcons/FixedIcons';

const BlogGrid = () =>{
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
        <section className="blogGrid">
            <Header />
            <Fixedicons />
              <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Blog Grid</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Blog</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                             Blog Grid
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        
                        </div>
                    </div>
                   
              </div>
              <div className="blog-items">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="blog-item">
                                <img src="https:bookland.dexignzone.com/react/demo/static/media/blog2.d365a1708a9953ac64e3.jpg" alt="Blog Img" />
                                <div className="blog-item-desc">
                                    <h3><Link>The library is inhabited by spirits that come out of the pages.</Link></h3>
                                    <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
                                    <ul className="list-unstyled">
                                        <li><FaRegCalendar />7 March, 2023</li>
                                        <li><Link><FaUserLarge /></Link>By Johne Doe</li>
                                    </ul>
                                </div>
                            </div>
                            {/* blog item */}
                            <div className="blog-item">
                                <img src="	https:bookland.dexignzone.com/react/demo/static/media/blog3.f830be279c90b4611c83.jpg" alt="Blog Img" />
                                <div className="blog-item-desc">
                                    <h3><Link>Most Effective Ways To Overcome Library's Problem.</Link></h3>
                                    <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
                                    <ul className="list-unstyled">
                                        <li><FaRegCalendar />7 March, 2023</li>
                                        <li><Link><FaUserLarge /></Link>By Johne Doe</li>
                                    </ul>
                                </div>
                            </div>
                            {/* blog item */}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="blog-item">
                                <img src="https:bookland.dexignzone.com/react/demo/static/media/blog1.0b83c89f6fb0f1bb0687.jpg" alt="Blog Img" />
                                <div className="blog-item-desc">
                                    <h3><Link>The 5 Secrets About Library Only A Handful Of People Know.</Link></h3>
                                    <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
                                    <ul className="list-unstyled">
                                        <li><FaRegCalendar />7 March, 2023</li>
                                        <li><Link><FaUserLarge /></Link>By Johne Doe</li>
                                    </ul>
                                </div>
                            </div>
                            {/* blog item */}
                            <div className="blog-item">
                                <img src="https:bookland.dexignzone.com/react/demo/static/media/blog1.0b83c89f6fb0f1bb0687.jpg" alt="Blog Img" />
                                <div className="blog-item-desc">
                                    <h3><Link>The 5 Secrets About Library Only A Handful Of People Know.</Link></h3>
                                    <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor.</p>
                                    <ul className="list-unstyled">
                                        <li><FaRegCalendar />7 March, 2023</li>
                                        <li><Link><FaUserLarge /></Link>By Johne Doe</li>
                                    </ul>
                                </div>
                            </div>
                            {/* blog item */}
                        </div>
                    </div>
                </div>
              </div>
            <Footer />
            <ScrollToTop />
        </section>
}
</div>
    )
}
export default BlogGrid;