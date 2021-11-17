import React, { useLayoutEffect } from 'react';
import BlockWithIcon from '../BlockWithIcon';
import Artigianale from '../../assets/images/section-perche-noi/icons/artigianali.png';
import Vantaggi from '../../assets/images/section-perche-noi/icons/vantaggi.png';
import Versatile from '../../assets/images/section-perche-noi/icons/versatile.png';
import ImpastoNelForno from '../../assets/images/section-perche-noi/foto-impasto.png';
import Pizza from '../../assets/images/section-perche-noi/foto-pizza.png';

import { Fade } from 'react-awesome-reveal';

function PercheScegliereNoiSection() {
  const whyOurProducts = [
    {
      image: ImpastoNelForno,
      title: '100% Artigianali & Made in Italy',
      icon: Artigianale,
      text: [
        'Ogni base è realizzata rigorosamente a mano',
        'Utilizziamo solo farine Made in Italy e prodotti naturali',
        'Garantiamo un prodotto sicuro e buono come appena sfornato',
      ],
    },
    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2016/11/DSC_0499.jpg',
      title: 'Versatile e pronta in 5 minuti',
      icon: Versatile,
      text: [
        'Veloce da preparare perchè è una base già pronta',
        'Perfetta da farcire come vuoi',
        'Buona come appena sfornata. Per terminare la cottura servono solo 5 minuti in un qualsiasi forno sia professionale che casalingo',
      ],
    },
    {
      image:
        'https://www.pinsaromana.info/wp-content/uploads/2016/04/12963579_643124025834828_5970183526235300590_n-new.jpg',
      title: 'Tanti vantaggi per il tuo locale',
      icon: Vantaggi,
      text: [
        'Offrire un prodotto di alta qualità senza assumere un pizzaiolo professionista',
        'Effettuare anche piccoli ordini per evitare le eccedenze',
        'Eliminare i costi di macchinari di produzione e della loro manutenzione',
        'Rendere il tuo menù ancora più ricco e gustoso',
      ],
    },
  ];

  const BlockWithBackgroundImage = ({ image, title, children }) => {
    return (
      <div className='flex flex-col mb-16'>
        <div
          style={{
            backgroundImage: `url(${image})`,
            minHeight: '350px',
            height: '350px',
          }}
          className='bg-fixed w-full bg-no-repeat bg-center bg-cover flex flex-col relative'>
          <div className='overlay absolute top-0 bottom-0 right-0 left-0 bg-black w-full opacity-25'></div>
          <div className='container z-10 flex flex-col mt-auto'>
            <h3 className='text-4xl lg:text-6xl mb-4 text-white tracking-wide font-bold'>
              {title}
            </h3>
          </div>
        </div>
        <div className='container flex-col lg:flex-row flex gap-32 my-16 text-center'>
          {children}
        </div>
      </div>
    );
  };
  return (
    <section
      id='perche-scegliere-noi'
      className='flex flex-col bg-brand-dark-1 z-10 '>
      <div className='container mx-auto w-full flex flex-col text-center md:text-left md:flex-row items-center mt-16'>
        <h1 className='main-title text-3xl lg:text-7xl uppercase text-white font-bold tracking-wide w-8/12'>
          Perché scegliere i nostri prodotti
        </h1>
        <span className='block border-b-4 border-red-500 h-4 w-4/12'></span>
      </div>
      <div className='flex flex-col lg:flex-row items-center mt-16 lg:mt-24'>
        <div className='perchenoi_blocks-container flex flex-col gap-16 my-4 text-white w-full'>
          <Fade triggerOnce>
            {whyOurProducts.map((block, i) => {
              return (
                <BlockWithBackgroundImage
                  image={block.image}
                  title={block.title}>
                  {block.text.map((sentence, i) => (
                    <div
                      className={`lg:w-1/${block.text.length} transform translate-y-2/4 relative my-2 text-2xl border-4 border-red-500 text-white p-4 flex items-center justify-center`}
                      key={'sentence-' + i}>
                      {sentence}
                      <span className='absolute font-bold left-0 top-0 transform -translate-x-2/4 -translate-y-2/4 text-6xl'>
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </BlockWithBackgroundImage>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default PercheScegliereNoiSection;
