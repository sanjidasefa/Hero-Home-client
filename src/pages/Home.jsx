import React, {  } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../component/childComponent/Card';
import { TypeAnimation } from 'react-type-animation';
import * as motion from "motion/react-client"
import Category from './Category';
import customer from '../assets/customer.png'
import Customer from './Customer';
import About from './About';
import about from '../assets/about.png'
import ser from '../assets/service.png'
import cat from '../assets/cat.png'
import Slider from '../component/childComponent/Slider';

const Home = () => {
 const data = useLoaderData()
 //console.log(data)
  return (
   <>
  
   <div className='flex flex-col w-11/12 justify-center mx-auto items-center'>
     <div className='bg-green-900 mt-2 p-2 rounded-2xl'>
           <Slider></Slider>
         </div>
   <div className='my-20 '>
     <div className='flex gap-2 items-center justify-center'>
      <img src={cat} alt="" />
      <div className='text-blue-900 text-3xl font-bold my-5 text-center'>
     <TypeAnimation
  sequence={[
    "Letest Service Cetagory's",
    1000,
    ''
  ]}
  speed={20}
  repeat={Infinity}
/>
     </div>
  </div>
  <p className='text-green-400 text-lg text-center my-10'>Discover our newest offerings — high-quality, trusted local services now available near you. From electricians and plumbers to cleaners, HomeHero keeps expanding to meet your needs quickly and reliably.</p>
    <Category></Category>
   </div>

 <div className=''>
   <div className='flex gap-2 items-center justify-center'>
    <img src={ser} alt="" />
    <div className='text-blue-900 text-3xl text-center font-bold'>
     <TypeAnimation
  sequence={[
    'Our Service',
    1000,
    ''
  ]}
  speed={20}
  repeat={Infinity}
/>
   </div>
  </div>
  <p  className='text-green-400 text-lg text-center my-10'>Connect with trusted local service providers, manage bookings, and get things done effortlessly.</p>
   <div className='flex justify-center items-center '>
     <motion.div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 '>
      {
        data?.map(service=> <Card key={service._id} service={service}></Card>)
      }
    </motion.div>
   </div>
 </div>

<div className='my-20  w-full rounded-2xl p-10'>
  <div className='flex gap-2 items-center justify-center'>
    <img src={customer} alt="" />
    <div className='text-blue-900 font-bold my-5 text-3xl text-center'>
     <TypeAnimation
  sequence={[
    'Customer Analytics & Testmonials',
    1000,
    ''
  ]}
  speed={20}

  repeat={Infinity}
/>
  </div>
  </div>
   <Customer></Customer>
</div>

<div className='bg-green-100 dark:bg-transparent mb-20'>
 <div className='flex gap-2 items-center justify-center'>
  <img src={about} alt="" />
   <div className='text-blue-900 font-bold my-5 text-3xl text-center'>
     <TypeAnimation
  sequence={[
    'About Us',
    1000,
    ''
  ]}
  speed={20}
  repeat={Infinity}
/>
 </div>
  </div>
   <About></About>
</div>
   </div>
   </>
  );
};

export default Home;