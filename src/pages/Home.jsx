import React from 'react';
import { useLoaderData, useNavigate } from 'react-router'; // useNavigate add করলাম
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Card from '../component/childComponent/Card';
import Category from './Category';
import Customer from './Customer';
import About from './About';
import Slider from '../component/childComponent/Slider';
import customerIcon from '../assets/customer.png';
import aboutIcon from '../assets/about.png';
import serviceIcon from '../assets/service.png';

const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const SectionHeader = ({ icon, title, subtitle }) => (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center mb-12 text-center px-4"
    >
      <div className="flex items-center gap-3 mb-4 bg-base-200 px-6 py-2 rounded-full shadow-sm border border-base-300">
        <img src={icon} alt="" className="w-8 h-8 object-contain" />
        <h2 className="text-2xl md:text-3xl font-black text-base-content tracking-tight uppercase">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-2xl text-base-content/70 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-x-hidden">
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-11/12 mx-auto pt-6 px-4"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/5 bg-base-200">
          <Slider />
        </div>
      </motion.section>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-10"
      >
        <Category />
      </motion.div>

      <div className='border-b border-base-300 max-w-7xl mx-auto opacity-50 my-10'></div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            icon={serviceIcon}
            title={
              <TypeAnimation
                sequence={['Our Featured Services', 2000, 'Handpicked For You', 2000]}
                repeat={Infinity}
              />
            }
            subtitle="Connect with trusted local service providers and get things done effortlessly."
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } } // কার্ডগুলো একটার পর একটা আসবে
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {data?.slice(0, 6).map(service => (
              <motion.div key={service._id} variants={fadeInUp}>
                <Card service={service} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="mt-16 text-center"
          >
              <button 
                onClick={() => navigate('/services')}
                className="btn btn-primary btn-outline px-10 rounded-xl font-bold shadow-lg hover:shadow-primary/20"
              >
                View All Services
              </button>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-base-200/50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            icon={customerIcon}
            title="Success Stories"
            subtitle="See how we are helping thousands of homeowners find the right professionals."
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-base-100 rounded-[3rem] p-6 md:p-12 shadow-xl border border-base-300"
          >
            <Customer />
          </motion.div>
        </div>
      </section>

      {/* 5. About Section */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-4"
          >
             <div className="badge badge-primary badge-outline font-bold mb-4 p-4 animate-bounce">
                ABOUT OUR PLATFORM
             </div>
          </motion.div>
          <About />
        </div>
      </section>

    </div>
  );
};

export default Home;