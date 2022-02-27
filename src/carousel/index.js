

import React from 'react'

import slide1 from '../assets/slide99.jpg'
import slide2 from '../assets/slide88.jpg'
import "./style.css" 




const Carousel= () => {
    return (
        <> 


        
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
 

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide1} className="d-block w-100 carouselimage"   alt="..."/>

      <p className="centered animate__animated animate__fadeInLeft">
        <span style={{color:'#00539cff'}}>F</span>ind the perfect <span style={{color:'#00539cff'}}>F</span>reelance services for  <br/>
         <span className="spanimg">your business , </span>
      </p>

    </div>



    <div className="carousel-item">
      <img src={slide2} className="d-block w-100 carouselimage" alt="..."/>


      <p className="centered animate__animated animate__fadeInLeft">
        <span style={{color:'#00539cff'}}> F</span>ormations et <span style={{color:'#00539cff'}}>G</span>estions
        administratives <br/> <span className="spanimg">Des staffs, </span>
      </p>

    </div>



  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



        
        
</>
    )
}

export default Carousel