import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import profile from '../../assets/profile.png'
import { FcRating } from "react-icons/fc";
const Review = ({id ,user}) => {
  // console.log(id,user)
  const [reviews , setReview] = useState([] )
   const [loading , setloading]  = useState(true)

   useEffect(()=>{
    fetch(`https://hero-home-neon.vercel.app/Service/${id}`)
    .then(res => res.json())
    .then(data =>{
       setReview(data.review || [])
      setloading(false)
    })
  },[id])
  const handleReview = e =>{
    e.preventDefault()
    const name = e.target.name.value || user.displayName
    const rating = parseFloat(e.target.rating.value)
 const comment = e.target.comment.value 
 const newReview = {
  name ,
  photo : user.photoURL,
  email : user.email,
  rating :rating, 
  comment,
  createdAt : new Date(),
 }
 fetch(`https://hero-home-neon.vercel.app/Service/${id}/review` , {
      method : 'POST',
      headers:{
          "content-type" : "application/json"
      },
      body : JSON.stringify(newReview)
    })
    .then(res=> res.json())
    .then(() =>{
      toast.success('Your Feedback added')
      setReview(cmt => [...cmt , newReview])
    fetch(`https://hero-home-neon.vercel.app/Service/${id}`)
    .then(res=> res.json())
    .then(data => setReview(data.review || [...reviews, newReview]))
     })
      .catch(err => console.log(err))
 }
    if(loading){
    return <div className='w-11/12 m-auto items-center flex justify-center p-40'><span className="loading bg-blue-900 loading-bars loading-xl"></span></div>
  }
  return (
    <div className=''>
      <Toaster></Toaster>
      <h1 className='text-blue-900 text-xl font-semibold my-5'>Submit your Feedback : </h1>
      {
        reviews.map((client =>(
         <div  className='bg-white p-3  rounded-2xl mb-2 ' key={client._id}>
           <div className='flex gap-5'>
             <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL || profile }
                alt=""
             />
           <div>
             <p className='text-xl text-blue-900 font-bold flex items-center'> {client.name} (<FcRating></FcRating> : {client.rating})</p>
            <p className='text-sm text-blue-900 font-semibold mt-3'>Your Feedback : <span className='text-sm text-green-400'> {client.comment}</span></p>
           
           </div>
         </div>
            <p className='text-[10px] text-green-400 text-end mt-3'>{new Date(client.createdAt).toLocaleDateString()}</p>
          </div>
        )))
      }
      {
        user && (
           <form className='' onSubmit={handleReview}>
             <div className='flex justify-between  items-center'>
              <div>
                <label className="label text-blue-900 text-sm  my-2">Customer Name : </label>
  <input type="text" defaultValue={user?.displayName || ''} name='name' className="input bg-white textarea-info text-blue-900" placeholder="Enter your Name" />
              </div>
             <div>
              <label className="label text-blue-900 text-sm my-2"></label>
 <div className="rating">
  {
    [1,2,3,4,5,6].map(n=>(
          <input key={n} value={n} type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label={n} />
    ))
  }
 
</div>
             </div>
             </div>
           <div className='mt-2 w-2xl flex flex-col'>
            <label className="label  text-blue-900 text-sm">Comment : </label><br />
  <textarea name='comment' placeholder="Enter your Feedback" className="textarea textarea-info bg-white text-blue-900"></textarea>
  <button  className="btn w-1/3 text-xl bg-green-400 text-white font-medium rounded-2xl m-3" type='submit'>Submit review</button>
           </div>
           </form>
        )
      }
    </div>
  );
};

export default Review;