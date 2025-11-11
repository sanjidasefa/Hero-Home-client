import React, { use, useEffect, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { } from 'react-router';

const Tables = () => {
  const {user} = use(AuthContext)
  const [loader , setLoader] = useState(true)
  const [service,setService]= useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:3000/my-Services/${encodeURIComponent(user.email)}`,{
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
  
  const handleDelate = (id)=>{
    console.log(id)
    fetch(`http://localhost:3000/Service/${id}`,{
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
     
      
    })
    .catch(err => console.log(err))
  }

  return (
   <>
   <div className=''>
     <div className=''>
    
    <Table className=' text-white bg-green-400'>
  <Thead>
    <Tr className='border-2 border-blue-900'>
      <Th></Th>
      <Th className=''>Title</Th>
              <Th className='p-1 md:p-2 lg:p-3 '>Provider_Name</Th>
              <Th className='p-1 md:p-2 lg:p-3'>Date</Th>
              <Th className='p-1 md:p-2 lg:p-3'>Cetagory</Th>
              <Th className='p-1 md:p-2 lg:p-3'>Price</Th>
              <Th></Th>
    </Tr>
  </Thead>
  <Tbody>
       {service.map((table ,index) => (
              <Tr className=' border-2  border-blue-900'  key={table._id}>
                <Td  className='border-2  border-blue-900  p-1 md:p-2 lg:p-3'>{index+1}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.title}</Td>
                <Td className='border-2  border-blue-900  md:truncate  p-1 md:p-2 lg:p-3'>{table.providerName}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3' >{table.createdAt}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.category}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.price}</Td>
                <Td onClick={()=> handleDelate(table._id)} className='lg:flex items-center gap-2 p-1 md:p-2 lg:p-3 md:truncate'><RiDeleteBin5Fill />delete</Td>
              </Tr>
            ))}
         </Tbody>
</Table>

    </div>
   </div>
   </>
  );
};

export default Tables;