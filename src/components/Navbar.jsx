import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logoblanco.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className={`fixed top-0 w-full bg-[#000300] z-50`}>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-18 h-14 mr-2" />
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'> </h1>
        </div>
        <ul className={`hidden md:flex ${nav ? 'text-white' : ''}`}>
          <li className='p-4'>
            <a href="#home" onClick={closeNav}>Home</a>
          </li>
          <li className='p-4'>
            <a href="#Hero" onClick={closeNav}>About</a>
          </li>
          <li className='p-4'>
            <a href="#contact" onClick={closeNav}>Contact</a>
          </li>
          <li className='p-4'>
            <a href="https://reyluxeyewear.mitiendanube.com/nuestros-lentes/" onClick={closeNav}>Store</a>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={`md:hidden ${nav ? 'block fixed left-0 top-24 w-full bg-[#000300] ease-in-out duration-500 z-50' : 'hidden'}`}>
          <div className="flex items-center">
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> </h1>
          </div>
          <li className='p-4 border-b border-gray-600'>
            <a href="#home" onClick={closeNav}>Home</a>
          </li>
          <li className='p-4'>
            <a href="#Hero" onClick={closeNav}>About</a>
          </li>
          <li className='p-4'>
            <a href="#contact" onClick={closeNav}>Contact</a>
          </li>
          <li className='p-4'>
            <a href="https://reyluxeyewear.mitiendanube.com/nuestros-lentes/" onClick={closeNav}>Store</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


