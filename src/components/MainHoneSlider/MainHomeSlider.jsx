 import "./MainHomeSlider.css";
 import Carousel from 'react-bootstrap/Carousel';
  import ExampleCarouselImage from 'components/ExampleCarouselImage';


 const MainHomeSlider = () =>{
     return(
         <div className="mainHomeSlider">
             <Carousel slide={false}>
       <Carousel.Item >
         <div className="first">
         {/* <ExampleCarouselImage text="First slide" /> */}
         <Carousel.Caption>
          <div className='carousel-inner'>
             <div className='carousel-info'>

                 <h6>BEST MANAGEMENT</h6>
                 <h3>Think and Grow Rich</h3>   

             </div>
             <img src=':	https:bookland.dexignzone.com/react/demo/static/media/banner-media2.2097107a6e8c5f803b5b.png' alt='person 1' />
          </div>
         </Carousel.Caption>
         </div>
       </Carousel.Item>
       <Carousel.Item>
         {/* <ExampleCarouselImage text="Second slide" /> */}
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         {/* <ExampleCarouselImage text="Third slide" /> */}
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
         </div>
     )
 }

 export default MainHomeSlider;