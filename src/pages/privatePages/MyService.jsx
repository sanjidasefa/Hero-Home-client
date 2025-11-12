import React, { use, useEffect, useState,} from 'react';
import AuthContext from '../../auth/context/AuthContext';
import Card from '../../component/childComponent/Card';
import Tables from '../../component/childComponent/Tables';

const MyService = () => {
  const {user} = use(AuthContext)
  const [loader , setLoader] = useState(true)
  const [service,setService]= useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/my-Services/${user.email}`,{
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
      <div className='w-11/12 mx-auto items-center flex justify-center my-10'>
       <Tables service={service}></Tables>
      
    </div>
      
    </>
  );
};

export default MyService;