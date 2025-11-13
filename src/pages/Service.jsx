import React, { useState } from 'react';
import Card from '../component/childComponent/Card';
import { useLoaderData } from 'react-router';

const Service = () => {
  const data = useLoaderData()
  const [ searchData , setSearchData ] = useState(data)
  const handleSearch= e =>{
    e.preventDefault();
  
    const search = e.target.search.value
    
    fetch(`http://localhost:3000/search?search=${search}`)
    .then(res => 
      res.json()
    )
    .then(data => {
      console.log(data)
      setSearchData(data)
    })
  }
 // console.log(data)
  return (
    <div>

<form onSubmit={handleSearch}>
  <div className='flex justify-center items-center'>
    <div>
      <label className="input mt-2 rounded-l-2xl">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='search' required placeholder="Search" />
  
</label>
    </div>
<button type='submit' className="btn rounded-r-2xl text-lg bg-green-400 text-white  mt-2">Search</button>
  </div>
</form>

      <h1 className='text-center text-blue-900 mt-10 font-bold text-3xl'>Our All Services</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-20 my-20 '>
        
      {
        searchData.length  > 0 ? (
          searchData.map(service=> <Card key={service._id} service={service}></Card>)
        ) : (
          <p className='text-center text-blue-900 mt-10 font-bold text-3xl'>No Service Found</p>
        )
      }
    </div>
    </div>
  );
};

export default Service;