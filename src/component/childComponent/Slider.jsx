import React, { } from 'react';
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide5.jpg'
import slide5 from '../../assets/slide6.jpg'
import slide1 from '../../assets/0rg.jpg' 
import { Link } from 'react-router';

const Slider = () => {
   return (
    <div className='w-[500px] md:w-full'>
       <div className="carousel shadow-2xl overflow-hidden h-[60vh] w-full">
        <div id="slide1" className="carousel-item relative w-full">
         <div className="card bg-base-100 w-full image-full shadow-sm">
  <figure>
   <img
            src={slide2}
            className="w-full" />
  </figure>
 
   <div className="card-body flex justify-center items-center text-center">
   <div>
     <h2  className="text-blue-900 text-2xl font-bold my-3 lg:text-3xl ">Luxury Living Starts Here</h2>
    <p className='text-sm lg:text-lg'>Experience the perfect blend of architecture, style, and sophistication in our premium duplex homes.</p>
     <Link to='/Service' className="btn w-1/3 text-lg bg-green-400 text-white  rounded-2xl mt-3">Explore More</Link>
   </div>
  </div>

</div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div> 
        </div>
        <div id="slide2" className="carousel-item relative w-full">
         <div className="card bg-base-100 w-full image-full shadow-sm">
  <figure>
   <img
            src={slide3}
            className="w-full h-[60vh]" />
  </figure>
 
   <div className="card-body flex justify-center items-center text-center">
   <div>
     <h2  className="text-green-600 text-3xl ">Find Your Perfect Modern Home</h2>
    <p className='text-white text-lg'>Explore luxurious, thoughtfully designed houses built for a modern lifestyle.</p>
     <Link to='/Service' className="btn w-1/3 text-lg bg-green-400 text-white  rounded-2xl mt-3">Explore More</Link>
   </div>
  </div>
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
</div>
          
        </div>
        <div id="slide3" className="carousel-item relative w-full">
         <div className="card bg-base-100 w-full image-full shadow-sm">
  <figure>
   <img
            src={slide4}
            className="w-full h-[60vh]" />
  </figure>
 
   <div className="card-body flex justify-center items-center text-center">
   <div>
     <h2  className="text-green-600 text-3xl ">A Home That Matches Your Lifestyle</h2>
    <p className='text-white text-lg'>Spacious, modern duplex houses built with elegance and comfort at every corner.</p>
     <Link to='/Service' className="btn w-1/3 text-lg bg-green-400 text-white  rounded-2xl mt-3">Explore More</Link>
   </div>
  </div>
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
</div>
          
        </div>
             <div id="slide4" className="carousel-item relative w-full">
         <div className="card bg-base-100 w-full image-full shadow-sm">
  <figure>
   <img
            src={slide5}
            className="w-full h-[60vh]" />
  </figure>
 
   <div className="card-body flex justify-center items-center text-center">
   <div>
     <h2  className="text-green-600 text-3xl ">Discover Premium Duplex Homes</h2>
    <p className='text-white text-lg'>Explore modern, elegant duplex houses designed for comfort, luxury, and a peaceful lifestyle.</p>
     <Link to='/Service' className="btn w-1/3 text-lg bg-green-400 text-white  rounded-2xl mt-3">Explore More</Link>
   </div>
  </div>
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
</div>
          
        </div>
        <div id="slide5" className="carousel-item relative w-full">
         <div className="card bg-base-100 w-full image-full shadow-sm">
  <figure>
   <img
            src={slide1}
            className="w-full h-[60vh]" />
  </figure>
 
   <div className="card-body flex justify-center items-center text-center">
   <div>
     <h2  className=" text-white text-3xl ">Fast, Reliable & Affordable Services</h2>
    <p className='text-green-600 text-lg'>Get quality services delivered to your doorstep—quickly and safely.</p>
     <Link to='/Service' className="btn w-1/3 text-lg bg-green-400 text-white  rounded-2xl mt-3">Explore More</Link>
   </div>
  </div>
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default Slider;