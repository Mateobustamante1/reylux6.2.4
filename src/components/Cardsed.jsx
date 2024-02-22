import React, { useState, useEffect } from 'react';
import Brick from '../assets/brick.jpg';
import Concrete from '../assets/concrete.jpg';
import Sticky from '../assets/sticky.jpg';
import BackgroundImage from '../assets/fondoed.jpg';

const ProductCard = ({ image, title, link, index, isSmallScreen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageSizeClassName =
    index === 0 || index === 2
      ? isSmallScreen
        ? 'w-full h-[500px] object-cover object-center mx-auto'
        : 'w-full h-full object-cover object-center mx-auto'
      : isSmallScreen
      ? 'w-full h-[500px] object-cover mx-auto'
      : 'w-full h-full object-cover mx-auto';

  const textClassName = `text-4xl font-bold text-white ${isSmallScreen ? 'lg:text-3xl' : ''} ${
    isHovered ? 'text-shadow-md' : ''
  }`;

  const cardMarginTop = isSmallScreen ? '2rem' : '10rem'; // Ajusta el valor del margen superior según tus preferencias

  return (
    <div
      className={`w-full h-[500px] md:h-[650px] relative shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${
        isHovered ? 'hover:scale-110' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ marginTop: cardMarginTop, marginBottom: index !== 2 ? '1rem' : '0' }}
    >
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='w-full h-full overflow-hidden rounded-lg'>
          <img className={imageSizeClassName} src={image} alt={title} />
        </div>
      </a>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className={textClassName}>{title}</h2>
      </div>
    </div>
  );
};

const Cardsed = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const products = [
    { image: Brick, title: 'BRICK', link: 'https://reyluxeyewear.mitiendanube.com/productos/brick/' },
    { image: Concrete, title: 'CONCRETE', link: 'https://reyluxeyewear.mitiendanube.com/productos/concrete-brown-sugar/' },
    { image: Sticky, title: 'STICKY', link: 'https://reyluxeyewear.mitiendanube.com/productos/sticky/' },
  ];

  return (
    <div className='w-full py-10 px-4 bg-cover bg-center' style={{ backgroundImage: `url(${BackgroundImage})`, minHeight: '100vh' }}>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {products.map((product, index) => (
          <ProductCard key={index} index={index} isSmallScreen={isSmallScreen} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Cardsed;