import React, {  } from 'react';
import { useLoaderData } from 'react-router';
import Benner from '../component/childComponent/Benner';
import Card from '../component/childComponent/Card';
import { TypeAnimation } from 'react-type-animation';
import * as motion from "motion/react-client"

const Home = () => {
 const data = useLoaderData()
 //console.log(data)
  return (
   <>
   <div className='flex flex-col w-11/12 justify-center mx-auto items-center'>
    <div>
    <Benner></Benner>
   </div>
  <div className='text-blue-900 font-bold'>
     <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Our Service',
    1000,
    ''
  ]}
  speed={20}
  style={{ fontSize: '2em'}}
  repeat={Infinity}
/>
  </div>
    <motion.div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 my-20 '>

      {
        data?.map(service=> <Card key={service._id} service={service}></Card>)
      }
    </motion.div>
   </div>
   </>
  );
};

export default Home;