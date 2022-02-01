import React from 'react';
import Product from './Product';
import { products } from '../../../data.js';
import Badge from './Badge';

const badges = {
  pinsePinsotto: ['vegan', '72', 'cottura5'],
  senzaGlutine: ['24', 'vegan', 'cottura5'],
  teglie: ['72', 'vegan'],
  hamburgerPane: ['12'],
};

function ProductsSection() {
  const ProductsSectionTitle = ({ title, badge }) => {
    return (
      <div className='flex flex-col md:flex-row items-center mt-4 mb-12 md:mt-20 md:mb-12'>
        <h3 className='text-5xl text-white uppercase my-8 py-4 border-b-4 mr-auto border-red-500 w-fit-content pr-4'>
          {title}
        </h3>
        {badge && <Badge badge={badge} />}
      </div>
    );
  };
  return (
    <section
      id='i-nostri-prodotti'
      className='flex flex-col py-16 z-10 bg-brand-dark-1'>
      <div className='container'>
        <div className='mb-16 lg:mb-24 mx-auto w-full flex flex-col text-center md:text-left md:flex-row items-center mt-16'>
          <h1 className='min-w-fit-content main-title text-3xl lg:text-7xl uppercase text-white font-bold tracking-wide'>
            I nostri prodotti
          </h1>
          <span className='mx-auto lg:mr-0 lg:ml-16 block border-b-4 border-red-500 h-4 w-1/3 lg:w-full'></span>
        </div>
        <p className='text-white font-light text-center text-2xl lg:w-1/2 mx-auto'>
          Tanti formati per ogni esigenza. Dalla pinsa classica ovale alla pinsa
          mini, la gluten free e il croccantissimo pinsotto. Fino ai formati in
          teglia e in pala, l’hamburger e il pane in cassetta.
        </p>

        <ProductsSectionTitle title='Le Pinse' badge={badges.pinsePinsotto} />
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8'>
          {products
            .filter((item) => item.category === 'pinsa')
            .map((product, i) => {
              return <Product key={`product-${i}`} product={product} />;
            })}
        </div>

        <ProductsSectionTitle title='I Pinsotti' badge={badges.pinsePinsotto} />
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8'>
          {products
            .filter((item) => item.category === 'pinsotti')
            .map((product, i) => {
              return <Product key={`product-${i}`} product={product} />;
            })}
        </div>

        <ProductsSectionTitle
          title='I Senza Glutine'
          badge={badges.senzaGlutine}
        />
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8'>
          {products
            .filter((item) => item.category === 'senzaGlutine')
            .map((product, i) => {
              return <Product key={`product-${i}`} product={product} />;
            })}
        </div>

        <ProductsSectionTitle title='Le Teglie' badge={badges.teglie} />
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8'>
          {products
            .filter((item) => item.category === 'teglie')
            .map((product, i) => {
              return <Product key={`product-${i}`} product={product} />;
            })}
        </div>

        <ProductsSectionTitle
          title='Gli Hamburgers'
          badge={badges.hamburgerPane}
        />
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8'>
          {products
            .filter((item) => item.category === 'hamburgers')
            .map((product, i) => {
              return <Product key={`product-${i}`} product={product} />;
            })}
        </div>

        <ProductsSectionTitle title='Il Pane' badge={badges.hamburgerPane} />
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 gap-x-8'>
          {products
            .filter((item) => item.category === 'pane')
            .map((product, i) => {
              return <Product key={`product-${i}`} product={product} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
