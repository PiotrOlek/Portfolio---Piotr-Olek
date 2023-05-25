import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#002222] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#85C75A]'>
              O mnie
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Cześć. Nazywam się Piotr, cieszę się, że tu jesteś. Zapraszam do zapoznania się z moimi projektami.</p>
            </div>
            <div>
              <p>Moją pasją jest tworzenie wyrafinowanych i intuicyjnych interfejsów użytkownika, które sprawiają, że korzystanie z sieci staje się prostsze i bardziej przyjemne dla każdego. Chociaż jestem na początku mojej kariery, posiadam solidne podstawy w HTML, CSS i JavaScript oraz jestem zdeterminowany, aby ciągle się rozwijać i nauczyć się nowych technologii. Pragnę tworzyć oprogramowanie, które nie tylko spełnia oczekiwania, ale przekracza je, dostarczając unikalnych i satysfakcjonujących doświadczeń użytkowników. Mam zapał do nauki, jestem gotowy do podjęcia nowych wyzwań i z niecierpliwością oczekuję na możliwość pracy nad inspirującymi projektami. Pomyśl, jak wiele możemy osiągnąć razem z moją energią i twoją wizją.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
