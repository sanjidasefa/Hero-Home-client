import React from 'react';
import Navber from '../component/Navber';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='bg-green-50'>
      <Navber></Navber>
       <div className='w-11/12 mx-auto items-center flex justify-center '>
         <Outlet></Outlet>
       </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;