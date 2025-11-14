import React, { use, useEffect, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router';
import { FaRegEdit } from "react-icons/fa";
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
    return <div className='w-11/12 m-auto items-center flex justify-center p-40'><span className="loading loading-bars bg-blue-900 loading-xl"></span></div>
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
     <div className='overflow-x-auto shadow-lg'>
    
    <Table className=' min-w-full text-sm  text-white bg-green-400'>
  <Thead>
    <Tr className='border-2 border-blue-900'>
     
      <Th className=''>Title</Th>
              <Th className='p-1 md:p-2 lg:p-3 '>Provider_Name</Th>
              <Th className='p-1 md:p-2 lg:p-3'>Date</Th>
              <Th className='p-1 md:p-2 lg:p-3'>Cetagory</Th>
              <Th className='p-1 md:p-2 lg:p-3'>Price</Th>
              
    </Tr>
  </Thead>
  <Tbody>
       {service.map((table ,index) => (
              <Tr className=' border-2 hover:bg-blue-900 border-blue-900'  key={table._id}>
                <Td  className='border-2  border-blue-900  p-1 md:p-2 lg:p-3'>{index+1}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.title}</Td>
                <Td className='border-2  border-blue-900  md:truncate  p-1 md:p-2 lg:p-3'>{table.providerName}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3' >{table.createdAt}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.category}</Td>
                <Td className='border-2  border-blue-900 md:truncate p-1 md:p-2 lg:p-3'>{table.price}</Td>
                <Td onClick={()=> handleDelate(table._id)} className='lg:flex  hover:text-green-400 items-center gap-2 p-1 md:p-2 lg:p-3 md:truncate'><RiDeleteBin5Fill />delete</Td>
                <Td  className='lg:flex border-2  border-blue-900 hover:text-green-400 items-center gap-2 p-1 md:p-2 lg:p-3 md:truncate'><Link to={`/update-route/${table._id}`}><FaRegEdit />Edit</Link></Td>
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