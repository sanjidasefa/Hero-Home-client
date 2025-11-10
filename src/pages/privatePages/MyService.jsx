import React, { use, useEffect, useState,} from 'react';
import AuthContext from '../../auth/context/AuthContext';

const MyService = () => {
  const {user} = use(AuthContext)
  const [loader , setLoader] = useState(true)
  const [service,setService]= useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/my-Services?email=${user.email}`,{
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
    return <div className='w-11/12 mx-auto items-center flex justify-center '><span className="loading loading-bars loading-xl"></span></div>
  }
  return (
    <>
      <div className='grid grid-cols-3  gap-20 my-20 '>
      {
        service.map(service=> <Card key={service._id} service={service}></Card>)
      }
    </div>
      
    </>
  );
};

export default MyService;