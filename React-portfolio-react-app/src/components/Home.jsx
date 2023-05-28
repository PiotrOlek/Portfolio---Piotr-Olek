import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='Strona Główna' className='w-full h-screen bg-[#002222]'>

        {/* Container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#85C75A]'>Cześć, mam na imię </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Piotr Olek</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Jestem Frontend Developerem.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Tutaj prezentuję swoje projekty i umiejętności. Jestem ambitnym początkującym programistą, który pasjonuje się tworzeniem interaktywnych stron internetowych.
          Zapraszam do odkrywania mojego portfolio i zapoznania się z moimi projektami.</p>
          <div>
            <Link to='Projekty' smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#85C75A] hover:border-[#85C75A]'>Sprawdź moje projekty! 
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
              </span>
              </button>
            </Link>
          </div>

        </div>

    </div>
  )
}

export default Home
