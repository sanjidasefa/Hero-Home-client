import React, { useState } from 'react';
import Card from '../component/childComponent/Card';
import { useLoaderData } from 'react-router';
import 'animate.css';
import ser from '../assets/service.png'

const Service = () => {
  const data = useLoaderData()
  const [search , setSearch] = useState([])
  const [ searchData , setSearchData ] = useState('')
  const [ sort , setSort] = useState('')
  const handleSearch= e =>{
    e.preventDefault();
  
    const search = e.target.search.value.trim()
    const sort = e.target.sort.value
    fetch(`https://hero-home-neon.vercel.app/search?search=${search}&sort=${sort}`)
    .then(res => 
      res.json()
    )
    .then(data => {
      // console.log(data)
      setSearch(data)
    })
  }
  const display = search.length > 0? search : data
  return (
    <div>

<form onSubmit={handleSearch}>
  <div className='flex justify-center items-center'>
    <div>
      <label className="input mt-2 ">
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
  <input type="search" name='search' value={searchData} onChange={e=> setSearchData(e.target.value)} placeholder="Search" />
  
</label>
    </div>

  <select name='sort' value={sort} onChange={e=> setSort(e.target.value)} className='input mt-2 '>
    <option value="">Sort By Price</option>
    <option value="asc">Low to High</option>
    <option value="desc">High to Low</option>
  </select>

<button type='submit' className="btn rounded-r-2xl text-lg bg-green-400 text-white  mt-2">Search</button>
  </div>
</form>

      <div className='flex gap-2 items-center justify-center'>
        <img src={ser} alt="" className='w-15 mt-8'/>
        <h1 className='text-center text-blue-900 mt-10 font-bold text-4xl'>Our All Service's</h1>
      </div>
       <div className= 'animate__animated animate__backInUp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-20 my-20 '>
        
      {
        display.length  > 0 ? (
          display.map(service=> <Card key={service._id} service={service}></Card>)
        ) : (
          <p className='text-center text-blue-900 mt-10 font-bold text-3xl'>No Service Found</p>
        )
      }
    </div>
    </div>
  );
};

export default Service;