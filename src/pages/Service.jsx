import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../component/childComponent/Card';
import ser from '../assets/service.png';
import 'animate.css';

const Service = () => {
  const initialData = useLoaderData();
  const [services, setServices] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchFilteredData();
    }, 400); 
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, sortOrder]);

  const fetchFilteredData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://hero-home-neon.vercel.app/search?search=${searchTerm}&sort=${sortOrder}`
      );
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 pb-20 overflow-x-hidden transition-colors">
      
      {/* 1. Hero Section: Cleaner Gradient/Color */}
      <header className="py-12 md:py-20 bg-base-200/50">
        <div className="container mx-auto px-4 flex flex-col items-center">
          
          <div className="flex flex-col items-center gap-4 mb-10 text-center">
            <div className="bg-primary/10 p-4 rounded-3xl mb-2">
               <img src={ser} alt="" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-base-content tracking-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="max-w-xl text-base-content/60 text-sm md:text-base">
              Explore our wide range of professional services tailored just for your home and office needs.
            </p>
          </div>

          {/* 2. Search & Filter Bar: Floating Glassmorphism Effect */}
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl bg-base-100 p-3 rounded-2xl shadow-2xl border border-base-300">
            
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="What service are you looking for?"
                className="input input-ghost bg-base-200/50 w-full pl-12 focus:bg-base-100 focus:outline-primary border-none rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <select 
                className="select select-ghost bg-base-200/50 border-none rounded-xl focus:bg-base-100 focus:outline-primary"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Sort By Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>

              {(searchTerm || sortOrder) && (
                <button 
                  onClick={() => {setSearchTerm(''); setSortOrder('');}}
                  className="btn btn-circle btn-ghost text-error"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 3. Main Content: Better Spacing */}
      <main className="max-w-7xl mx-auto px-6 mt-12">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <span className="loading loading-ring loading-lg text-primary"></span>
            <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Searching...</p>
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
            {services.map((service) => (
              <div key={service._id} className="animate__animated animate__fadeInUp">
                <Card service={service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-base-200/30 rounded-[3rem] border-2 border-dashed border-base-300">
            <div className="text-6xl mb-4 grayscale">🔎</div>
            <h2 className="text-2xl font-bold opacity-60">No results found</h2>
            <p className="opacity-40 mt-2">Try searching for something else.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Service;