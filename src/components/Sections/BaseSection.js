import React from 'react';
import BasePinza from '../../assets/images/section-base/base-pinsa.png';
import BlockWithIcon from '../BlockWithIcon';
import ZeroConservanti from '../../assets/images/section-base/icons/0-conservanti.png';
import IngredientiCertificati from '../../assets/images/section-base/icons/certified.png';
import FattaAMano from '../../assets/images/section-base/icons/fatta-a-mano.png';
import MixFarine from '../../assets/images/section-base/icons/mix-farine.png';

import { Fade } from 'react-awesome-reveal';

function BaseSection() {
  const BaseCopy = [
    {
      name: 'Farine Selezionate',
      text: 'Tutte le nostre Pinse vengono realizzate utilizzando un mix di farine selezionate: farine di frumento tenero, farina di riso, farina di soia, lievito madre, acqua e sale e lasciate lievitare tra le 48 e le 72 ore.',
      icon: MixFarine,
    },
    {
      name: 'Fatta a mano',
      text: 'Ogni base viene spianata a mano in forma ovale dai nostri pinsaioli seguendo la tradizione artigianale della vera Pinsa Romana®, per un prodotto altamente digeribile, gustoso e fragrante.',
      icon: FattaAMano,
    },
    {
      name: 'Ingredienti Certificati',
      text: 'Utilizziamo solo materie prime certificate che rispettano il protocollo di produzione. Questo ci permette di utilizzare il marchio Pinsa Romana® Originale.',
      icon: IngredientiCertificati,
    },

    {
      name: 'Zero Conservanti',
      text: 'Le nostre basi artigianali sono fresche, non congelate e senza conservanti o additivi aggiunti. Per lasciare inalterato il gusto e la freschezza, dopo una rapida scottatura, le lasciamo raffreddare per poi conservarle in ATM. Per questo consigliamo di consumare il prodotto entro 50 giorni dal confezionamento.',
      icon: ZeroConservanti,
    },
  ];
  return (
    <section id='la-base' className='flex flex-col mt-16 bg-brand-dark-1 z-10'>
      <div className='container'>
        <div className='relative lg:top-20 flex flex-col-reverse lg:flex-row items-center z-10'>
          <h3 className='block lg:text-3xl text-center lg:text-left text-red-500 mb-8 lg:w-1/3 mt-4 lg:mt-0'>
            Fresca, fragrante e artigianale.
          </h3>
          <span className='block border-b-4 border-red-500 mx-auto h-4 w-1/3 lg:w-full'></span>

          <div className='mx-auto lg:mr-0 lg:ml-auto lg:pb-4 text-center lg:text-right lg:pl-4 lg:w-2/3'>
            <h1 className='main-title text-3xl lg:text-7xl uppercase text-white font-bold tracking-wide'>
              La Base
            </h1>
            <p className='lg:text-3xl uppercase text-white font-bold tracking-wide'>
              Che fa la differenza
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-5/12 lg:mt-32 text-white'>
            <Fade triggerOnce>
              {BaseCopy.map((block, i) => {
                return (
                  <BlockWithIcon
                    key={'basepizza-' + i}
                    icon={block.icon}
                    title={block.name}
                    className='my-12'>
                    <p>{block.text}</p>
                  </BlockWithIcon>
                );
              })}
            </Fade>
          </div>
          <img
            src={BasePinza}
            style={{
              height: '70vh',
              minHeight: '600px',
            }}
            alt=''
            className='ml-auto lg:absolute right-0 w-full lg:w-6/12 object-cover opacity-50 hover:opacity-75 transition-opacity'
          />
        </div>
      </div>
    </section>
  );
}

export default BaseSection;
