import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
// import slide4 from '../../assets/slide5.jpg'
// import slide5 from '../../assets/slide6.jpg'
import { Link } from "react-router";




const Benner = () => {
 
  return (
   <>

    <Swiper modules={[Navigation , Pagination , Autoplay]} spaceBetween={30} slidesPerView={1} navigation autoplay={{delay:3000}} loop={true}>
<SwiperSlide className='flex justify-center'>
  
 <div className="card image-full shadow-sm ">
 
   <img src={slide3} className='w-full h-[60vh] object-cover' alt="" />
 
  <div className="card-body flex items-center justify-center md:mx-10">
    <div>
     <h2 className="card-title text-white font-bold text-5xl mb-3 capitalize">Our living pet's</h2>
  <p className='capitalize font-bold md:text-3xl text-slate-600'>snow or frost , your pets deserve the best! roads pet care deliveras warm , loving winter care-cleaning , gromming and pampering included</p>
    
    </div>
    
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div className="card image-full shadow-sm ">
 
    <img src={slide2} className='w-full h-[60vh] object-cover' alt="" />
 
  <div className="card-body flex items-center justify-center md:mx-10">
    <div>
      <h2 className="card-title font-bold text-white text-4xl md:text-5xl capitalize ">protecting your pets skin this winter</h2>
     <p className=' font-semibbold text-gray-800 text-lg md:text-2xl mt-4'>keep your pets cozy and healthy this winter with roads pet care. <br /> our expert team offer's grooming , bathing and bedding services <br /> to ensure your furry friend's warm and comfortable during the cold season</p>
    </div>
    
  </div>
</div>
</SwiperSlide>
</Swiper>
   {/* <div className="carousel w-full">
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
</div> */}
   </>
   
  );
};

export default Benner;