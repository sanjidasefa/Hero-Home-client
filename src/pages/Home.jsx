import React, {  } from 'react';
import { useLoaderData } from 'react-router';
import Benner from '../component/childComponent/Benner';
import Card from '../component/childComponent/Card';
import { TypeAnimation } from 'react-type-animation';
import * as motion from "motion/react-client"
import Category from './Category';

import Customer from './Customer';
import About from './About';



const Home = () => {
 const data = useLoaderData()
 //console.log(data)
  return (
   <>
     <div >

    {/* <Benner></Benner> */}
   </div>
   <div className='flex flex-col w-11/12 justify-center mx-auto items-center'>
   
   
   <div className='my-20'>
     <div className='text-blue-900 text-3xl font-bold my-5 text-center'>
     <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    "Letest Service Cetagory's",
    1000,
    ''
  ]}
  speed={20}
  repeat={Infinity}
/>
  </div>
  <p className='text-green-400 text-lg text-center my-10'>Discover our newest offerings — high-quality, trusted local services now available near you. From electricians and plumbers to cleaners, HomeHero keeps expanding to meet your needs quickly and reliably.</p>
    <Category></Category>
   </div>

 <div className=''>
   <div className='text-blue-900 text-3xl text-center font-bold'>
     <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Our Service',
    1000,
    ''
  ]}
  speed={20}
  repeat={Infinity}
/>
  </div>
  <p  className='text-green-400 text-lg text-center my-10'>Connect with trusted local service providers, manage bookings, and get things done effortlessly.</p>
   <div className='flex justify-center items-center'>
     <motion.div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 '>

      {
        data?.map(service=> <Card key={service._id} service={service}></Card>)
      }
    </motion.div>
   </div>
 </div>

<div className='my-20'>
  <div className='text-blue-900 font-bold my-5 text-3xl text-center'>
     <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Customer Analytics & Testmonials',
    1000,
    ''
  ]}
  speed={20}

  repeat={Infinity}
/>
  </div>
   <Customer></Customer>
</div>

<div className='mb-20'>
  <div className='text-blue-900 font-bold my-5 text-3xl text-center'>
     <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'About Us',
    1000,
    ''
  ]}
  speed={20}
  repeat={Infinity}
/>
  </div>
   <About></About>
</div>
   </div>
   </>
  );
};

export default Home;