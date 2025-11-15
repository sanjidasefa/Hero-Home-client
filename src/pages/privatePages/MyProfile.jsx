import React, { use, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import profile from '../../assets/profile.png'
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { FaRegEdit } from "react-icons/fa";

const MyProfile = () => {
   const [modal , setModal] = useState(false)
   const { user ,setUser } = use(AuthContext);

 const handleEdit = e => {
    e.preventDefault();
        const  name = e.target.name.value;
   const photo = e.target.photo.value;
   if(!auth.currentUser){
    return;
   }
   updateProfile(auth.currentUser,{
    displayName : name ,
    photoURL : photo
   }).then(()=>{
     toast.success('Profile Updated Successfully')
     const update = auth.currentUser
     setUser({...update})
     setModal(false)
     e.target.reset()
   })
   .catch(err=>{
    toast.error('Update Failed')
    console.log(err)
    e.target.reset()
   })
      
  }

  return (
    <>
    <Toaster></Toaster>
      <div className="py-5">
        <div className="">
          <div className="flex rounded-2xl justify-between items-center gap-6 bg-green-400 p-5">
           <div className='flex justify-center items-center gap-2'>
             <img
              className="w-20 h-20 rounded-full"
              src={user?.photoURL || profile}
              alt=""
            />
            <div className=''>
              <h1 className="text-2xl font-bold mt-3 capitalize">
                {user?.displayName || "anonymous peticipate"}
              </h1>
              <p className=" text-sm my-3 ">
                Email : <span className='text-blue-900 '> {user?.email}</span>
              </p>
              
            </div>
           </div>
             <p>
               Account Created_at : {new Date(user.metadata?.creationTime).toLocaleString()}
              </p>
              
               </div>
                    <p className='text-blue-900 text-sm text-end my-3'>
               last Login : {new Date(user.metadata?.lastSignInTime).toLocaleString()}
              </p> 
            <div>
              
              
             
            </div>
         
        </div>
       

         <button className="btn  text-lg bg-green-400 text-white  rounded-2xl mt-3" onClick={()=> setModal(true)}><FaRegEdit />Edit Profile</button>
{
  modal && (
    <dialog open id="my_modal_5" className=" modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-green-400 border-2 border-blue-900 text-white">
    <h3 className="font-bold text-blue-900 text-lg"><FaRegEdit /> Edit Profile</h3>
    
    <div>
      <form onSubmit={handleEdit} >
        <div className=" text-2xl w-[400px] px-4"> 
          <label className="label mr-3 text-blue-900 text-sm my-2">
             Name :{" "}
            </label>
            <input
              type="text"
              className="input textarea-info bg-white text-blue-900"
              name="name"
              placeholder=" Enter your name"
               defaultValue={user?.displayName || ''}
            />
         <label className="label  text-blue-900 text-sm my-2">
              Photo URL :{" "}
            </label>
            <input
              type="text"
              className="input textarea-info bg-white text-blue-900"
              name="photo"
              placeholder=" Enter your Photo URL"
              defaultValue={user.photoURL ||''}
            />

        </div>
          <div className="modal-action">
        <button type='button' className='btn  text-lg bg-green-400 text-white rounded-2xl mt-3' onClick={()=> setModal(false)} >Cancel</button>
        <button type='submit' className='btn  text-lg bg-green-400 text-white  rounded-2xl mt-3' >Save Changes</button>
    </div>
      </form>
    </div>
  
  </div>
</dialog>
  )
}

      </div>
    </>
  );
};


export default MyProfile;