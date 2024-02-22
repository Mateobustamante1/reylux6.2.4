import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import martes13 from '../assets/martes13.jpg';

const Medition = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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
    backgroundImage: `url(${martes13})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  };

  const buttonStyle = {
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    border: 'none',
    position: 'relative',
    zIndex: 1,
    marginTop: '20px'
  };

  const textStyle = {
    color: '#fff',
    fontSize: '1.8rem',
    textAlign: 'center',
    position: 'absolute',
    top: 'calc(50% + 50px)',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
  };

  return (
    <div id='home' className='text-white relative'>
      <div style={containerStyle}>
        <div style={overlayStyle}></div>
        <div style={backgroundStyle}></div>
        <a href="https://wa.me/5491123894629" target="_blank" rel="noopener noreferrer" className="whatsapp-button" style={{ ...buttonStyle, textDecoration: 'none', color: '#fff' }}>
          <FaWhatsapp style={{ marginRight: '0.5rem' }} />
          Enviar receta
        </a>
        <div style={textStyle}>
          <p>Envía la foto de tu receta para recibir una cotización a través de WhatsApp.</p>
        </div>
      </div>
    </div>
  );
};

export default Medition;
