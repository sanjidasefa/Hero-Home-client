import React from 'react';
import { BsCheck2Circle } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    "Verified and reliable service providers",
    "Quick and Easy Booking System",
    "High-quality support & maintenance",
    "Customer Privacy Protection",
    "Easy Service Management System"
  ];

  return (
    <section className="py-12 bg-base-100 text-base-content">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">  
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
                Why Choose Us
              </h2>

              <h1 className="text-3xl md:text-4xl font-black leading-tight">
                Empowering Businesses with <br /> 
                <span className="text-green-500">Smart Digital Solutions</span>
              </h1>
            </div>

            <p className="opacity-80 text-base md:text-lg leading-relaxed">
              We provide complete digital solutions including modern web development, data-driven marketing, and creative UI/UX design. Our goal is to help businesses grow faster with high-quality service and long-term technical support.
            </p>
            <div className="bg-base-200 p-6 rounded-2xl border-l-4 border-primary">
              <h3 className="font-bold text-xl mb-2">Our Vision</h3>
              <p className="opacity-70">
                To be the most trusted platform connecting businesses with smart digital solutions worldwide.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-base-100 p-8 rounded-3xl shadow-2xl border border-base-300"
          >
            <h3 className="text-2xl font-bold mb-6">
              Why People Trust Us
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-success/20 p-1 rounded-full">
                    <BsCheck2Circle className="text-success text-xl" />
                  </div>
                  <span className="font-medium opacity-90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-base-300">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-base-100 bg-base-300" />
                  ))}
                </div>
                <p className="text-sm font-bold opacity-60">
                  Joined by <span className="text-primary">500+</span> Companies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;