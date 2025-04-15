import React from 'react';
import { motion } from 'framer-motion';

function Nav() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="navbar bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 px-4"
    >
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52"
          >
            <li><a className="text-green-700 font-semibold hover:text-green-900 transition">Home</a></li>
            <li><a className="text-green-700 font-semibold hover:text-green-900 transition">Register</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold text-green-800">
          🐾 PetsInTheCity
        </a>
      </div>

      {/* Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="font-semibold text-green-700 text-lg hover:text-green-900 transition">Home</a></li>
          <li><a className="font-semibold text-green-700 text-lg hover:text-green-900 transition">Register</a></li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="navbar-end">
        <a className="btn bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition-transform hover:scale-105" href='https://forms.visme.co/formsPlayer/vdzk3vgj-volunteer-registration-form' target='_blank'>
          Join Us
        </a>
      </div>
    </motion.nav>
  );
}

export default Nav;
