import React from "react";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide5.jpg'
import slide5 from '../../assets/slide6.jpg'
import { Link } from "react-router";



const Benner = () => {
 
  return (
   <>
   <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src={slide3}
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={slide2}
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={slide4}
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={slide5}
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
   </>
   
  );
};

export default Benner;