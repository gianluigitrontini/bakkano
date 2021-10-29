import React from 'react';
import ZeroConservanti from '../../assets/images/section-base/icons/0-conservanti.png';
import IngredientiCertificati from '../../assets/images/section-base/icons/certified.png';
import FattaAMano from '../../assets/images/section-base/icons/fatta-a-mano.png';
import MixFarine from '../../assets/images/section-base/icons/mix-farine.png';

import { Fade } from 'react-awesome-reveal';

import BG from '../../assets/images/section-base/svg-bg-2.png';

function BaseSection() {
  const ImageWithTextBlocks = ({ block, i }) => {
    const Image = ({ isSecond }) => {
      return (
        <img
          src='https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
          className={`object-cover lg:w-2/3 ${
            isSecond && 'order-1 lg:order-2'
          }`}
          style={{ maxHeight: '450px' }}
          alt={block.title}
        />
      );
    };
    return (
      <div
        className='flex flex-col lg:flex-row items-center gap-8 w-full'
        key={i}>
        {i % 2 === 1 && <Image />}
        <div className='lg:w-1/3 order-2 lg:order-1'>
          <img src={block.icon} className='h-16 mb-8' alt={block.title} />
          <span className='block font-bold text-heading text-3xl'>
            {block.title}
          </span>
          <span className='block text-paragraph text-xl tracking-wide'>
            {block.text}
          </span>
        </div>
        {i % 2 === 0 && <Image isSecond />}
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
    <section
      id='la-base'
      className='flex flex-col py-24 bg-brand-dark-1 z-10 relative'>
      <div className='container z-10'>
        <div className='w-full flex flex-col gap-16 text-white'>
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
      </div>
      <img src={BG} className='absolute z-0 top-0 left-0 right-0 w-full' />
      <img
        src={BG}
        className='absolute z-0 bottom-0 left-0 right-0 w-full'
        style={{ height: '150vh' }}
      />
    </section>
  );
}

export default BaseSection;
