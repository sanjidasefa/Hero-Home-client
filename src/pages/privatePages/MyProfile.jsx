import React, { use, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import profile from '../../assets/profile.png'
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import toast from 'react-hot-toast';


const MyProfile = () => {
   const [modal , setModal] = useState(false)
   const { user , updateaProfiledtl ,setUser } = use(AuthContext);

 const handleBook = e => {
    e.preventDefault();
    
    const  name = e.target.name.value;
   const photo = e.target.photo.value;
   updateaProfiledtl({
    displayName : name ,
    photoURL : photo
   }).then(()=>{
      if(!auth.currentUser) return;
     toast.success('Profile Updated Successfully')
     setUser({...user , displayName : name , photoURL:photo})
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
      <div className="flex justify-center items-center flex-col pb-20">
        <div className="bg-white rounded-2xl pt-10 px-20 my-20 shadow-2xl">
          <div className="flex justify-center flex-col items-center py-10">
            <img
              className="w-50 h-50 shadow-2xl rounded-full border-8 border-white"
              src={user?.photoURL || profile}
              alt=""
            />
            <div>
              <h1 className="text-4xl font-bold mt-3 capitalize">
                {user?.displayName || "anonymous peticipate"}
              </h1>
              <p className=" text-2xl my-5 text-center ">
                Email : {user?.email}
              </p>
              <p>
               Account Created_at : {new Date(user.metadata?.creationTime).toLocaleString()}
              </p>
              <p>
               last Login : {new Date(user.metadata?.lastSignInTime).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
       

         <button className="btn  text-lg bg-green-400 text-white  rounded-2xl mt-3" onClick={()=> setModal(true)}>Book Now</button>
{
  modal && (
    <dialog open id="my_modal_5" className=" modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-green-400 border-2 border-blue-900 text-white">
    <h3 className="font-bold text-blue-900 text-lg"> Edit Profile</h3>
    
    <div>
      <form onSubmit={handleBook} >
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


// ○ Design the user profile page as you wish, but it will show the user&#39;s basic info
// like: email, name, photo, last login time, etc.
// ○ Update Profile option: implement the user update profile option to update the
// user name and image. Design is up to you.
export default MyProfile;