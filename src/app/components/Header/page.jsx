'use client';

import { AlignJustifyIcon } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-black sticky top-0 z-10 w-full text-white">
      <header className="px-14 max-[425px]:px-5 w-full flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className=" max-[425px]:text-lg ">Logo</a>
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-8 hidden md:flex">
          <a href="#home" className="hover:underline underline-offset-8">Home</a>
          <a href="#about" className="hover:underline underline-offset-8">About</a>
          <a href="#services" className="hover:underline underline-offset-8">Services</a>
          <a href="#blog" className="hover:underline underline-offset-8">Blog</a>
        </nav>

        {/* Contact Button */}
        <div>
         
            <AlignJustifyIcon className='text-white font-semibold' />
        
        </div>
      </header>
    </div>
  );
};

export default Header;
