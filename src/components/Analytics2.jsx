import React from 'react';
import Laptop from '../assets/laptop.png';

const Analytics2 = () => {
  return (
    <div id='Hero' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[700px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#f1c40f] font-bold'>Ultima Tendencia</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Calidad y productividad fusionada en un mismo diseño
          </h1>
          <p>
            Corría el año 1965 cuando Edgardo comenzó a buscar su crecimiento
            económico adentrándose en un nuevo rubro en paralelo a su carrera de
            bancario. Inicio su micro-emprendimiento, comprar anteojos en fábricas
            y venderlos en ópticas. En la semana por las tardes tomaba los pedidos
            en ópticas y el fin de semana en familia armaban los pedidos con su
            esposa e hijos; por las mañanas el mayor de sus hijos, Carlos, hacía
            las entregas. Los clientes aumentaban y las entregas eran cada vez
            más, es por ello que decidió nombrarlo como “Rey Lux” y dibujó la corona
            que acompaña el nombre hasta el día de hoy.
          </p>
          <a href="https://reyluxeyewear.mitiendanube.com/nuestros-lentes/" className="mx-auto md:mx-0">
  <button className="bg-black text-[#f1c40f] w-[200px] rounded-md font-medium my-6 py-3">
    Get Started
  </button>
</a>

        </div>
      </div>
    </div>
  );
};

export default Analytics2;
