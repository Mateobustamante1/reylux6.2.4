import React from 'react';
import Single from '../assets/martes13.jpg';
import Double from '../assets/lente3.jpg';
import Triple from '../assets/calle13.jpg';

const Cards2 = () => {
  const products = [
    { title: 'Martes 13', image: Single, link: 'https://reyluxeyewear.mitiendanube.com/productos/martes-13-black/' },
    { title: '3x3', image: Double, link: 'https://reyluxeyewear.mitiendanube.com/productos/3x3-black/' },
    { title: '13 y 148', image: Triple, link: 'https://reyluxeyewear.mitiendanube.com/productos/13-y-148-black/' },
  ];

  return (
    <div className='w-full py-10 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {products.map((product, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 overflow-hidden ${
              index === 0 ? 'bg-black text-white border-[#f1c40f] rounded-lg' :
              index === 2 ? 'bg-black text-white border-[#f1c40f] rounded-lg' :
              'bg-[#f1c40f] text-black border-black rounded-lg'
            }`}
          >
            <div className='flex justify-center'>
              <img
                className='w-full h-64 object-cover mx-auto mt-[-3rem] rounded-t-lg'
                src={product.image}
                alt={product.title}
                style={{ marginTop: '20px', border: 'none' }}
              />
            </div>
            <h2 className='text-2xl font-bold text-center py-8'>{product.title}</h2>
            <p className='text-center text-4xl font-bold'>$39.900</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Envío Gratis</p>
              <p className='py-2 border-b mx-8'>3 Cuotas sin interés</p>
              <p className='py-2 border-b mx-8'></p>
            </div>
            <a
              href={product.link}
              className={`w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ${
                index === 0 ? 'bg-[#f1c40f] text-black border-[#f1c40f]' :
                index === 2 ? 'bg-[#f1c40f] text-black border-[#f1c40f]' :
                'bg-black text-white border-black'
              } flex items-center justify-center`}
            >
              Get Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards2;
