import React from 'react';
import Product from './Product';
import Product2 from './Product2';
import data from '../../../data.js';

function ProductsSection() {
  return (
    <section
      id='i-nostri-prodotti'
      className='flex flex-col pt-16 z-10 bg-brand-dark-1'>
      <div className='container'>
        <div className='mb-16 lg:mb-24 mx-auto w-full flex flex-col text-center md:text-left md:flex-row items-center mt-16'>
          <h1 className='min-w-fit-content main-title text-3xl lg:text-7xl uppercase text-white font-bold tracking-wide'>
            I nostri prodotti
          </h1>
          <span className='mx-auto lg:mr-0 lg:ml-16 block border-b-4 border-red-500 h-4 w-1/3 lg:w-full'></span>
        </div>
        <h3 className='text-5xl text-white uppercase'>Le Pinse</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-12 gap-y-12'>
          {data.products.map((product, i) => {
            return <Product key={`product-${i}`} product={product} />;
          })}
        </div>
        <div>
          {data.products.map((product, i) => {
            return (
              <>
                <Product2 key={`product-${i}`} product={product} />
                <span className='block w-full border-b border-gray-200'></span>
              </>
            );
          })}
        </div>
        <h3 className='text-5xl text-white uppercase'>I Pinsotti</h3>
        <h3 className='text-5xl text-white uppercase'>I Senza Glutine</h3>
        <h3 className='text-5xl text-white uppercase'>Le Teglie</h3>
        <h3 className='text-5xl text-white uppercase'>Gli Hamburgers</h3>
        <h3 className='text-5xl text-white uppercase'>Il Pane</h3>
      </div>
    </section>
  );
}

export default ProductsSection;
