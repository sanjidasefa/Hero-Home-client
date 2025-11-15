import React, { use } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../../auth/context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
  const {user}=use(AuthContext)
  const navigate = useNavigate()
  const handleAddService = (e)=>{
    e.preventDefault()
    const addService = {
  title : e.target.name.value,
  image : e.target.photo.value,
  price : parseFloat(e.target.price.value),
  category : e.target.category.value,
  providerName : e.target.provider.value,
  description : e.target.description.value,
  email : user.email,
  createdAt : new Date().toLocaleDateString(),
  rating : 0,
  review :[],
  }
  fetch('http://localhost:3000/Service',{
    method: "POST",
    headers: {
     "content-type" : "application/json"
    },
    body : JSON.stringify(addService)
  })
  .then(res=> res.json())
  .then(data =>{
    toast.success('Successfully Added your Service')
    navigate('/service')
    console.log(data)
    e.target.reset()
  })
  .catch(err => {
    toast.error('Please try again')
    console.log(err)})
  }
  return (
    <div className='my-10'>
      <Toaster></Toaster>
       <h1 className='text-center text-blue-900  font-bold text-3xl'>Add-Your-service</h1>
       <p className='text-center text-green-400 my-5 text-xl'>Fill out the form below to add your service and start reaching more customers.</p>
    
      <form className='flex justify-center items-center' onSubmit={handleAddService}>
        <div className=" text-2xl border-base-300 rounded-box  w-[350px] border px-4">
     <label className="label text-blue-900 text-sm my-2">Service-name : </label>
  <input type="text" name='name'required  className="input bg-white textarea-info text-blue-900" placeholder="Enter your Service Name" />
  
   <label className="label  text-blue-900 text-sm my-2">Service Photo URL : </label>
  <input type="text" required className="input textarea-info bg-white text-blue-900" name='photo' placeholder=" Enter your Service Photo URL" />

  <label className="label  text-blue-900 text-sm my-2">Email : </label>
  <input type="email"  name='email' value={user?.email || ''} readOnly className="input textarea-info bg-white text-blue-900" placeholder="Enter your Email " />

  <label className="label  text-blue-900 text-sm my-2">Provider Name : </label>
  <input type="text" required name='provider' className="input textarea-info bg-white text-blue-900" placeholder="Enter Provider name" />

<label className="label  text-blue-900 text-sm my-2">Description : </label>
  <textarea name='description' required placeholder="Enter your Service Description" className="textarea textarea-info bg-white text-blue-900"></textarea>
 
<div className=''>
  <div className='flex '>
     <label className="label  text-blue-900 text-sm mr-22 my-2">Category : </label>
    <label className="label  text-blue-900 text-sm  my-2">Price : </label>
  </div>
 <div className='flex justify-around gap-3.5'>
   <input type="text" name='category' required className="input textarea-info bg-white text-blue-900" placeholder="your Category" />
  <input type="number" name='price' required className="input textarea-info bg-white text-blue-900" placeholder="Price" />
 </div>
 </div>
 
 <div className='flex justify-center items-center'>
  <button className="btn w-full text-xl bg-green-400 text-white font-medium rounded-2xl m-3">Add your Service</button>
 </div>
</div>
      </form>
    </div>
  );
};

export default AddService;