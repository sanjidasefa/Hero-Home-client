import React, { use, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import profile from '../../assets/profile.png'
import { auth } from '../../firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { FaRegEdit, FaEnvelope, FaClock, FaHistory } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const MyProfile = () => {
  const [modal, setModal] = useState(false);
  const { user, setUser } = use(AuthContext);

  const handleEdit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (!auth.currentUser) return;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    }).then(() => {
      toast.success('Profile Updated Successfully');
      setUser({ ...auth.currentUser });
      setModal(false);
    })
      .catch(err => {
        toast.error('Update Failed');
        console.error(err);
      });
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Toaster />

      {/* Profile Card Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-base-100 border border-base-300 shadow-2xl rounded-[2.5rem] overflow-hidden"
      >
        <div className="h-32 bg-gradient-to-r from-primary to-blue-600"></div>
        
        <div className="px-6 pb-8">
          <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16 mb-6">
            <div className="relative">
              <img
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-base-100 shadow-xl object-cover bg-base-200"
                src={user?.photoURL || profile}
                alt="Profile"
              />
              <button 
                onClick={() => setModal(true)}
                className="absolute bottom-2 right-2 p-3 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <FaRegEdit />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left pt-2">
              <h1 className="text-3xl font-black text-base-content capitalize tracking-tight">
                {user?.displayName || "Anonymous User"}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-base-content/60">
                <FaEnvelope className="text-primary" />
                <span className="font-medium">{user?.email}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-base-200 pt-6">
            <div className="flex items-center gap-3 p-4 bg-base-200/50 rounded-2xl">
              <FaClock className="text-primary text-xl" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-50">Account Created</p>
                <p className="text-sm font-semibold">{new Date(user.metadata?.creationTime).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-base-200/50 rounded-2xl">
              <FaHistory className="text-primary text-xl" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-50">Last Active</p>
                <p className="text-sm font-semibold">{new Date(user.metadata?.lastSignInTime).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Edit Modal */}
      <AnimatePresence>
        {modal && (
          <dialog open className="modal modal-middle bg-black/60 backdrop-blur-sm transition-all">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-box bg-base-100 border border-base-300 rounded-[2rem] p-8"
            >
              <h3 className="font-black text-2xl flex items-center gap-2 mb-6 text-primary">
                <FaRegEdit /> Update Profile
              </h3>
              
              <form onSubmit={handleEdit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold opacity-70">Display Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName || ''}
                    className="input input-bordered bg-base-200 focus:outline-primary font-semibold"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold opacity-70">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={user?.photoURL || ''}
                    className="input input-bordered bg-base-200 focus:outline-primary font-semibold"
                    placeholder="Enter image URL"
                  />
                </div>

                <div className="modal-action gap-3">
                  <button 
                    type='button' 
                    className='btn btn-ghost rounded-xl' 
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type='submit' 
                    className='btn btn-primary px-8 rounded-xl shadow-lg shadow-primary/20'
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyProfile;