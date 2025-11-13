import React, {  use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { CiTimer } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import AuthContext from '../../auth/context/AuthContext';
import toast from 'react-hot-toast';

const Details = () => {
  const {user} = use(AuthContext)
  const [modal , setModal] = useState(false)
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
  
  const handleBook = e => {
    e.preventDefault();
    const addBooking = {
      bookingID : service._id,
     price : service.price,
     booked_by : user.email,
     bookingDate : e.target.date.value,
     address : e.target.address.value,
     number : e.target.number.value
  }
    fetch(`http://localhost:3000/My-booking` , {
      method : 'POST',
      headers:{
          "content-type" : "application/json"
      },
      body : JSON.stringify(addBooking)
    })
    .then(res=> res.json())
    .then(data =>{
      toast.success('added')
      setModal(false)
    console.log(data)
     })
      .catch(err => console.log(err))
  }

  if(loader){
    return <div className='w-11/12 m-auto items-center flex justify-center p-40'><span className="loading bg-blue-900 loading-bars loading-xl"></span></div>
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
         
<button className="btn  text-lg bg-green-400 text-white  rounded-2xl mt-3" onClick={()=> setModal(true)}>Book Now</button>
{
  modal && (
    <dialog open id="my_modal_5" className=" modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-green-400 border-2 border-blue-900 text-white">
    <h3 className="font-bold text-blue-900 text-lg"> Fill The Form For Book Our Service</h3>
    <p className="py-4 text-2xl">{service.title}</p>
    <div>
      <form onSubmit={handleBook} >
        <div className=" text-2xl w-[400px] px-4"> 
          <label className="label mr-3 text-blue-900 text-sm my-2">
             E-mail :{" "}
            </label>
            <input
              type="text"
              className="input textarea-info bg-white text-blue-900"
              name="email"
              placeholder=" example@gmail.com"
              value={user?.email || ''}
              readOnly
            />
          <label className="label mr-3 text-blue-900 text-sm my-2">
             Service ID :{" "}
            </label>
            <input
              type="text"
              className="input textarea-info bg-white text-blue-900"
              name="bookingID"
              defaultValue={service._id}
              placeholder="Enter SErvice ID"
            />
        <label className="label mr-3 text-blue-900 text-sm my-2">
             Price :{" "}
            </label>
            <input
              type="text"
              className="input textarea-info bg-white text-blue-900"
              name="price"
              defaultValue={service.price}
              placeholder=" Service Price"
            />
        <label className="label mr-3 text-blue-900 text-sm my-2">
             Booking Date :{" "}
            </label>
            <input
              type="date"
              className="input textarea-info bg-white text-blue-900"
              name="date"
              required
              placeholder=" yy/mm/dd"
            />
        <label className="label mr-3 text-blue-900 text-sm my-2">
            Address : {" "}
            </label>
            <input
              type="text"
              required
              className="input textarea-info bg-white text-blue-900"
              name="address"
              placeholder="Enter your Home Address"
            />
        <label className="label mr-3 text-blue-900 text-sm my-2">
            Contact Number : {" "}
            </label>
            <input
            required
              type="text"
              className="input textarea-info bg-white text-blue-900"
              name="number"
              placeholder="Enter yourContact Number"
            />

        </div>
      </form>
    </div>
    <div className="modal-action">
        <button type='button' className='btn  text-lg bg-green-400 text-white rounded-2xl mt-3' onClick={()=> setModal(false)} >Close</button>
        <button type='submit' className='btn  text-lg bg-green-400 text-white  rounded-2xl mt-3' >book Now</button>
    </div>
  </div>
</dialog>
  )
}
      </div>
    
      </div>
    </div>
  );
};

export default Details;