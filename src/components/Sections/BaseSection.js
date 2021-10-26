import React from 'react';
import BasePinza from '../../assets/images/section-base/base-pinsa.png';
import ZeroConservanti from '../../assets/images/section-base/icons/0-conservanti.png';
import IngredientiCertificati from '../../assets/images/section-base/icons/certified.png';
import FattaAMano from '../../assets/images/section-base/icons/fatta-a-mano.png';
import MixFarine from '../../assets/images/section-base/icons/mix-farine.png';

import { Fade } from 'react-awesome-reveal';

function BaseSection() {
  const ImageWithTextBlocks = ({ block, i }) => {
    const Image = ({ isSecond }) => {
      return (
        <img
          src='https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
          className={`object-cover h-44 lg:w-1/2 ${
            isSecond && 'order-1 lg:order-2'
          }`}
          alt={block.title}
        />
      );
    };
    return (
      <div className='flex flex-col lg:flex-row items-center gap-8' key={i}>
        {i % 2 === 0 && <Image />}
        <div className='lg:w-1/2 order-2 lg:order-1'>
          <img src={block.icon} className='h-16 mb-8' alt={block.title} />
          <span className='block font-bold text-3xl'>{block.title}</span>
          <span className='block text-xl tracking-wide'>{block.text}</span>
        </div>
        {i % 2 === 1 && <Image isSecond />}
      </div>
    );
  };
  const BaseCopy = [
    {
      title: 'Farine Selezionate',
      text: 'Tutte le nostre Pinse vengono realizzate utilizzando un mix di farine selezionate: farine di frumento tenero, farina di riso, farina di soia, lievito madre, acqua e sale e lasciate lievitare tra le 48 e le 72 ore.',
      icon: MixFarine,
    },
    {
      title: 'Fatta a mano',
      text: 'Ogni base viene spianata a mano in forma ovale dai nostri pinsaioli seguendo la tradizione artigianale della vera Pinsa Romana®, per un prodotto altamente digeribile, gustoso e fragrante.',
      icon: FattaAMano,
    },
    {
      title: 'Ingredienti Certificati',
      text: 'Utilizziamo solo materie prime certificate che rispettano il protocollo di produzione. Questo ci permette di utilizzare il marchio Pinsa Romana® Originale.',
      icon: IngredientiCertificati,
    },

    {
      title: 'Zero Conservanti',
      text: 'Le nostre basi artigianali sono fresche, non congelate e senza conservanti o additivi aggiunti. Per lasciare inalterato il gusto e la freschezza, dopo una rapida scottatura, le lasciamo raffreddare per poi conservarle in ATM. Per questo consigliamo di consumare il prodotto entro 50 giorni dal confezionamento.',
      icon: ZeroConservanti,
    },
  ];
  return (
    <section id='la-base' className='flex flex-col mt-16 bg-brand-dark-1 z-10'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full flex flex-col gap-32 text-white'>
            <Fade triggerOnce>
              {BaseCopy.map((block, i) => {
                return (
                  <ImageWithTextBlocks
                    block={block}
                    key={`image-with-text_${i}`}
                    i={i}
                  />
                );
              })}
            </Fade>
          </div>
          {/*<img*/}
          {/*  src={BasePinza}*/}
          {/*  style={{*/}
          {/*    height: '70vh',*/}
          {/*    minHeight: '600px',*/}
          {/*  }}*/}
          {/*  alt=''*/}
          {/*  className='ml-auto lg:absolute right-0 w-full lg:w-6/12 object-cover opacity-50 hover:opacity-75 transition-opacity'*/}
          {/*/>*/}
        </div>
      </div>
    </section>
  );
}

export default BaseSection;
