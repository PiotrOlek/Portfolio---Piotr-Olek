import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <a href="https://www.instagram.com/shotsip/" target="_blank" rel="noopener noreferrer">
          <button className='px-10 py-3 border transition-colors duration-200 ease-in-out hover:bg-white hover:text-black'>
            <FontAwesomeIcon icon={faInstagram} size="xs" />Instagram</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
