import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"; // Note: changed from "motion/react"
import metting from '../assets/metting.jpg';
import org from '../assets/0rg.jpg';
import cmt from '../assets/cmt.jpg';
import opp from '../assets/opp.jpg';
import oil from '../assets/oil.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';

const initialImages = [
  { id: 1, src: metting, label: "Meetings" },
  { id: 2, src: org, label: "Organization" },
  { id: 3, src: cmt, label: "Community" },
  { id: 4, src: opp, label: "Opportunities" },
  { id: 5, src: oil, label: "Industry" },
  { id: 6, src: slide4, label: "Modern Living" },
  { id: 7, src: slide5, label: "Architecture" },
];

const Category = () => {
  const [items, setItems] = useState(initialImages);
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => [...prev].sort(() => Math.random() - 0.5));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-blue-950 dark:text-slate-600 mb-2">
          Explore Our <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-slate-500">Discover the moments and spaces we create</p>
      </div>

      <motion.ul 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none p-0"
      >
        {items.map((item) => (
          <motion.li
            key={item.id} 
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              layout: { type: "spring", stiffness: 200, damping: 20 },
              opacity: { duration: 0.5 }
            }}
            className="relative h-[250px] overflow-hidden rounded-2xl cursor-pointer group"
          >
            {/* Overlay Gradient for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white font-bold text-lg">{item.label}</span>
            </div>

            <img 
              src={item.src} 
              alt={item.label} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Decorative Border */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300 z-20"></div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Category;