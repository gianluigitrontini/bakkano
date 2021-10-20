import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useEffect } from 'react/cjs/react.development';
// import { Link } from 'react-scroll';
// import FirmaChef from '../../assets/images/firma-chef.png';
import pinsaConSalame from '../../assets/images/foto-pinsa-con-salame.png';
import fotoHamburger from '../../assets/images/foto-hamburger.png';
const pinsa =
  'https://bakkanoinviamanara.com/wp-content/uploads/2020/01/persito2.jpg';

function HeroSection() {
  const [slideNumber, setSlideNumber] = useState(1);

  const heroCarousel = [
    {
      slideId: '1',
      title: 'La Base',
      secondTitle: 'Che fa la differenza',
      description: '',
      image: pinsa,
    },
    {
      slideId: '2',
      title: 'Preparala',
      secondTitle: 'In un attimo',
      description: '',
      image: pinsaConSalame,
    },
    {
      slideId: '3',
      title: 'Ingredienti Naturali',
      secondTitle: 'Che la rendono speciale',
      description: '',
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
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return carouselData.map((item) => {
      return (
        <div
          key={`carousel-${item.slideId}`}
          className={`${
            slideNumber.toString() === item.slideId
              ? 'opacity-100'
              : 'opacity-0 h-0'
          }`}>
          <img
            alt='Una pinsa appena sfornata e tagliata'
            src={item.image}
            className='animate-zoom-slowly fixed opacity-100 h-screen top-0 left-0 right-0 w-full transition-opacity object-cover bg-no-repeat'
          />
          <div className='fixed bg-black opacity-50 top-0 right-0 left-0 bottom-0'></div>

          <div className='h-screen container mx-auto flex items-center w-full'>
            <div className=' flex flex-col w-fulllg:w-2/3 font-semibold text-white uppercase '>
              <Fade>
                <div className='flex flex-col'>
                  <span className='block text-5xl lg:text-8xl'>
                    {item.title}
                  </span>
                  <span className='block text-3xl lg:text-6xl'>
                    {item.secondTitle}
                  </span>
                  {item.description && <p>{item.description}</p>}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section id='hero' className='flex flex-col relative bg-brand-dark-1'>
      {/* <img
        alt='Una pinsa appena sfornata e tagliata'
        src={pinsa}
        className='fixed opacity-100 h-screen top-0 left-0 right-0 w-full transition-opacity object-cover bg-no-repeat'
      />
      <div className='fixed bg-black opacity-50 top-0 right-0 left-0 bottom-0'></div>
      <div className='h-screen container mx-auto flex items-center w-full'>
        <div className=' flex flex-col w-2/3 font-semibold text-white uppercase '>
          <Fade>
            <div className='flex flex-col'>
              <span className='block text-8xl'>La Base</span>
              <span className='block text-6xl'>Che fa la differenza</span>
            </div>
          </Fade>
        </div>
      </div> */}
      <Carousel carouselData={heroCarousel} />
    </section>
  );
}

export default HeroSection;
