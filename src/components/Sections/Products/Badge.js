import React from 'react';
import Fresh from '../../../assets/images/section-prodotti/icons/prodotto-fresco.png';
import Vegan from '../../../assets/images/section-prodotti/icons/vegan.png';
import Lievitazione12 from '../../../assets/images/section-prodotti/icons/lievitazione-12.png';
import Lievitazione24 from '../../../assets/images/section-prodotti/icons/lievitazione-24.png';
import Lievitazione72 from '../../../assets/images/section-prodotti/icons/lievitazione-72.png';
import Forno from '../../../assets/images/section-prodotti/icons/forno.png';
function Badge({ badge }) {
  return (
    <div className='flex items-center gap-x-8'>
      <img src={Fresh} className='w-12' alt='Prodotto Fresco' />

      {badge.includes('12') && (
        <img
          className='w-12'
          src={Lievitazione12}
          alt='12 ore di lievitazione'
        />
      )}
      {badge.includes('24') && (
        <img
          className='w-12'
          src={Lievitazione24}
          alt='24 ore di lievitazione'
        />
      )}
      {badge.includes('72') && (
        <img
          className='w-12'
          src={Lievitazione72}
          alt='72 ore di lievitazione'
        />
      )}
      {badge.includes('vegan') && (
        <span className='block flex flex-col items-center relative'>
          <img className='w-12' src={Vegan} alt='Prodotto Vegano' />
          <span className='text-white absolute -bottom-4 inline text-xs'>
            Vegano
          </span>
        </span>
      )}
      {badge.includes('cottura5') && (
        <span className='block flex flex-col items-center relative'>
          <img className='w-10' src={Forno} alt='Cuoce in 5 minuti' />
          <span className='text-white absolute -bottom-4 inline text-xs'>
            5 Minuti
          </span>
        </span>
      )}
    </div>
  );
}

export default Badge;
