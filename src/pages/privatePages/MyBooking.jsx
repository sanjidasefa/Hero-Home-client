import React, { use, useEffect, useState } from 'react';
import Tables from '../../component/childComponent/Tables';
import AuthContext from '../../auth/context/AuthContext';
import BookingTable from '../../component/childComponent/BookingTable';
import Review from '../../component/childComponent/Review';


const MyBooking = () => {
  const {user} = use(AuthContext)
  const [loader , setLoader] = useState(true)
  const [service,setService]= useState([])
  useEffect(()=>{
    fetch(`https://hero-home-neon.vercel.app/My-booking/${user.email}`,{
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
    return <div className='w-11/12 p-40 m-auto items-center flex justify-center '><span className="loading bg-blue-900 loading-bars loading-xl"></span></div>
  }

  return (
    <>
     <div>
       <div className='w-11/12 mx-auto items-center flex justify-center my-10'>
       <BookingTable service={service}></BookingTable>
      </div>
    
     </div>
    </>
  );
};

export default MyBooking;