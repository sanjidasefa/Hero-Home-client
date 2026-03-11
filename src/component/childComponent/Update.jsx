import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";
import { MdOutlineModeEdit, MdArrowBack } from "react-icons/md";

const Update = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const updatedService = {
      title: form.name.value,
      image: form.photo.value,
      price: form.price.value,
      category: form.category.value,
      description: form.description.value,
      updatedAt: new Date(), 
    };

    fetch(`https://hero-home-neon.vercel.app/Service/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Service details updated successfully!");
        navigate("/service");
      })
      .catch((err) => {
        toast.error("Failed to update service");
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-base-100 transition-colors duration-300">
      <Toaster />
      
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="btn btn-ghost btn-sm gap-2 mb-6 opacity-70 hover:opacity-100"
        >
          <MdArrowBack /> Back
        </button>

        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <MdOutlineModeEdit className="text-4xl text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-black text-base-content tracking-tight">
            Update Service Details
          </h1>
          <p className="mt-2 text-base-content/60 max-w-md mx-auto">
            Modify the information below to keep your service listings accurate and attractive for customers.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-base-200 p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-base-300">
          <form onSubmit={handleUpdateService} className="space-y-6">
            
            {/* Service Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold uppercase text-xs opacity-70">Service Name</span>
              </label>
              <input
                type="text"
                defaultValue={data.title}
                name="name"
                required
                placeholder="Ex: Professional Home Cleaning"
                className="input input-bordered bg-base-100 focus:border-primary text-base-content"
              />
            </div>

            {/* Photo URL */}
            <div className="form-control w-full">
              <label className="label">
                <span className="mr-2 label-text font-bold uppercase text-xs opacity-70">Image URL</span>
              </label>
              <input
                type="text"
                defaultValue={data.image}
                name="photo"
                required
                placeholder="https://example.com/image.jpg"
                className=" input input-bordered bg-base-100 focus:border-primary text-base-content"
              />
            </div>

            {/* Grid for Category and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="mr-2 label">
                  <span className="label-text font-bold uppercase text-xs opacity-70">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={data.category}
                  className="input input-bordered bg-base-100 focus:border-primary text-base-content"
                  placeholder="Cleaning, Repair, etc."
                />
              </div>
              <div className="form-control w-full">
                <label className="mr-2 label">
                  <span className="label-text font-bold uppercase text-xs opacity-70">Price ($)</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={data.price}
                  className="input input-bordered bg-base-100 focus:border-primary text-base-content"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Description */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold uppercase text-xs opacity-70">Service Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={data.description}
                rows="4"
                placeholder="Provide details about what this service includes..."
                className="textarea textarea-bordered bg-base-100 focus:border-primary text-base-content text-base h-32"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col md:flex-row gap-4">
              <button 
                type="submit" 
                className="btn btn-primary flex-1 rounded-2xl text-lg shadow-lg shadow-primary/20"
              >
                Save Changes
              </button>
              <button 
                type="button" 
                onClick={() => navigate("/service")} 
                className="btn btn-ghost flex-1 rounded-2xl"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;