import React from 'react';
import { Link } from 'react-scroll';

import FirmaChef from '../../assets/images/firma-chef.png';
function Hero() {
  const pinsa =
    'https://bakkanoinviamanara.com/wp-content/uploads/2020/01/persito2.jpg';

  return (
    <section
      id='hero'
      className='flex flex-col lg:flex-row items-center relative mt-header'>
      <img
        alt='Una pinsa appena sfornata e tagliata'
        src={pinsa}
        className='h-65 lg:absolute top-0 left-0 right-0 w-full lg:w-7/12 transition-opacity object-cover bg-no-repeat'
      />
      <div className='absolute absolute-center lg:static container mx-auto flex items-center '>
        <div className='lg:h-65 flex items-center justify-center p-4 lg:pt-8  left-0 right-0 flex flex-col ml-auto lg:w-1/3 '>
          <div className='text-left border-4 p-4 border-red-500'>
            <h1 className='text-2xl font-semibold text-black uppercase lg:text-3xl'>
              Un impasto che abbiamo perfezionato nel tempo con amore e
              passione. <br />
              Un prodotto che abbiamo testato personalmente su migliaia di
              clienti. <br />
              Tanti formati per ogni esigenza.
            </h1>
            <button className='w-full text-white px-4 py-2 mt-4 text-lg font-medium uppercase transition-colors duration-200 transform bg-red-600 lg:w-auto hover:bg-red-700 focus:outline-none focus:bg-red-500'>
              <Link to='la-base' smooth={true}>
                SCOPRI
              </Link>
            </button>
          </div>
          <img className='hidden lg:block ml-auto' src={FirmaChef} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
