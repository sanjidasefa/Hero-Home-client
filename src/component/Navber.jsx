import React, { use} from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router";
import AuthContext from "../auth/context/AuthContext";
import profile from '../assets/profile.png'
import { GoMoon } from "react-icons/go";
import { BsSunFill } from "react-icons/bs";
const Navber = () => {
   const { user ,signOutProfile } = use(AuthContext);
   const handleLogOut= ()=>{
    signOutProfile()
   }
  const handleThemes = (checked) => {
    const html = document.querySelector('html')
    if(checked){
      html.setAttribute('data-theme', 'dark')
    }
    else{
      html.setAttribute('data-theme', 'light')
    }
  }
  
   return (
    <>
      <div className="navbar w-full h-20 bg-white  shadow-green-400 shadow-sm px-10 lg:px-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  text-blue-950"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  bg-blue-900 text-white rounded-box z-1 mt-3 w-30 p-2 shadow"
            >
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/service">
                <li>Service</li>
              </Link>
              <Link to="/Add-Service">
                <li>Add Service</li>
              </Link>
            </ul>
          </div>
          <Link
            to="/home"
            className="flex justify-center items-center text-blue-950 font-bold text-2xl"
          >
            <img src="/logo.jpg" alt="" className="h-15 " />
            <h1>Hero-Home</h1>
          </Link>
        </div>
        <div className="navbar-center text-blue-900   hidden lg:flex">
          <ul className="menu menu-horizontal   text-lg gap-2 px-1">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/service">
              <li>Service</li>
            </Link>
            {
              user? <Link to="/Add-Service">
              <li>Add Service</li>
            </Link> : <Link to='/resister'>Resister</Link>
            }
          </ul>
        </div>
        
         

        <div className="navbar-end">

         <label className="toggle mr-2 text-base-content ">
  <input  type="checkbox"    onChange={(e)=> handleThemes(e.target.checked)}  defaultChecked={localStorage.getItem('theme') === "dark"}/>
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
   <BsSunFill />
  </svg>
  <GoMoon />
</label>

          <div className="dropdown dropdown-hover">
            {/* <Link to="/Login">
              <li>Add Service</li>
            </Link> */}
 <div className="">
                {user ? (
                  <Link to="/my-profile">
                    <img
                      src={
                        user?.photoURL || profile
                      }
                      className="rounded-full w-10 mr-3 h-10"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-blue-900 flex justify-center items-center gap-1"
                  >
                    {" "}
                    <img src={profile} alt=""  className="rounded-full w-15 mr-3 h-15"/>
                    <span className="text-lg text-blue-900">Login</span>
                  </Link>
                )}
              </div>
            <div tabIndex={0} role="button" className="mb-2 ">
           
             
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-blue-900 text-white rounded-box z-1  w-22 p-1 shadow-sm"
            >
              
              <Link to='/my-profile'>
                <li>My-profile</li>
              </Link>
              <Link to='/Service-Booking'>
                {" "}
                <li>My-Bokking</li>
              </Link>
              <Link to='/My-service'>
                {" "}
                <li>My-Services</li>
              </Link>

              <Link onClick={handleLogOut}>
                <li>Log-out</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
