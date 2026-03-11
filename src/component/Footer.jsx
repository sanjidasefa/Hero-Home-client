import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      {/* Main Footer Content */}
      <div className="footer p-10 max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* Brand/About Section */}
        <aside className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
             <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded" />
             <span className="text-xl font-bold tracking-tight">Hero-Home</span>
          </div>
          <p className="opacity-70 leading-relaxed">
            Providing reliable home and hardware services since 2024. Your comfort is our priority.
          </p>
        </aside>

        {/* Services Links */}
        <nav>
          <h6 className="footer-title text-primary opacity-100">Services</h6>
          <a className="link link-hover">Hardware Setup</a>
          <a className="link link-hover">Home Service</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Outdoor Service</a>
        </nav>

        {/* Company Links */}
        <nav>
          <h6 className="footer-title text-primary opacity-100">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Service Agency</a>
        </nav>

        {/* Legal Links */}
        <nav>
          <h6 className="footer-title text-primary opacity-100">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        {/* Social / Newsletter */}
        <nav className="w-full md:w-auto">
          <h6 className="footer-title text-primary opacity-100">Social Presence</h6>
          <div className="grid grid-flow-col gap-4 mb-4">
            <a href="#" className="text-2xl hover:text-primary transition-colors"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-primary transition-colors"><FaYoutube /></a>
            <a href="#" className="text-2xl hover:text-primary transition-colors"><FaFacebook /></a>
          </div>
          <div className="form-control w-80">
            <label className="label p-0 mb-2">
              <span className="label-text">Subscribe to our newsletter</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="email@example.com"
                className="input input-bordered join-item w-full input-sm" />
              <button className="btn btn-primary join-item btn-sm">Join</button>
            </div>
          </div>
        </nav>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-base-300 bg-base-300/50">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© {new Date().getFullYear()} Hero-Home. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;