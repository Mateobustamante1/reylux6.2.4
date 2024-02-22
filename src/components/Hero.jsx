import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/background.jpg';

const Hero = () => {
  const textStyle = {
    textShadow: '2px 2px 2px black',
    position: 'relative',
    zIndex: 1
  };

  const buttonStyle = {
    backgroundColor: '#f1c40f',
    width: '200px',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '0.75rem 1.5rem',
    marginTop: '1.5rem',
    color: 'black',
    position: 'relative',
    zIndex: 1
  };

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden'
  };

  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  };

  return (
    <div id='home' className='text-white relative h-screen'>
      <div className='w-full h-full mx-auto text-center flex flex-col justify-center relative' style={containerStyle}>
        <div style={overlayStyle}></div>
        <div style={backgroundStyle}></div>
        <p className='text-[#00df9a] font-bold p-2' style={{ ...textStyle, marginBottom: '1rem' }}></p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mt-8' style={textStyle}>
          Lo Heredamos, ahora sos parte del
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4' style={textStyle}></p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' style={textStyle}
            strings={['Legado.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mt-6' style={textStyle}>
          ¡Bienvenido a Reylux! Ofrecemos un producto de fabricación propia que fusiona la tendencia más actual con la calidad de "antes".
        </p>
        <button className='my-6 mx-auto'>
        <button className='my-6 mx-auto mt-4' style={{ ...buttonStyle, fontSize: '1.2rem' }}>
  <a href="https://reyluxeyewear.mitiendanube.com/nuestros-lentes/" style={buttonStyle}>
    Shop Now
  </a>
</button>

        </button>
      </div>
    </div>
  );
};

export default Hero;
