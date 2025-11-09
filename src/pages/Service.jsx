import React from 'react';
import Card from '../component/childComponent/Card';
import { useLoaderData } from 'react-router';

const Service = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <h1 className='text-center text-blue-900 mt-10 font-bold text-3xl'>Our All Services</h1>
       <div className='grid grid-cols-3 xl:grid-cols-4 gap-20 my-20 '>
        
      {
        data.map(service=> <Card service={service}></Card>)
      }
    </div>
    </div>
  );
};

export default Service;