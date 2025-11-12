import React, { use } from 'react';
import AuthContext from '../auth/context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user , loader} = use(AuthContext);

  if(loader){
    return <div className='w-11/12 p-40 m-auto items-center flex justify-center'><span className="loading bg-blue-900 loading-bars loading-xl"></span></div>
  }

  if(!user){
     return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return (
  <>
   {children}
  </>
  );
};

export default PrivateRoute;