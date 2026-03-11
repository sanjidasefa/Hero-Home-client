import React, { use, useEffect, useState } from 'react';
import Tables from '../../component/childComponent/Tables';
import AuthContext from '../../auth/context/AuthContext';
import BookingTable from '../../component/childComponent/BookingTable';
import Review from '../../component/childComponent/Review';
import { motion } from 'framer-motion';

const MyBooking = () => {
  const { user } = use(AuthContext);
  const [loader, setLoader] = useState(true);
  const [service, setService] = useState([]);
  const [activeTab, setActiveTab] = useState('bookings');

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hero-home-neon.vercel.app/My-booking/${encodeURIComponent(user.email)}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setService(data);
          setLoader(false);
        })
        .catch(err => {
          console.error(err);
          setLoader(false);
        });
    }
  }, [user]);

  if (loader) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-base-100'>
        <span className="loading loading-bars text-primary loading-lg"></span>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-base-100 py-10 px-4 md:px-10 transition-colors'>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-black text-base-content uppercase tracking-tighter">
            User <span className="text-primary">Booking</span>
          </h1>
          <p className="text-base-content/60 mt-2">Manage your booked services and tracking activities.</p>
        </div>

        {/* Custom Tabs Navigation */}
        <div className="flex justify-center md:justify-start gap-4 mb-8 border-b border-base-300 pb-1">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`pb-4 px-6 font-bold text-sm uppercase transition-all ${activeTab === 'bookings' ? 'border-b-4 border-primary text-primary' : 'opacity-40 hover:opacity-100'}`}
          >
            My Bookings ({service.length})
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 px-6 font-bold text-sm uppercase transition-all ${activeTab === 'reviews' ? 'border-b-4 border-primary text-primary' : 'opacity-40 hover:opacity-100'}`}
          >
            My Reviews
          </button>
        </div>

        {/* Conditional Rendering with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-base-100 rounded-3xl"
        >
          {activeTab === 'bookings' ? (
            <div className='shadow-2xl rounded-3xl border border-base-200'>
               <BookingTable service={service} setService={setService} />
            </div>
          ) : (
            <div className='p-6 md:p-10 bg-base-200/50 rounded-3xl border border-base-300'>
               <Review />
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default MyBooking;