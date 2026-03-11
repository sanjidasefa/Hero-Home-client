import React, { use, useEffect, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import { RiDeleteBin5Fill } from "react-icons/ri";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const BookingTable = () => {
  const { user } = use(AuthContext);
  const [loader, setLoader] = useState(true);
  const [service, setService] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hero-home-neon.vercel.app/My-booking/${encodeURIComponent(user.email)}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}` // Corrected spelling
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

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Cancel Booking?",
      text: "Are you sure you want to cancel this service?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      confirmButtonText: "Yes, Cancel it!",
      background: 'var(--fallback-b1,oklch(var(--b1)))',
      color: 'var(--fallback-bc,oklch(var(--bc)))'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hero-home-neon.vercel.app/Service/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setService(prev => prev.filter(item => item._id !== id));
              toast.success('Your Booking is Cancelled');
            }
          })
          .catch(err => console.log(err));
      }
    });
  };

  if (loader) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'>
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto p-4 md:p-8'>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-base-content uppercase tracking-tight">
          My <span className="text-primary">Bookings</span>
        </h2>
        <p className="text-sm opacity-60">Review and manage your scheduled services.</p>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-sm border border-base-300">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-base-200/50 text-base-content uppercase text-xs">
            <tr>
              <th className="py-4 px-6">no</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Address</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-base-content/90">
            {service.map((table, index) => (
              <tr key={table._id} className="hover:bg-base-200/40 transition-colors border-b border-base-200 last:border-0">
                <td className="px-6 font-medium opacity-50">{index + 1}</td>
                <td>
                  <div className="font-bold">{table.Service_name}</div>
                  <div className="text-[10px] opacity-50 font-semibold uppercase tracking-wider">By: {table.booked_by}</div>
                </td>
                <td className="text-sm">{table.bookingDate}</td>
                <td className="text-sm max-w-[150px] truncate" title={table.address}>
                  {table.address}
                </td>
                <td className="font-bold text-success">${table.price}</td>
                <td className="text-center">
                  <button 
                    onClick={() => handleCancelBooking(table._id)}
                    className="btn btn-ghost btn-sm text-error hover:bg-error/10 gap-2 font-bold"
                  >
                    <RiDeleteBin5Fill />
                    <span className="hidden md:inline">Cancel</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {service.length === 0 && (
          <div className="py-20 text-center opacity-40 italic">
            You haven't booked any services yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingTable;