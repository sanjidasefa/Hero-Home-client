import React, { use, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import AuthContext from "../auth/context/AuthContext";
import profilePlaceholder from '../assets/profile.png';

const Navbar = () => {
  const { user, signOutProfile } = use(AuthContext);
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  // Handle Theme Persistence
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = (
    <>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/service">Services</NavLink></li>
      {user ? (
        <li><NavLink to="/Add-Service">Add Service</NavLink></li>
      ) : (
        <li><NavLink to="/register">Register</NavLink></li>
      )}
    </>
  );

  return (
    <nav className="navbar sticky top-0 z-50 w-full h-20 bg-base-100 shadow-md px-4 lg:px-20 transition-colors duration-300">
      {/* Navbar Start: Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
            {navLinks}
          </ul>
        </div>
        
        <Link to="/home" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/logo.jpg" alt="Logo" className="h-10 w-10 object-contain rounded" />
          <span className="font-bold text-xl tracking-tight hidden sm:block">Hero-Home</span>
        </Link>
      </div>

      {/* Navbar Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End: Theme & Profile */}
      <div className="navbar-end gap-4">
        {/* Theme Toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input type="checkbox" onChange={() => setIsDark(!isDark)} checked={isDark} />
          <BsSunFill className="swap-on fill-current w-6 h-6 text-yellow-500" />
          <BsMoonStarsFill className="swap-off fill-current w-6 h-6 text-slate-700" />
        </label>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-300">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL || profilePlaceholder} alt="Profile" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
            {user ? (
              <>
                <li className="menu-title text-xs opacity-50">{user.displayName || "User"}</li>
                <li><Link to='/my-profile'>My Profile</Link></li>
                <li><Link to='/Service-Booking'>My Bookings</Link></li>
                <li><Link to='/My-service'>My Services</Link></li>
                <div className="divider my-1"></div>
                <li><button onClick={signOutProfile} className="text-error">Logout</button></li>
              </>
            ) : (
              <li><Link to="/login" className="font-bold text-primary">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;