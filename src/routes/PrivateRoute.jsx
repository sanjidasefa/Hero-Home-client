import React, { use } from 'react';
import AuthContext from '../auth/context/AuthContext';

const PrivateRoute = ({children}) => {
  const {user , loader} = use(AuthContext);

  if(loader){
    return <div className='w-11/12 mx-auto items-center flex justify-center'><span className="loading loading-bars loading-xl"></span></div>
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