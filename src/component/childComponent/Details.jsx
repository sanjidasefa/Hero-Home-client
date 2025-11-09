import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
  const {id}=useParams()
  const [service , setService ] = useState([])
  const [loader , setloader]  = useState(true)
  // console.log(service)
  useEffect(()=>{
    fetch(`http://localhost:3000/Service/${id}`)
    .then(res => res.json())
    .then(data =>{
      setService(data)
      setloader(false)
    })
  },[id])
  
  if(loader){
    return <div><span className="loading loading-bars loading-xl"></span></div>
  }

  return (
    <div className='my-10'>
      {/* const {title,rating,image,price, createdBy} = service */}
      <div className='flex gap-10'>
        <img src={service.image} alt="" className='border-2 border-white rounded-xl' />
      <div>
        <h1 className='text-3xl text-blue-900 font-bold'>{service.title}</h1>
        <div className='bg-green-300 px-10 py-1 rounded-2xl my-5'>
          <p className='text-xl text-blue-700 my-5 '>{service.description}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;