import React from 'react';
import { contenuto } from '../../data';

function GaranzieBakkano() {
  return (
    <section id='garanzie-bakkano' className='bg-brand-dark-1 py-16'>
      <div className='container mx-auto pt-8 pb-16'>
        <h1 className='main-title text-3xl uppercase text-white font-bold tracking-wide w-full text-center'>
          Con i prodotti Bakkano ti garantiamo
        </h1>
      </div>
      <div
        style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.35)' }}
        className='bg-white'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8'>
          {contenuto.garanzieSection.map((garanzia) => (
            <div className='flex flex-col text-black text-center p-8'>
              <img
                src={garanzia.image}
                className='h-36 object-contain mb-8'
                alt='La pinsa'
              />
              <span className='font-bold mb-4 uppercase'>
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
