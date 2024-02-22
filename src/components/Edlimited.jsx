import React, { useState, useEffect } from 'react';
import logoBlanco from '../assets/logoblanco.png'; // Ajusta la ruta según tu estructura de archivos

const Edlimited = () => {
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
    <div className='w-full py-16 text-white px-4 relative'>
      <div className='max-w-[1000px] mx-auto text-center'>
        {!isResponsive && (
          <>
            {/* Logo en la parte izquierda */}
            <div className='absolute left-10 top-1/2 transform -translate-y-1/2'>
              <img src={logoBlanco} alt='Logo Blanco' className='h-16 w-auto' />
            </div>
            {/* Logo en la parte derecha */}
            <div className='absolute right-10 top-1/2 transform -translate-y-1/2'>
              <img src={logoBlanco} alt='Logo Blanco' className='h-16 w-auto' />
            </div>
          </>
        )}
        <div className='bg-black py-2 mb-2 h-[50%] relative'>
          <h2 className='text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s'>
            NEW DROP...
          </h2>
        </div>
       
      </div>
    </div>
  );
};

export default Edlimited;
