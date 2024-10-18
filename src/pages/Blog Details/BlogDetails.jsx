import './BlogDetails.css';
import { FaRegCalendar , FaUserLarge   } from "react-icons/fa6";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import { FaBookOpen  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Fixedicons from '../../components/FixedIcons/FixedIcons';


const BlogDetails = () =>{
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
        <section className='blog-details'>
       <Header />
          
            <Fixedicons />
              <div className="services-header">
                    <div className="overlay">
                        <div className="container">
                        <h1>Blog Details</h1>
                        <div className="breadcrumb-header">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Blog</Breadcrumb.Item>
                            <Breadcrumb.Item href="https:getbootstrap.com/docs/4.0/components/breadcrumb/">
                             Blog Details
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        </div>
                        </div>
                    </div>
              </div>
           
            <div className='blogdetails-items'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-8 col-sm-12">
                            <div className="blogDetails-items">
                                <div className="blogDetails-item">
                                    <img src='https:bookland.dexignzone.com/react/demo/static/media/blog1.63465b1aa606254ca6bf.jpg' alt='' />
                                    <ul className="list-unstyled date">
                                        <li><FaRegCalendar />7 March, 2023</li>
                                        <li>< FaUserLarge />By Johne Doe</li>
                                    </ul>
                                    <h4>The Time Is Running Out! Think About These 6 Ways To Change Your Library. How To Restore Library?</h4>
                                    <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
                                    <p>Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est.</p>
                                    <div className='block'>
                                    <blockquote>A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.</blockquote>
                                    <h6>-- Library Community</h6>
                                    </div>
                                    {/* block */}
                                    <p>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat.</p>
                                    
                                </div>
                                <div className='blogDetails-item-two'>
                                    <h4>Understanding The Background Of Library.</h4>
                                    <div className='row'>
                                        <div className="col-md-6 col-sm-12">
                                        <img src='	https:bookland.dexignzone.com/react/demo/static/media/blog.67b727bba998205efc29.jpg' alt='' />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                        <p>Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis.</p>
                                        </div>
                                        <div className='info'>
                                            <p>Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis.

Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent taciti sociosqu ad litora</p>
                                        </div>
                                        <p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum.</p>
                                        <div className='tags'>
                                            <h5>Tags</h5>
                                            <Link>Child,</Link>
                                            <Link>Education,</Link>
                                            <Link>Money,</Link>
                                            <Link>Adventur</Link>
                                        </div>
                                        <div className="related-blogs">
                                            <h4>RELATED BLOGS</h4>
                                            <div className='row'>
                                                <div className='col-md-6 col-sm-12'>
                                                    <img src='	https:bookland.dexignzone.com/react/demo/static/media/blog1.63465b1aa606254ca6bf.jpg' alt='' />
                                                    <h4><Link>How Library Can Increase Your Profit!</Link></h4>
                                                    <p>Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar.</p>
                                                       <ul className="list-unstyled date">
                                                        <li><FaRegCalendar />7 March, 2023</li>
                                                        <li>< FaUserLarge />By Johne Doe</li>
                                                        </ul>
                                                </div>
                                                <div className='col-md-6 col-sm-12'>
                                                    <img src='	https:bookland.dexignzone.com/react/demo/static/media/blog4.7455dc86777326e58316.jpg' alt='' />
                                                    <h4><Link>Library Can Improve Your Business</Link></h4>
                                                    <p>Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar.</p>
                                                       <ul className="list-unstyled date">
                                                            <li><FaRegCalendar />7 March, 2023</li>
                                                            <li>< FaUserLarge />By Johne Doe</li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <form>
                                        <h4>LEAVE A REPLAY</h4>
                                            <input type="text" placeholder="Auther" />
                                            <input type="email" placeholder="Email" />
                                            <textarea placeholder='Type Comment Here' cols={45} row={3} ></textarea>
                                            <button>Submit Now</button>
                                        </form>

                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className='right'>
                                <form>
                                    <input type='Search' placeholder='Search' />
                                    <FaSearch />
                                </form>
                                <div className='category'>
                                            <h4>CATEGORY</h4>
                                            <ul className='list-unstyled'>
                                                <li><FaChevronRight />Audio</li>
                                                <li><FaChevronRight />Beauty</li>
                                                <li><FaChevronRight />Fashion</li>
                                                <li><FaChevronRight />Images</li>
                                                <li><FaChevronRight />Beauty</li>
                                                <li><FaChevronRight />Lifs Style</li>
                                            </ul>
                                </div>
                                <div className='posts'>
                                    <h4>RECENT POSTS</h4>
                                    <div className='posts-item'>
                                        <img src='	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…la4+hdT1l9acFpQtKUrLyr6EyIvoS1qrfIqzt6nl69v8A/9k=' alt='' />
                                        <div className='posts-item-info'>
                                            <h6><Link>The Miracle Of Library In Mind.</Link></h6>
                                            <p> 7 March, 2023 </p>
                                        </div>
                                    </div>
                                    {/* post item */}
                                    <div className='posts-item'>
                                    <img src='	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…yW9oszkJ51+ZrkWa/M08zD+RLsZNHyM2M2EmTNjNjeTeT/9k=' alt='' />
                                        <div className='posts-item-info'>
                                            <h6><Link>Fall In Love With The Library</Link></h6>
                                            <p> 7 March, 2023 </p>
                                        </div>
                                    </div>
                                    {/* post item */}
                                    <div className='posts-item'>
                                    <img src='	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…4k8+o3NaclKleVRe1Rbej+VRlpRvTkvJ61FuGz6CerevP/9k=' alt='' />
                                        <div className='posts-item-info'>
                                            <h6><Link>So many books, so little time.</Link></h6>
                                            <p> 7 March, 2023 </p>
                                        </div>
                                    </div>
                                    {/* post item */}

                                </div>
                                {/* posts */}
                                {/* ARCHIVES */}
                                <div className="archives">
                                    <h4>ARCHIVES</h4>
                                    <ul className='list-unstyled'>
                                        <li><Link><FaChevronRight />January</Link></li>
                                        <li><Link><FaChevronRight />Fabruary</Link></li>
                                        <li><Link><FaChevronRight />March</Link></li>
                                        <li><Link><FaChevronRight />April</Link></li>
                                        <li><Link><FaChevronRight />May</Link></li>
                                        <li><Link><FaChevronRight />Jun</Link></li>
                                        <li><Link><FaChevronRight />July</Link></li>
                                    </ul>
                                </div>
                                {/* Tags */}
                                <div className='tags'>
                                    <h4>Tags</h4>
                                    <div>
                                        <span>Business</span>
                                        <span>News</span>
                                        <span>Brand</span>
                                        <span>Website</span>
                                        <span>Internet</span>
                                        <span>Strategy</span>
                                        <span>Mession</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollToTop />
                <Footer />
        </section>
        }
        </div>
    )
}

export default BlogDetails