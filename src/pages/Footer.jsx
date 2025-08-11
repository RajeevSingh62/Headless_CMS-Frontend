import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a2430] text-white text-center py-12 relative overflow-hidden">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#ef5b4c] text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">
            Z
          </div>
          <span className="text-3xl font-bold tracking-wide">zaira</span>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-300 text-sm leading-relaxed mb-6">
        <p>Browned Butter And Brown Sugar Caramelly Goodness</p>
        <p>Crispy Edgesthick And Soft Centers And</p>
        <p>Melty Little Puddles</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-sm font-semibold text-white mb-6 flex-wrap">
        <a href="#" className="flex items-center gap-2 hover:text-[#ef5b4c] transition">
          <FaFacebookF /> Facebook
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#ef5b4c] transition">
          <FaTwitter /> Twitter
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#ef5b4c] transition">
          <FaInstagram /> Instagram
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#ef5b4c] transition">
          <FaYoutube /> Youtube
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#ef5b4c] transition">
          <FaPinterest /> Pinterest
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm">&copy; 2023 All Rights Reserved</p>

      {/* Background Landmark Illustration */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[url('/footer-landmark-bg.svg')] bg-repeat-x bg-bottom opacity-10"></div>
    </footer>
  );
};

export default Footer;
