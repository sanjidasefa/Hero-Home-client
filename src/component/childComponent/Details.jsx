import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BsFillPersonLinesFill, BsCalendarCheck, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { CiTimer } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { MdMailOutline, MdCategory } from "react-icons/md";
import AuthContext from '../../auth/context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import Review from './Review';

const Details = () => {
  const { user, loader } = use(AuthContext);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hero-home-neon.vercel.app/Service/${id}`)
      .then(res => res.json())
      .then(data => {
        setService(data);
        setLoading(false);
      });
  }, [id]);

  const handleBook = async (e) => {
    e.preventDefault();
    if (!user) return toast.error('Please login to book');

    const form = e.target;
    const addBooking = {
      Service_name: service.title,
      bookingID: service._id,
      price: service.price,
      booked_by: user?.email,
      bookingDate: form.date.value,
      address: form.address.value,
      number: form.number.value,
      status: 'pending' // Professional practice: always track status
    };

    try {
      const res = await fetch(`https://hero-home-neon.vercel.app/My-booking`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(addBooking)
      });
      if (res.ok) {
        toast.success('Your Service is Booked Successfully!');
        setModal(false);
        form.reset();
      }
    } catch (err) {
      toast.error('Booking failed. Please try again.');
    }
  };

  if (loading || loader) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  const reviewLoad = () => {
    fetch(`https://hero-home-neon.vercel.app/Service/${id}`)
      .then(res => res.json())
      .then(data => setService(data));
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <Toaster position="top-center" />
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Left: Featured Image */}
        <div className='animate__animated animate__fadeInLeft'>
          <div className="relative group">
            <img 
              src={service.image} 
              alt={service.title} 
              className='w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-base-200' 
            />
            <div className="absolute top-4 left-4">
              <span className='badge badge-primary p-4 gap-2 font-bold'>
                <MdCategory /> {service.category}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Service Details */}
        <div className='flex flex-col animate__animated animate__fadeInRight'>
          <h1 className='text-4xl font-black text-base-content mb-4 tracking-tight'>
            {service.title}
          </h1>
          
          <div className='flex items-center gap-4 mb-6'>
            <div className='text-3xl font-bold text-primary flex items-center'>
              <GrMoney className='mr-2 text-2xl'/> ${service.price}
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='flex items-center gap-1 font-semibold text-lg'>
              <FcRating /> {service.rating}
            </div>
          </div>

          {/* Provider Card */}
          <div className='bg-base-200 p-6 rounded-3xl mb-8 border border-base-300'>
            <h3 className='text-sm uppercase tracking-widest text-slate-500 font-bold mb-4'>Service Provider</h3>
            <div className='flex items-center gap-4 mb-4'>
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-12">
                  <span className="text-xl uppercase">{service.providerName?.charAt(0)}</span>
                </div>
              </div>
              <div>
                <h2 className='text-xl font-bold text-base-content flex items-center gap-2'>
                  {service.providerName}
                </h2>
                <p className='text-sm opacity-70 flex items-center gap-1'>
                  <MdMailOutline /> {service.email}
                </p>
              </div>
            </div>
            <div className="divider opacity-50"></div>
            <h4 className='font-bold mb-2'>Service Description</h4>
            <p className='text-base-content/80 leading-relaxed'>{service.description}</p>
            
            <div className='mt-6 flex gap-4 text-xs opacity-60'>
              <span className='flex items-center gap-1'><CiTimer /> Added: {new Date(service.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <button 
            className="btn btn-primary btn-lg rounded-2xl shadow-lg hover:shadow-primary/20" 
            disabled={service.email === user?.email}
            onClick={() => setModal(true)}
          >
            {service.email === user?.email ? "This is your service" : "Book This Service"}
          </button>
        </div>
      </div>

      <div className="mt-20">
        <Review id={service._id} user={user} reviewLoad={reviewLoad} />
      </div>

      {/* Professional Booking Modal */}
      {modal && (
        <div className="modal modal-open">
          <div className="modal-box max-w-lg rounded-3xl border border-primary/20">
            <button 
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
              onClick={() => setModal(false)}
            >✕</button>
            
            <h3 className="text-2xl font-black text-center mb-2">Book Service</h3>
            <p className="text-center opacity-60 mb-6">Complete the details below to schedule</p>
            
            <form onSubmit={handleBook} className="space-y-4">
              <div className="form-control">
                <label className="label font-bold text-xs uppercase opacity-70">Contact Details</label>
                <div className="join w-full">
                  <span className="btn join-item pointer-events-none"><MdMailOutline /></span>
                  <input type="text" className="input input-bordered join-item w-full" value={user?.email} readOnly />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label font-bold text-xs uppercase opacity-70">Price</label>
                  <input type="text" className="input input-bordered" value={`$${service.price}`} readOnly />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-xs uppercase opacity-70">Schedule Date</label>
                  <input type="date" name="date" className="input input-bordered focus:border-primary" required />
                </div>
              </div>

              <div className="form-control">
                <label className="label font-bold text-xs uppercase opacity-70">Location Address</label>
                <div className="join w-full">
                  <span className="btn join-item pointer-events-none"><BsGeoAlt /></span>
                  <input type="text" name="address" className="input input-bordered join-item w-full" placeholder="Street, City, Zip Code" required />
                </div>
              </div>

              <div className="form-control">
                <label className="label font-bold text-xs uppercase opacity-70">Phone Number</label>
                <div className="join w-full">
                  <span className="btn join-item pointer-events-none"><BsTelephone /></span>
                  <input type="tel" name="number" className="input input-bordered join-item w-full" placeholder="017XXXXXXXX" required />
                </div>
              </div>

              <div className="modal-action grid grid-cols-2 gap-4">
                <button type='button' className='btn btn-outline rounded-xl' onClick={() => setModal(false)}>Cancel</button>
                <button type='submit' className='btn btn-primary rounded-xl'>Confirm Booking</button>
              </div>
            </form>
          </div>
          <div className="modal-backdrop bg-black/40" onClick={() => setModal(false)}></div>
        </div>
      )}
    </div>
  );
};

export default Details;