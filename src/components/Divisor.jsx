import React, { useState, useEffect } from 'react';

const Divisor = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto flex items-center justify-center flex-wrap">
        <div className="flex flex-col items-center mx-4 my-4">
          <p
            className={`text-3xl font-bold ${isAnimated ? 'animate-pulse' : ''}`}
          >
            Realizá tu medición oftalmológica sin cargo llevando nuestros lentes Reylux
          </p>
        </div>
      </div>
    </div>
  );
};

export default Divisor;