import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Review = ({id ,user}) => {
  console.log(id,user)
  const [reviews , setReview] = useState([] )
   const [loading , setloading]  = useState(true)

   useEffect(()=>{
    fetch(`http://localhost:3000/Service/${id}`)
    .then(res => res.json())
    .then(data =>{
       setReview(data.review || [])
      setloading(false)
    })
  },[id])
  const handleReview = e =>{
    e.preventDefault()
    const rating = e.target.rating?.value
 const comment = e.target.comment.value 
 const newReview = {
  name : user.displayName,
  email : user.email,
  rating : parseFloat(rating), 
  comment
 }
 fetch(`http://localhost:3000/services/${id}/review` , {
      method : 'POST',
      headers:{
          "content-type" : "application/json"
      },
      body : JSON.stringify(newReview)
    })
    .then(res=> res.json())
    .then(() =>{
      toast.success('added')
     
      e.target.reset()
    // console.log(data)
    fetch(`http://localhost:3000/Service/${id}`)
    .then(res=> res.json())
    .then(data => setReview(data.review || []))
     })
      .catch(err => console.log(err))
 }
    if(loading){
    return <div className='w-11/12 m-auto items-center flex justify-center p-40'><span className="loading bg-blue-900 loading-bars loading-xl"></span></div>
  }
  return (
    <div>
      <Toaster></Toaster>
      <h1>Our Customer Reviews</h1>
      {
        reviews.map((client =>(
          <div className='' key={client._id}>
            <p>{client.name} {client.rating}</p>
            <p>{client.comment}</p>
            <p>{new Date(client.createdAt).toLocaleDateString()}</p>
          </div>
        )))
      }
      {
        user && (
           <form className='flex justify-center flex-col items-center' onSubmit={handleReview}>
             <label className="label text-blue-900 text-sm my-2">Customer Name : </label>
  <input type="text" defaultValue={user?.displayName || ''} name='name' className="input bg-white textarea-info text-blue-900" placeholder="Enter your Name" />
           <label className="label  text-blue-900 text-sm my-2">Comment : </label>
  <textarea name='comment' placeholder="Enter your Feedback" className="textarea textarea-info bg-white text-blue-900"></textarea>
  <button  className="btn  text-xl bg-green-400 text-white font-medium rounded-2xl m-3" type='submit'>Submit review</button>
           </form>
        )
      }
    </div>
  );
};

export default Review;