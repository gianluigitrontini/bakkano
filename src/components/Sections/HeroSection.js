import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import fotoHamburger from '../../assets/images/foto-hamburger.png';
import fotoHamburgerConPatatine from '../../assets/images/foto-hamburger-con-patatine.png';
import fotoPinsaBiancaCondita from '../../assets/images/foto-pinsa-bianca-condita.png';
import fotoPinsaFarcita from '../../assets/images/pinsa-farcita.jpg';

function HeroSection() {
  const [slideNumber, setSlideNumber] = useState(1);

  const heroCarousel = [
    {
      slideId: '1',
      title: 'La Base',
      secondTitle: 'Che fa la differenza',
      description:
        'Un impasto che abbiamo perfezionato nel tempo con amore e passione. Un prodotto che abbiamo testato personalmente su migliaia di clienti. Tanti formati per ogni esigenza.',
      image: fotoPinsaFarcita,
    },
    {
      slideId: '2',
      title: 'Il risultato',
      secondTitle: 'di anni di esperienza',
      description:
        'Anno dopo anno ha conquistato i clienti del nostro territorio e oggi, attraverso il nostro laboratorio, prepariamo e distribuiamo la vera Pinsa Romana anche per la tua attività.',
      image: fotoPinsaBiancaCondita,
    },
    {
      slideId: '3',
      title: 'Artigianale al 100%',
      secondTitle: 'E si prepara in un attimo',
      description: 'ideali per pizzerie, birrerie, ristoranti, bar, alberghi.',
      image: fotoHamburgerConPatatine,
    },
    {
      slideId: '4',
      title: 'Ingredienti Naturali',
      secondTitle: 'Semplici e di altissima qualità',
      description:
        'Per prodotti facili da gestire, da farcire come preferisci e che ti permettono di eliminare tempi e costi di lavorazione.',
      image: fotoHamburger,
    },
  ];

  const Carousel = ({ carouselData }) => {
    useEffect(() => {
      const interval = setInterval(() => {
        if (slideNumber == 3) {
          setSlideNumber(1);
        } else {
          setSlideNumber((slideNumber) => slideNumber + 1);
        }
      }, 4500);
      return () => clearInterval(interval);
    }, []);

    return carouselData.map((item) => {
      return (
        <div
          key={`carousel-${item.slideId}`}
          className={`border-b-4 border-red-500 absolute top-0 bottom-0 left-0 right-0 h-screen w-full w-full transition-opacity animate-zoom-slowly overflow-hidden fixed-image-background ${
            slideNumber.toString() === item.slideId
              ? 'opacity-100 z-10'
              : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${item.image})` }}>
          <div className='absolute bg-black opacity-50 top-0 right-0 left-0 bottom-0'></div>

          <div className='h-screen container mx-auto flex items-center w-full'>
            <div className='flex flex-col w-full lg:w-2/3 font-semibold text-white uppercase '>
              <Fade>
                <div className='flex flex-col'>
                  <span className='block text-5xl lg:text-8xl'>
                    {item.title}
                  </span>

                  {item.secondTitle && (
                    <span className='block text-3xl lg:text-6xl'>
                      {item.secondTitle}
                    </span>
                  )}
                  {item.description && (
                    <p className='my-8 lg:w-2/3 font-light text-2xl'>
                      {item.description}
                    </p>
                  )}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section
      id='hero'
      className='flex flex-col relative bg-brand-dark-1 h-screen'>
      <Carousel carouselData={heroCarousel} />
    </section>
  );
}

export default HeroSection;
