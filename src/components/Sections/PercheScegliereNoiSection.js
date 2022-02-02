import React from 'react';

import { contenuto } from '../../data';

import { Fade } from 'react-awesome-reveal';
import PizzaVideo from '../../assets/images/pizza-bg.mp4';
import PizzaInPala from '../../assets/images/section-perche-noi/perche-noi-pinsa-1.png';

import { Ornament } from '../utils/SvgDecorations';

function PercheScegliereNoiSection() {
  const BlockWithBackgroundImage = ({ image, title, children }) => {
    return (
      <div className='flex flex-col mb-16'>
        <div
          style={{
            backgroundImage: `url(${image})`,
            minHeight: '350px',
            height: '350px',
          }}
          className='fixed-image-background w-full bg-no-repeat bg-center flex flex-col relative'>
          <div className='overlay absolute top-0 bottom-0 right-0 left-0 bg-black w-full opacity-25'></div>
          <div className='container z-10 flex flex-col mt-auto'>
            <h3 className='text-4xl lg:text-6xl mb-4 text-white tracking-wide font-bold'>
              {title}
            </h3>
          </div>
        </div>
        <div
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
          }}
          className='container flex flex-col lg:grid gap-16 mt-40 mb-16 text-center'>
          {children}
        </div>
      </div>
    );
  };

  const SectionHeading = () => (
    <div className='container mx-auto w-full flex flex-col text-center md:text-left md:flex-row items-center mt-16'>
      <h1 className='main-title text-3xl lg:text-7xl uppercase text-white font-bold tracking-wide w-8/12'>
        Perché scegliere i nostri prodotti
      </h1>
      <span className='block border-b-4 border-red-500 h-4 w-4/12'></span>
    </div>
  );
  return (
    <section
      id='perche-scegliere-noi'
      className='flex flex-col bg-brand-dark-1 z-10 '>
      <SectionHeading />
      <div className='flex flex-col lg:flex-row items-center mt-16 lg:mt-24'>
        <div className='perchenoi_blocks-container flex flex-col gap-36 lg:gap-56 my-4 text-white w-full'>
          <Fade triggerOnce>
            <section className='flex flex-col lg:flex-row items-center gap-8'>
              <div className='lg:w-1/2 relative'>
                <video autoPlay='autoplay' loop muted>
                  <source src={PizzaVideo} type='video/mp4'></source>
                </video>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25'></div>
              </div>
              <div className='lg:w-1/2 p-4 text-center lg:text-left'>
                <Ornament className='mb-8 opacity-[0.5] mx-auto lg:ml-0' />

                {/* <h2 className='text-3xl mb-8'>I nostri punti di forza</h2> */}
                <p className='text-2xl font-light mb-4'>
                  Ogni base è realizzata rigorosamente a mano.
                </p>
                <p className='text-2xl font-light mb-4'>
                  Utilizziamo solo farine Made in Italy e prodotti naturali.
                </p>
                <p className='text-2xl font-light'>
                  Garantiamo un prodotto sicuro e buono come appena sfornato.
                </p>
              </div>
            </section>

            <section className='flex flex-col lg:flex-row items-center justify-between gap-8 container'>
              <div className='lg:w-1/3 order-2 lg:order-1 text-center lg:text-left'>
                <Ornament className='mb-8 opacity-[0.5] mx-auto lg:ml-0' />
                <h2 className='text-3xl mb-8 lg:text-left'>
                  Estremamente versatile
                </h2>

                <p className='text-2xl font-light mb-8'>
                  Veloce da preparare perchè è una base già pronta, perfetta da
                  farcire come vuoi ed è buona come appena sfornata.
                </p>
                <p className='text-2xl font-light'>
                  Per terminare la cottura servono solo 5 minuti in un qualsiasi
                  forno sia professionale che casalingo.
                </p>
              </div>
              <div className='lg:w-1/2 relative lg:order-2'>
                <img
                  src={PizzaInPala}
                  className='object-contain'
                  alt='Pinsa in Pala'
                />
              </div>
            </section>

            <section className='w-full perche-noi-vantaggi-background relative flex items-center justify-center p-2 lg:p-8'>
              <div className='z-20 relative text-center container p-4 bg-[rgba(0,0,0,0.5)]'>
                <div className='p-4 lg:p-16 border border-red-500'>
                  <Ornament className='mb-8 opacity-[0.5] mx-auto ' />
                  <h2 className='text-3xl mb-16'>
                    Tanti vantaggi per il tuo locale
                  </h2>

                  <div className='flex flex-col lg:flex-row gap-16'>
                    <p className='text-2xl font-light lg:w-1/4'>
                      Offrire un prodotto di alta qualità senza assumere un
                      pizzaiolo professionista.
                    </p>
                    <p className='text-2xl font-light lg:w-1/4'>
                      Effettuare anche piccoli ordini per evitare le eccedenze.
                    </p>
                    <p className='text-2xl font-light lg:w-1/4'>
                      Eliminare i costi di macchinari di produzione e della loro
                      manutenzione
                    </p>
                    <p className='text-2xl font-light lg:w-1/4'>
                      Rendere il tuo menù ancora più ricco e gustoso.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default PercheScegliereNoiSection;
