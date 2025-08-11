import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <div className="bg-[#172c45] text-white text-[15px] h-[48px]">
      <div className="container mx-auto px-6 h-full flex justify-between items-center font-semibold tracking-wide">
        {/* Left Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-yellow-300">Forum</a>
          <a href="#" className="hover:text-yellow-300">About</a>
          <a href="#" className="hover:text-yellow-300">FAQ's</a>
          <a href="#" className="hover:text-yellow-300">Discover Places</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-yellow-300"><FaFacebookF size={16} /></a>
          <a href="#" className="hover:text-yellow-300"><FaTwitter size={16} /></a>
          <a href="#" className="hover:text-yellow-300"><FaInstagram size={16} /></a>
          <a href="#" className="hover:text-yellow-300"><FaLinkedinIn size={16} /></a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
