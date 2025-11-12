import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { CiTimer } from "react-icons/ci";
import { FcRating } from "react-icons/fc";

const Details = () => {
  const {id }=useParams()
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
    return <div className='w-11/12 mx-auto items-center flex justify-center '><span className="loading loading-bars loading-xl"></span></div>
  }

  return (
    <div className='my-10'>
      {/* const {title,rating,image,price, createdBy} = service */}
      <div className='flex flex-col lg:flex-row  gap-10'>
        <img src={service.image} alt="" className='border-8 border-green-300 rounded-xl' />
      <div>
       
         <span className='text-sm text-blue-900 font-semibold bg-green-200 px-4 py-2 rounded-lg '>{service.category}</span>
      
        <h1 className='text-3xl text-blue-900 mb-3 font-bold mt-5'>{service.title}</h1>
        
        <span className='text-xl font-bold text-blue-900 shadow-green-300 shadow-sm py-1 px-5 rounded-lg w-1/4 flex'><span><GrMoney className='mr-2'/></span> ${service.price}</span>
        <div className='bg-white border-2 border-green-300  px-10 py-1 rounded-2xl my-5'>
          <h1 className='text-2xl text-blue-900 font-bold my-2 flex gap-3'><BsFillPersonLinesFill className=''/>{service. providerName}</h1>
          <p className='text-sm text-green-300 mb-2 '>Email :  {service.email}</p>
          <h2 className='text-xl text-blue-900 '>Description : </h2>
          <p className='text-lg mt-2 text-blue-700'>{service.description}</p>
          <div className='flex gap-2 justify-between items-center'>
   <p className='text-sm text-blue-900  my-5 flex items-center justify-center gap-2'><FcRating></FcRating>{service.rating}</p>
  <p className='text-sm text-blue-900  my-5 flex items-center justify-center gap-2'><CiTimer />{service.createdAt}</p>
          </div>
         
        </div>
         <Link to={`/update-route/${service._id}`} className="btn  text-lg bg-green-400 text-white  rounded-2xl mt-3 mr-6">Update-Service</Link>

<button className="btn  text-lg bg-green-400 text-white  rounded-2xl mt-3" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
       
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

      </div>
    
      </div>
    </div>
  );
};

export default Details;