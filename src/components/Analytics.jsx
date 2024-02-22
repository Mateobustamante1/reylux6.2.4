import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div  className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[700px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#f1c40f] font-bold'>ED LIMITED</p>
          <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2'>
           ARDE LA CITY
          </h1>
          <p>
          Sumergíte en la sofisticación de nuestra nueva colección de anteojos, donde la inspiración de las últimas tendencias en moda de Europa y Asia se fusiona para crear una experiencia única de estilo y distinción. Nos enorgullece presentarte nuestra exclusiva Edición Limitada, donde cada par es una obra maestra confeccionada con meticulosa atención a cada detalle.

Destacando la innovación y la calidad excepcional, estos anteojos incorporan un material de acetato de celulosa de 8 milímetros de espesor, reservado únicamente para lentes de primera clase. Este acetato no solo garantiza durabilidad y resistencia, sino que también proporciona un tacto lujoso y un acabado impecable que resalta la verdadera artesanía detrás de cada par.

Las patillas de alma de metal elevan aún más el nivel de distinción, aportando un toque moderno y elegante que refleja la influencia de las últimas tendencias europeas y asiáticas en el mundo de la moda. Además, las bisagras de metal reforzadas garantizan una durabilidad excepcional, ofreciendo un ajuste cómodo y seguro para acompañarte en cada momento.

Esta colección se presenta en tres colores cuidadosamente seleccionados: Negro Brillo, Negro Mate y Carey. Cada tono ha sido elegido para complementar cualquier estilo y resaltar la personalidad única de quien los lleva.

No pierdas la oportunidad de ser parte de esta exclusiva experiencia. Nuestra Edición Limitada es la encarnación de la elegancia atemporal y la moda vanguardista, inspirada en las últimas tendencias de los escenarios de estilo más influyentes del mundo.
          </p>
          <a href="https://reyluxeyewear.mitiendanube.com/nuestros-lentes/edicion-limitada/" target="_blank" rel="noopener noreferrer">
  <button className='bg-black text-[#f1c40f] w-[350px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
    Get your Edition Limited
  </button>
</a>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
