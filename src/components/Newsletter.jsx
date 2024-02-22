import React, { useState, useEffect } from 'react';
import { FaTruck, FaCreditCard, FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto flex items-center justify-center flex-wrap'>
        <div className='flex flex-col items-center mx-4 my-4'>
          <FaTruck size={40} />
          <p>Envío Gratis a todo el pais</p>
        </div>
        <div className='flex flex-col items-center mx-4 my-4'>
          <FaCreditCard size={40} />
          <p>3 cuotas sin interes</p>
        </div>
        {!isResponsive && (
          <div className='flex flex-col items-center mx-4 my-4'>
            <FaEnvelope size={40} />
            <p>Atencion online 24 horas</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
