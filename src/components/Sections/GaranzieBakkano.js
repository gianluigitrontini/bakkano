import React from 'react';
import { contenuto } from '../../data';

function GaranzieBakkano() {
  return (
    <section id='garanzie-bakkano' className='bg-brand-dark-1 py-16'>
      <div className='container mx-auto pt-8 pb-16 flex flex-col gap-8 lg:gap-0 lg:flex-row items-center'>
        <span className='border-b-2 border-red-500 w-1/2'></span>
        <h1 className='main-title text-3xl uppercase text-white font-bold tracking-wide w-full text-center'>
          Con i prodotti Bakkano ti garantiamo
        </h1>
        <span className='border-b-2 border-red-500 w-1/2'></span>
      </div>
      {/* <div style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.35)' }}> */}
      <div>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8'>
          {contenuto.garanzieSection.map((garanzia) => (
            <div className='flex flex-col text-white text-center p-8 relative'>
              <div
                style={{
                  background:
                    'radial-gradient(circle, #fff 0%,rgba(255,255,255,0.5) 20%, rgba(0,0,0,0) 60%)',
                }}
                className='absolute rounded-full w-52 h-52 transform left-[50%] top-0 z-[0] translate-x-[-50%]'></div>
              <img
                src={garanzia.image}
                className='h-36 object-contain mb-12 z-10'
                alt='La pinsa'
              />
              <span className='font-bold mb-4 uppercase z-10'>
                {garanzia.titolo}
              </span>
              <p>{garanzia.contenuto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GaranzieBakkano;
