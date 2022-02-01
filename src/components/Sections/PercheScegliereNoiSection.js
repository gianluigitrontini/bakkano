import React from 'react';

import { contenuto } from '../../data';

import { Fade } from 'react-awesome-reveal';

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
            {contenuto.percheNoiSection.map((block, i) => {
              return (
                <BlockWithBackgroundImage
                  image={block.image}
                  title={block.title}>
                  {block.text.map((sentence, i) => (
                    <div
                      className={`relative my-2 text-2xl border-4 border-red-500 text-white p-4 flex items-center justify-center`}
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
