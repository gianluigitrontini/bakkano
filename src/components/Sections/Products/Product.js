import React, { useState } from 'react';

import ATMIcon from '../../../assets/images/section-prodotti/icons/atm-icon.png';
import ScatolaIcon from '../../../assets/images/section-prodotti/icons/scatola-icon.png';
import CartoneIcon from '../../../assets/images/section-prodotti/icons/cartone-icon.png';
import SGIcon from '../../../assets/images/section-prodotti/icons/gluten-free.png';
import Dimensioni from '../../../assets/images/section-prodotti/icons/dimensioni.png';
import Peso from '../../../assets/images/section-prodotti/icons/peso.png';
import Scadenza from '../../../assets/images/section-prodotti/icons/scadenza.png';

function Product({ product }) {
  const [expanded, setExpanded] = useState(
    new Array(product.style.lenght).fill(0)
  );
  const setVariantExpanded = (i) => {
    let tempExpanded = [...expanded];
    tempExpanded[i] = !expanded[i];
    setExpanded(tempExpanded);
  };

  return (
    <div className='flex flex-col overflow-hidden bg-white rounded-lg border border-gray-200'>
      <img
        className='object-contain object-center w-full h-64'
        src={product.images[0]}
        alt='avatar'
      />
      <div
        className={`flex justify-between w-full relative items-center px-4 py-3 bg-white border-t-4 border-b-4 border-dashed border-white ${
          product.isGlutenFree ? 'bg-green-500' : ' bg-yellow-500'
        }`}>
        <h1 className='text-3xl uppercase font-windi text-white tracking-widest'>
          {product.name}
        </h1>
        {product.isGlutenFree && (
          <img src={SGIcon} className='w-8' alt='Prodotto Senza Glutine' />
        )}
      </div>
      <div className='p-4 flex items-center justify-between'>
        <span className='flex items-center'>
          <img
            src={Dimensioni}
            className='mr-2'
            alt='Icona dalla forma di una pizza allungata'
          />
          {product.dimensions}
        </span>
        <span className='flex items-center'>
          <img src={Peso} className='mr-2' alt='Icona di una bilancia' />
          {product.weight} g
        </span>
        <span className='flex items-center'>
          <img src={Scadenza} className='mr-2' alt='Icona di una clessidra' />
          {product.expiration} giorni
        </span>
      </div>
      <div className='product-content flex flex-col p-4 pt-0'>
        {product.style.map((style, i) => {
          return (
            <div
              key={`product_style-${i}`}
              className='border-b border-gray-300 hover:border-red-400 transition-all cursor-pointer'>
              <div
                className='flex items-center w-full justify-between py-2'
                onClick={() => setVariantExpanded(i)}>
                <h1 className='text-xl font-semibold text-gray-800 min-w-150'>
                  {style.name}
                </h1>
                <span className='text-red-600'> {expanded[i] ? '-' : '+'}</span>
              </div>
              <div
                className={`flex flex-col text-gray-700 overflow-hidden ${
                  expanded[i] ? 'h-auto pt-2 pb-4' : 'h-0'
                }`}>
                <h3 className='font-bold'>Ingredienti</h3>
                <span className='inline-block'>{style.ingredients}</span>

                {style.allergens && (
                  <>
                    <h3 className='font-bold'>Allergeni</h3>
                    <span className='inline-block'>{style.allergens}</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Badges Fermentazione, Tempo e Vegano */}
      {/* <div className='flex items-end justify-between p-4'>
        <div className='flex flex-col items-center text-center'>
          <img
            src={handleLievitazioneIcon()}
            alt='Lievitazione'
            className='w-12'
          />
          <span className='mt-2'>
            {product.fermentationTime} Ore di Lievitazione
          </span>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img src={Forno} alt='Icona di un Forno' className='w-10' />
          <span className='mt-2'>Pronto in {product.cookingTime} Minuti</span>
        </div>
        {product.isVegan && (
          <div className='flex flex-col items-center text-center'>
            <img src={Vegan} alt='Prodotto Vegano' className='w-12' />
            <span className='mt-2'>Prodotto Vegano</span>
          </div>
        )}
      </div> */}
      {/* Pacchetti e Formati */}
      <div className='mt-auto'>
        <table className='text-center w-full mt-2'>
          <thead>
            <tr className='border-b border-gray-100'>
              <th className='font-normal align-bottom p-2'>
                <img src={ATMIcon} className='mt-auto w-8 mx-auto' alt='' />
                <span className='block text-sm text-center mt-1'>Pack ATM</span>
              </th>
              <th className='font-normal align-bottom p-2'>
                <img src={ScatolaIcon} className='mt-auto w-8 mx-auto' alt='' />
                <span className='block text-sm text-center mt-1'>Scatola</span>
              </th>
              <th className='font-normal align-bottom p-2'>
                <img src={CartoneIcon} className='mt-auto w-8 mx-auto' alt='' />
                <span className='block text-sm text-center mt-1'>Cartone</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {product.packageSizes.map((size, i) => {
              return (
                <tr
                  key={`product_pckg-${i}`}
                  className='font-bold border-b border-gray-100'>
                  <td className='p-2'>
                    {size.sm ?? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: '&mdash;',
                        }}></span>
                    )}
                    {size.sm && <span className='block font-normal'>pz</span>}
                  </td>
                  <td className='p-2'>
                    {size.md ?? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: '&mdash;',
                        }}></span>
                    )}
                    {size.md && <span className='block font-normal'>pack</span>}
                  </td>
                  <td className='p-2'>
                    {size.lg ?? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: '&mdash;',
                        }}></span>
                    )}
                    {size.lg && <span className='block font-normal'>pack</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
