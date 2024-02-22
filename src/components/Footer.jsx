import React from 'react';
import {
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="contact" className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
  <h1 className='w-full text-3xl font-bold text-[#f1c40f]'>Reylux.</h1>
  <p className='py-4'>¡Bienvenido a Reylux! Ofrecemos un producto de fabricación propia que fusiona la tendencia más actual con la calidad de "antes".</p>
  
  {/* Nueva línea de texto para la dirección */}
  <p className='py-2'>Dirección: Calle 148 1225, Berazategui, Buenos Aires.</p>
  
  {/* Nueva línea de texto para los horarios de atención */}
  <p className='py-2'>Horarios de Atención: 9hs a 13hs y 16hs a 20hs.</p>
  
  <div className='flex justify-between md:w-[75%] my-6'>
  <a href="https://www.instagram.com/reyluxeyewear/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={30} />
  </a>
</div>

</div>

      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;