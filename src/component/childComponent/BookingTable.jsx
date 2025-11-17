
import React, { use, useEffect, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const BookingTable = () => {
   const {user} = use(AuthContext)
  const [loader , setLoader] = useState(true)
  const [service,setService]= useState([])
  
  useEffect(()=>{
    fetch(`https://hero-home-neon.vercel.app/My-booking/${encodeURIComponent(user.email)}`,{
      headers:{
        autorization : `bearar ${user.accessToken}`
      }
    })
    .then(res=> res.json())
    .then(data=> {
      setService(data)
      setLoader(false)
    })
  },[user])

  if(loader){
    return <div className='w-11/12 m-auto items-center flex justify-center p-40'><span className="loading loading-bars bg-blue-900 loading-xl"></span></div>
  }
  
  const handleDelate = (id)=>{
    console.log(id)
    fetch(`https://hero-home-neon.vercel.app/Service/${id}`,{
      method : "DELETE" ,
      headers : {
        'content-type' : 'application/json'
      }
    })
    .then(res=> res.json())
    .then(data => {
      if(data.deletedCount>0){
        setService(table => table.filter(item=> item._id !== id))
      }
     toast.success('Your Bokking is Cancelled')
      
    })
    .catch(err => console.log(err))
  }

  return (
   <>
   <div className=''>
   
<div className="overflow-x-auto shadow-lg ">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th className='p-1 md:p-2 lg:p-3 '>Service Name</th>
              <th className='p-1 md:p-2 lg:p-3 '>Customer name</th>        
            <th className='p-1 md:p-2 lg:p-3'>Date</th>
              <th className='p-1 md:p-2 lg:p-3'>Address</th>
              <th className='p-1 md:p-2 lg:p-3'>Contact Number</th>
              <th className='p-1 md:p-2 lg:p-3'>Price</th>
              <th className='p-1 md:p-2 lg:p-3'>Contact Number</th>
      </tr>
    </thead>
    <tbody>
    
        {service.map((table ,index) => (
              <tr className=' border-2 hover:bg-blue-900 border-blue-900'  key={table._id}>
                <td  className='border-2  border-blue-900  p-1 md:p-2 lg:p-3'>{index+1}</td>
                <td className='border-2  border-blue-900  md:truncate  p-1 md:p-2 lg:p-3'>{table.Service_name}</td>
                 <td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.booked_by}</td>
                <td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3' >{table.bookingDate}</td>
              <td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.address}</td>
             <td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.number}</td>
                <td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.price}</td>
                <td onClick={()=> handleDelate(table._id)} className='lg:flex items-center gap-2 p-1 md:p-2 lg:p-3 hover:text-green-400 md:truncate'><RiDeleteBin5Fill />Cancel</td>
              </tr>
            ))}
     
     
    </tbody>
    
  </table>
</div>

   
   </div>
   </>
  );
};

export default BookingTable;
