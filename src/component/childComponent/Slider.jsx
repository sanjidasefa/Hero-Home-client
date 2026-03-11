import React from 'react';
import { Link } from 'react-router';
import slide1 from '../../assets/0rg.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide5.jpg';
import slide5 from '../../assets/slide6.jpg';

const Slider = () => {
  const slides = [
    {
      id: "slide1",
      prev: "#slide5",
      next: "#slide2",
      image: slide2,
      title: "Luxury Living Starts Here",
      description: "Experience the perfect blend of architecture and sophistication in our premium homes.",
      textColor: "text-white"
    },
    {
      id: "slide2",
      prev: "#slide1",
      next: "#slide3",
      image: slide3,
      title: "Modern Duplex Architecture",
      description: "Explore luxurious, thoughtfully designed houses built for a modern lifestyle.",
      textColor: "text-white"
    },
    {
      id: "slide3",
      prev: "#slide2",
      next: "#slide4",
      image: slide4,
      title: "Elegant Lifestyle Choices",
      description: "Spacious, modern duplex houses built with elegance and comfort at every corner.",
      textColor: "text-white"
    },
    {
      id: "slide4",
      prev: "#slide3",
      next: "#slide5",
      image: slide5,
      title: "Your Dream Home Awaits",
      description: "Discover modern, elegant duplex houses designed for comfort and peace.",
      textColor: "text-white"
    },
    {
      id: "slide5",
      prev: "#slide4",
      next: "#slide1",
      image: slide1,
      title: "Reliable Home Services",
      description: "Get quality services delivered to your doorstep—quickly and safely.",
      textColor: "text-white"
    }
  ];

  return (
    <div className='w-full max-w-[1440px] mx-auto px-0 md:px-4'>
      <div className="carousel w-full h-[50vh] md:h-[70vh] rounded-none md:rounded-3xl shadow-2xl overflow-hidden">
        {slides.map((slide) => (
          <div key={slide.id} id={slide.id} className="carousel-item relative w-full group">
            
            {/* Image Layer */}
            <div className="w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover" 
              />
              {/* Professional Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-center justify-start px-12 md:px-24">
              <div className="max-w-xl text-left animate__animated animate__fadeInLeft">
                <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 ${slide.textColor} leading-tight`}>
                  {slide.title}
                </h2>
                <p className="text-sm md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <Link to='/Service' className="btn btn-primary btn-md md:btn-lg rounded-xl px-8 border-none bg-green-500 hover:bg-green-600 text-white">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={slide.prev} className="btn btn-circle btn-ghost bg-white/20 backdrop-blur-md text-white border-none hover:bg-white/40">❮</a>
              <a href={slide.next} className="btn btn-circle btn-ghost bg-white/20 backdrop-blur-md text-white border-none hover:bg-white/40">❯</a>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;