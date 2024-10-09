"use client";
import React from 'react';
import logo from '../../assests/PinTude_Logo_v4_Transparent 1.png'
import Image from 'next/image';

import HeaderButton from './ui/QrPopupButton';
import Logo from './ui/Logo';
import axios from 'axios';
import Hamburger from './ui/HamBurger';

const Navbar = () => {
      const handleClick = async () => {
        try {
             // Sending the POST request to track button click analytics
            await axios.post('https://api.reportzai.com/api/call-analytics');
            // // alert('Button click recorded successfully!');
  
        } catch (error) {
            // console.error('Error recording button click:', error);
            // alert('Failed to record button click');
        }
    };

  return (
    <header className=''>

        <div className='max-w-[1340px] mx-auto'>
        <Hamburger/>
    <nav className="flex flex-col lg:flex-row lg:justify-between justify-center items-center p-4 bg-white ">
      {/* Logo Section */}
    

      <div className="lg:w-[25%] flex h-[146px]  items-end justify-center lg:justify-start w-full space-x-2  relative">
        <Image src={logo} alt="Pintude Logo" className="hidden" /> {/* Replace with your logo */}
        <Logo/>
      </div>

      {/* Links Section */}
      <div className="lg:flex hidden justify-center lg:w-[55%] w-full space-x-6 text-black text-sm lg:mt-0 mt-9 ">
      <a href="/" className=   " text-xl hover:text-gray-700 border-b-2 border-[#F6830E]">Home</a>
        <a href="#" className="text-xl hover:text-gray-700">About us</a>
        <a href="#" className="text-xl hover:text-gray-700">How It Works</a> 
        <a href="#" className="text-xl hover:text-gray-700">Pricing</a>
</div>
        <div className='ml-3 hidden lg:block lg:text-right lg:w-[20%] w-full'> 
          <div className='h-[44px]'>
        <a    onClick={handleClick}
                onTouchStart={handleClick}  
         href="tel:+91 82373 58619"
          className="  text-xl bg-[#13A8DA] text-white px-6 py-4 rounded-[41px] hover:bg-[#000] transition-colors" 
        >
        Business Login
        </a>
        </div>
      </div>
     

      {/* Sign Up Button */}
     
    </nav>
    </div>
    </header>
  );
};

export default Navbar;
