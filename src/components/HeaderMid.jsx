import React from 'react';
import { FaRegHeart, FaStore } from 'react-icons/fa';

const HeaderMid = () => {
  return (
    <div className="bg-white text-blue py-8">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide h-12">
          <a href="/">LOGO</a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-10">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
          />
        </div>

        {/* Right Icons */}
        <div className="flex gap-5 items-center">
          <a href="#" className="hover:text-gray-300">
            <FaRegHeart size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaStore size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMid;
