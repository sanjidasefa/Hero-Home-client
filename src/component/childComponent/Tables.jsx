import React, { use, useEffect, useState } from 'react';
import AuthContext from '../../auth/context/AuthContext';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router';
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2';

const Tables = () => {
  const { user } = use(AuthContext);
  const [loader, setLoader] = useState(true);
  const [service, setService] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hero-home-neon.vercel.app/my-Services/${encodeURIComponent(user.email)}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}` // Corrected spelling
        }
      })
        .then(res => res.json())
        .then(data => {
          setService(data);
          setLoader(false);
        })
        .catch(() => setLoader(false));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      confirmButtonText: "Yes, Delete",
      background: 'var(--fallback-b1,oklch(var(--b1)))',
      color: 'var(--fallback-bc,oklch(var(--bc)))'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hero-home-neon.vercel.app/Service/${id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setService(prev => prev.filter(item => item._id !== id));
              toast.success("Service removed");
            }
          });
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
          Manage <span className="text-primary">Services</span>
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full mt-2"></div>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-sm border border-base-200">
        <table className="table w-full">
          {/* Header - No bulky borders */}
          <thead className="bg-base-200/50 text-base-content/70">
            <tr>
              <th className="py-5 px-6">no</th>
              <th>Service Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Created At</th>
              <th className="text-right px-8">Actions</th>
            </tr>
          </thead>

          <tbody className="text-base-content">
            {service.map((item, index) => (
              <tr key={item._id} className="hover:bg-base-200/40 border-b border-base-200 last:border-0 transition-colors">
                <td className="px-6 opacity-50 font-medium">{index + 1}</td>
                <td>
                  <div className="font-bold text-base-content hover:text-primary transition-colors cursor-default">
                    {item.title}
                  </div>
                  <div className="text-[10px] opacity-40 uppercase tracking-widest">{item.providerName}</div>
                </td>
                <td>
                  <span className="badge badge-sm bg-primary/10 text-primary border-none font-semibold px-3 py-2">
                    {item.category}
                  </span>
                </td>
                <td className="font-mono font-bold text-success text-lg">
                  ${item.price}
                </td>
                <td className="text-sm opacity-60 italic">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="text-right px-8">
                  <div className="flex justify-end gap-3">
                    {/* Edit */}
                    <Link 
                      to={`/update-route/${item._id}`} 
                      className="p-2 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                    >
                      <FaRegEdit size={18} />
                    </Link>
                    {/* Delete */}
                    <button 
                      onClick={() => handleDelete(item._id)} 
                      className="p-2 bg-error/10 text-error rounded-lg hover:bg-error hover:text-white transition-all"
                    >
                      <RiDeleteBin5Fill size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {service.length === 0 && (
          <div className="py-20 text-center opacity-40 italic">
            No services added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Tables;