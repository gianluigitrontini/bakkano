import React from 'react';

import { contenuto } from '../../data';
import { Fade } from 'react-awesome-reveal';

import BG from '../../assets/images/section-base/bg-bakkano-abstract.svg';

function BaseSection() {
  const ImageWithTextBlocks = ({ block, i }) => {
    const Image = ({ isSecond }) => {
      return (
        <>
          <img
            src={block.image}
            className={`object-cover h-[450px] lg:w-1/2 absolute w-full
            ${isSecond ? 'right-0 order-1 lg:order-2' : 'left-0'}`}
            alt={block.title}
          />

          <div
            className={` w-2/3 h-[450px] ${
              isSecond ? 'right-0 order-1 lg:order-2' : 'left-0'
            }`}></div>
        </>
      );
    };
    return (
      <div
        className='flex flex-col lg:flex-row items-center gap-8 w-full'
        key={i}>
        {i % 2 === 1 && <Image />}
        <div className='lg:w-1/3 order-2 lg:order-1'>
          <img src={block.icon} className='h-16 mb-8' alt={block.title} />
          <span className='block font-bold text-heading text-3xl mb-8'>
            {block.title}
          </span>
          <span className='block text-paragraph text-base tracking-wide'>
            {block.text}
          </span>
        </div>
        {i % 2 === 0 && <Image isSecond />}
      </div>
    );
  };

  return (
    <section
      id='la-base'
      className='flex flex-col py-24 gradient-dark-background z-10 relative'>
      <div className='container z-10'>
        <div className='w-full flex flex-col gap-40 text-white'>
          <Fade triggerOnce>
            {contenuto.baseSection.map((block, i) => {
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
      <img
        src={BG}
        className='absolute z-0 top-0 left-0 right-0 w-full opacity-[0.3]'
        alt=''
      />
      <img
        src={BG}
        className='absolute z-0 bottom-0 right-0 w-full object-contain object-right'
        style={{ height: '150vh' }}
        alt=''
      />
    </section>
  );
}

export default BaseSection;
