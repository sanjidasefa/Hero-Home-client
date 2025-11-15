import React, { } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router';

const Update = () => {
 const data = useLoaderData()
 const nevigate = useNavigate()
 console.log(data)
  const handleAddService = (e)=>{
    e.preventDefault()
    const addService = {
  title : e.target.name.value,
  image : e.target.photo.value,
  price : e.target.price.value,
  category : e.target.category.value,
  description : e.target.description.value,
  createdAt : new Date(),
  }
  fetch(`http://localhost:3000/Service/${data._id}`,{
    method: "PUT",
    headers: {
     "content-type" : "application/json"
    },
    body : JSON.stringify(addService)
  })
  .then(res=> res.json())
  .then(data =>{
    toast.success('Service Updated')
    nevigate('/service')
    console.log(data)
  })
  .catch(err => console.log(err))
  }
  return (
    <div>
      <Toaster></Toaster>
       <div className='my-10'>
       <h1 className='text-center text-blue-900  font-bold text-3xl'>Update-Your-service</h1>
       <p className='text-center text-green-400 my-5 text-xl'>Update your service details to ensure customers always get the latest and most accurate info.</p>
      <form onSubmit={handleAddService} className='flex justify-center items-center'>
        <div className=" text-2xl border-base-300 rounded-box  w-[350px] border px-4">
     <label className="label text-blue-900 text-sm my-2">Service-name : </label>
  <input type="text" defaultValue={data.title} name='name' className="input bg-white textarea-info text-blue-900" placeholder="Enter your Service Name" />
  
   <label className="label  text-blue-900 text-sm my-2">Service Photo URL : </label>
  <input type="text" defaultValue={data.image} className="input textarea-info bg-white text-blue-900" name='photo' placeholder=" Enter your Service Photo URL" />

<label className="label  text-blue-900 text-sm my-2">Description : </label>
  <textarea name='description' defaultValue={data.description} placeholder="Enter your Service Description" className="textarea textarea-info bg-white text-blue-900"></textarea>
 
<div className=''>
  <div className='flex '>
     <label className="label  text-blue-900 text-sm mr-22 my-2" >Category : </label>
    <label className="label  text-blue-900 text-sm  my-2">Price : </label>
  </div>
 <div className='flex justify-around gap-3.5'>
   <input type="text" name='category' defaultValue={data.category} className="input textarea-info bg-white text-blue-900" placeholder="your Category" />
  <input type="text" name='price' defaultValue={data.price} className="input textarea-info bg-white text-blue-900" placeholder="Price" />
 </div>
 </div>
 
 <div className='flex justify-center items-center'>
  <button className="btn w-full text-xl bg-green-400 text-white font-medium rounded-2xl m-3">Update Service</button>
 </div>
</div>
      </form>
    </div>
    </div>
  );
};

export default Update;