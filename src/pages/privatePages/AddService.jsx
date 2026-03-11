import React, { use } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../../auth/context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { MdAddCircleOutline } from "react-icons/md";

const AddService = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const addService = {
      title: form.name.value,
      image: form.photo.value,
      price: parseFloat(form.price.value),
      category: form.category.value,
      providerName: form.provider.value,
      description: form.description.value,
      email: user.email,
      createdAt: new Date().toLocaleDateString(),
      rating: 0,
      review: [],
    };

    fetch('https://hero-home-neon.vercel.app/Service', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addService)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Added your Service');
        navigate('/service');
        form.reset();
      })
      .catch(err => {
        toast.error('Failed to add service. Please try again.');
        console.error(err);
      });
  };

  return (
    <div className='min-h-screen py-12 px-4 bg-base-100 transition-all duration-300'>
      <Toaster />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-3 text-primary">
            <MdAddCircleOutline size={50} className="animate-pulse" />
          </div>
          <h1 className='text-3xl md:text-4xl font-black text-base-content tracking-tight'>
            Add New <span className="text-primary">Service</span>
          </h1>
          <p className='text-base-content/60 mt-3 max-w-md mx-auto'>
            Expand your reach! Fill in the details below to list your professional service on our platform.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-base-200 p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-base-300">
          <form onSubmit={handleAddService} className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Service Name */}
              <div className="form-control">
                <label className="label mr-2">
                  <span className="label-text font-bold text-xs uppercase opacity-70">Service Name</span>
                </label>
                <input 
                  type="text" 
                  name='name' 
                  required 
                  className="input input-bordered bg-base-100 focus:border-primary" 
                  placeholder="e.g. Home Cleaning" 
                />
              </div>

              {/* Category */}
              <div className="form-control">
                <label className="label mr-2">
                  <span className="label-text font-bold text-xs uppercase opacity-70">Category</span>
                </label>
                <input 
                  type="text" 
                  name='category' 
                  required 
                  className="input input-bordered bg-base-100 focus:border-primary" 
                  placeholder="e.g. Repair" 
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text font-bold text-xs uppercase opacity-70">Service Photo URL</span>
              </label>
              <input 
                type="url" 
                name='photo' 
                required 
                className="input input-bordered bg-base-100 focus:border-primary" 
                placeholder="https://example.com/image.jpg" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Price */}
              <div className="form-control">
                <label className="label mr-2">
                  <span className="label-text font-bold text-xs uppercase opacity-70">Price ($)</span>
                </label>
                <input 
                  type="number" 
                  name='price' 
                  required 
                  className="input input-bordered bg-base-100 focus:border-primary" 
                  placeholder="0.00" 
                />
              </div>

              {/* Provider Name */}
              <div className="form-control">
                <label className="label mr-2">
                  <span className="label-text font-bold text-xs uppercase opacity-70">Provider Name</span>
                </label>
                <input 
                  type="text" 
                  name='provider' 
                  required 
                  className="input input-bordered bg-base-100 focus:border-primary" 
                  placeholder="Your Full Name" 
                />
              </div>
            </div>

            {/* Email (Read Only) */}
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text font-bold text-xs uppercase opacity-70">Registered Email</span>
              </label>
              <input 
                type="email" 
                value={user?.email || ''} 
                readOnly 
                className="input input-bordered bg-base-200 cursor-not-allowed opacity-70" 
              />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label mr-2">
                <span className="label-text font-bold text-xs uppercase opacity-70">Detailed Description</span>
              </label>
              <textarea 
                name='description' 
                required 
                rows="4"
                className="textarea textarea-bordered bg-base-100 focus:border-primary h-32" 
                placeholder="Tell customers what this service includes..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <button className="btn btn-primary w-full text-lg rounded-2xl shadow-lg shadow-primary/20">
                Publish Service
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddService;