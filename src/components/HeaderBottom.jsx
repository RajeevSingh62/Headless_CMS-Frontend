import React from 'react';

const HeaderBottom = () => {
  return (
    <div className="bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex gap-6 justify-center items-center h-12 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-amber-800 transition">Home</a>
          <a href="#" className="hover:text-amber-800 transition">About Us</a>
          <a href="#" className="hover:text-amber-800 transition">Features</a>
          <a href="#" className="hover:text-amber-800 transition">Categories</a>
          <a href="#" className="hover:text-amber-800 transition">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
