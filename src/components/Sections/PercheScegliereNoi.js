import React, { useLayoutEffect } from 'react';
import BlockWithIcon from '../BlockWithIcon';
import Artigianale from '../../assets/images/section-perche-noi/icons/artigianali.png';
import Vantaggi from '../../assets/images/section-perche-noi/icons/vantaggi.png';
import Versatile from '../../assets/images/section-perche-noi/icons/versatile.png';
import ImpastoNelForno from '../../assets/images/section-perche-noi/foto-impasto.png';
import Pizza from '../../assets/images/section-perche-noi/foto-pizza.png';

import { Fade } from 'react-awesome-reveal';

function PercheScegliereNoi() {
  useLayoutEffect(() => {
    const images = document.querySelectorAll(
      '.perchenoi_images-container > img'
    );
    const blocks = document.querySelectorAll(
      '.perchenoi_blocks-container > div'
    );

    blocks[0].addEventListener('mouseenter', () => {
      images[1].style.opacity = 0.5;
      images[2].style.opacity = 0.5;
    });

    blocks[0].addEventListener('mouseleave', () => {
      images[1].style.opacity = 1;
      images[2].style.opacity = 1;
    });
  }, []);

  useLayoutEffect(() => {
    const images = document.querySelectorAll(
      '.perchenoi_images-container > img'
    );
    const blocks = document.querySelectorAll(
      '.perchenoi_blocks-container > div'
    );

    blocks[1].addEventListener('mouseenter', () => {
      images[0].style.opacity = 0.5;
      images[2].style.opacity = 0.5;
    });

    blocks[1].addEventListener('mouseleave', () => {
      images[0].style.opacity = 1;
      images[2].style.opacity = 1;
    });
  }, []);

  useLayoutEffect(() => {
    const images = document.querySelectorAll(
      '.perchenoi_images-container > img'
    );
    const blocks = document.querySelectorAll(
      '.perchenoi_blocks-container > div'
    );

    blocks[2].addEventListener('mouseenter', () => {
      images[0].style.opacity = 0.5;
      images[1].style.opacity = 0.5;
    });

    blocks[2].addEventListener('mouseleave', () => {
      images[0].style.opacity = 1;
      images[1].style.opacity = 1;
    });
  }, []);

  const whyOurProducts = [
    {
      title: '100% Artigianali & Made in Italy',
      icon: Artigianale,
      text: [
        'Ogni base è realizzata rigorosamente a mano',
        'Utilizziamo solo farine Made in Italy e prodotti naturali',
        'Garantiamo un prodotto sicuro e buono come appena sfornato',
      ],
    },
    {
      title: 'Versatile e pronta in 5 minuti',
      icon: Versatile,
      text: [
        'Veloce da preparare perchè è una base già pronta',
        'Perfetta da farcire come vuoi',
        'Buona come appena sfornata. Per terminare la cottura servono solo 5 minuti in un qualsiasi forno sia professionale che casalingo',
      ],
    },
    {
      title: 'Al tuo locale permette di',
      icon: Vantaggi,
      text: [
        'Offrire un prodotto di alta qualità senza assumere un pizzaiolo professionista',
        'Effettuare anche piccoli ordini per evitare le eccedenze',
        'Eliminare i costi di macchinari di produzione e della loro manutenzione',
        'Rendere il tuo menù ancora più ricco e gustoso',
      ],
    },
  ];
  return (
    <section id='perche-scegliere-noi flex flex-col '>
      <div className='container mx-auto w-full flex flex-col text-center md:text-left md:flex-row items-center mt-16'>
        <h1 className='main-title text-3xl lg:text-8xl uppercase text-black font-bold tracking-wide w-8/12'>
          Perché scegliere i nostri prodotti
        </h1>
        <span className='block border-b-4 border-red-500 h-4 w-4/12'></span>
      </div>
      <div className='container flex flex-col lg:flex-row items-center mt-16 lg:mt-32'>
        <div className='perchenoi_images-container w-full lg:w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-8 lg:pr-8'>
          <img
            src='https://www.pinsaromana.info/wp-content/uploads/bfi_thumb/lavorazione-impasto-pizza-llwyjy8ifrn9110baqojojbzmzx1p0fnn42lax5nzs.jpg'
            className='col-span-2 h-72 w-full overflow-hidden rounded object-cover w-full object-center shadow-md transition-opacity'
            alt=''
          />
          <img
            src={Pizza}
            className='col-span-1 h-72 overflow-hidden w-full rounded object-cover object-center shadow-md transition-opacity'
            alt=''
          />
          <img
            src={ImpastoNelForno}
            className='col-span-1 h-72 overflow-hidden rounded object-cover w-full object-left shadow-md transition-opacity'
            alt=''
          />
        </div>
        <div className='perchenoi_blocks-container flex flex-col my-4 lg:w-1/2'>
          <Fade triggerOnce>
            {whyOurProducts.map((block, i) => {
              return (
                <BlockWithIcon
                  changeOnMobile
                  className='hover:bg-red-50 p-4 transition-all'
                  key={'perchenoi-' + i}
                  icon={block.icon}
                  title={block.title}>
                  {block.text.map((sentence, i) => (
                    <p className='my-2 text-xl' key={'sentence-' + i}>
                      &mdash; &nbsp;
                      {sentence}
                    </p>
                  ))}
                </BlockWithIcon>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default PercheScegliereNoi;
