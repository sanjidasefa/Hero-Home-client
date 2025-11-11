import React, {  } from 'react';
import { useLoaderData } from 'react-router';
import Benner from '../component/childComponent/Benner';
import Card from '../component/childComponent/Card';

const Home = () => {
 const data = useLoaderData()
 //console.log(data)
  return (
   <>
   <Benner></Benner>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 my-20 '>
      {
        data?.map(service=> <Card key={service._id} service={service}></Card>)
      }
    </div>
   </>
  );
};

export default Home;