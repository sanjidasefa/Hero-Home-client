import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import profile from '../../assets/profile.png'
import { FcRating } from "react-icons/fc";
const Review = ({id ,user}) => {
  // console.log(id,user)
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
    const rating = parseFloat(e.target.rating.value)
    let ratingValue = 0 ;
    for(let i = 0; i<rating.length; i++){
      if(rating[i].checked){
        ratingValue = parseFloat(rating[i].ariaLabel);
        console.log(ratingValue)
      }
    }
 const comment = e.target.comment.value 
 const newReview = {
  name : user.displayName,
  photo : user.photoURL,
  email : user.email,
  rating :rating, 
  comment,
 }
 fetch(`http://localhost:3000/Service/${id}/review` , {
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
  {/* <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" aria-label="5 star" /> */}
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