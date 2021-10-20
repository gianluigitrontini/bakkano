import React from 'react';

import ATMIcon from '../../../assets/images/section-prodotti/icons/atm-icon.png';
import ScatolaIcon from '../../../assets/images/section-prodotti/icons/scatola-icon.png';
import CartoneIcon from '../../../assets/images/section-prodotti/icons/cartone-icon.png';
import SGIcon from '../../../assets/images/section-prodotti/icons/gluten-free.png';
import Dimensioni from '../../../assets/images/section-prodotti/icons/dimensioni.png';
import Peso from '../../../assets/images/section-prodotti/icons/peso.png';
import Scadenza from '../../../assets/images/section-prodotti/icons/scadenza.png';
import Lievitazione12 from '../../../assets/images/section-prodotti/icons/lievitazione-12.png';
import Lievitazione24 from '../../../assets/images/section-prodotti/icons/lievitazione-24.png';
import Lievitazione72 from '../../../assets/images/section-prodotti/icons/lievitazione-72.png';
import Forno from '../../../assets/images/section-prodotti/icons/forno.png';
import Vegan from '../../../assets/images/section-prodotti/icons/vegan.png';
import ProdottoFresco from '../../../assets/images/section-prodotti/icons/prodotto-fresco.png';

function Product({ product }) {
  const handleLievitazioneIcon = () => {
    const icon =
      product.fermentationTime === 12
        ? Lievitazione12
        : product.fermentationTime === 24
        ? Lievitazione24
        : Lievitazione72;
    return icon;
  };

  return (
    <div className='flex flex-col w-full lg:flex-row items-center bg-white rounded-lg my-16 gap-x-8'>
      <div className='order-0 flex flex-col relative w-full lg:w-4/12'>
        <img
          className='object-contain object-center w-full h-full'
          src={product.images[0]}
          alt='Prodotto da Forno'
        />
        <img
          src={ProdottoFresco}
          className='absolute left-0 top-0 w-16 opacity-75'
          alt=''
        />
        <div
          className={`flex justify-between w-full relative items-center px-4 py-3 rounded-lg shadow-classic ${
            product.isGlutenFree ? 'bg-brand-green' : ' bg-brand-brown'
          }`}>
          <h1 className='text-3xl uppercase font-windi text-white tracking-widest'>
            {product.name}
          </h1>
          {product.isGlutenFree && (
            <img src={SGIcon} className='w-8' alt='Prodotto Senza Glutine' />
          )}
        </div>
      </div>

      <div className='order-2 lg:order-1 product-content flex flex-col p-4 w-full lg:w-5/12'>
        <div className='my-auto'>
          {product.style.map((style, i) => {
            return (
              <div key={`product_style-${i}`} className='my-4'>
                <div className='flex items-center'>
                  <h1 className='text-xl font-semibold text-gray-800 min-w-150'>
                    {style.name}
                  </h1>
                  <span className='block border-b-4 border-red-500 h-4 w-full'></span>
                </div>

                <div className='flex flex-col mt-2 text-gray-700'>
                  <h3 className='font-bold'>Ingredienti</h3>
                  <span className='inline-block'>
                    {style.ingredients.join(', ')}
                  </span>

                  {style.allergens && (
                    <>
                      <h3 className='font-bold'>Allergeni</h3>
                      <span className='inline-block'>
                        {style.allergens.join(', ')}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Badges Fermentazione, Tempo e Vegano */}
        <div className='flex items-end justify-between py-4 opacity-75'>
          <div className='flex flex-col items-center text-center'>
            <img
              src={handleLievitazioneIcon()}
              alt='Lievitazione'
              className='w-8'
            />
            <span className='mt-2'>
              {product.fermentationTime} Ore di Lievitazione
            </span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src={Forno} alt='Icona di un Forno' className='w-7' />
            <span className='mt-2'>Pronto in {product.cookingTime} Minuti</span>
          </div>
          {product.isVegan && (
            <div className='flex flex-col items-center text-center'>
              <img src={Vegan} alt='Prodotto Vegano' className='w-8' />
              <span className='mt-2'>Prodotto Vegano</span>
            </div>
          )}
        </div>
      </div>

      <div className='order-1 lg:order-2 flex flex-col w-full lg:w-3/12 '>
        {/* Specifiche Prodotto */}
        <div className='p-4 w-full flex items-center justify-between border-b border-gray-300'>
          <span className='flex items-center'>
            <img
              src={Dimensioni}
              className='mr-2 w-4'
              alt='Icona dalla forma di una pizza allungata'
            />
            {product.dimensions}
          </span>
          <span className='flex items-center'>
            <img src={Peso} className='mr-2 w-4' alt='Icona di una bilancia' />
            {product.weight} g
          </span>
          <span className='flex items-center'>
            <img
              src={Scadenza}
              className='mr-2 w-4'
              alt='Icona di una clessidra'
            />
            {product.expiration} giorni
          </span>
        </div>
        <div className=''>
          <table className='text-center w-full mt-2'>
            <thead>
              <tr className='border-b border-gray-100'>
                <th className='font-normal align-bottom p-2'>
                  <img src={ATMIcon} className='mt-auto w-8 mx-auto' alt='' />
                  <span className='block text-sm text-center mt-1'>
                    Pack ATM
                  </span>
                </th>
                <th className='font-normal align-bottom p-2'>
                  <img
                    src={ScatolaIcon}
                    className='mt-auto w-8 mx-auto'
                    alt=''
                  />
                  <span className='block text-sm text-center mt-1'>
                    Scatola
                  </span>
                </th>
                <th className='font-normal align-bottom p-2'>
                  <img
                    src={CartoneIcon}
                    className='mt-auto w-8 mx-auto'
                    alt=''
                  />
                  <span className='block text-sm text-center mt-1'>
                    Cartone
                  </span>
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
                      {size.md && (
                        <span className='block font-normal'>pack</span>
                      )}
                    </td>
                    <td className='p-2'>
                      {size.lg ?? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: '&mdash;',
                          }}></span>
                      )}
                      {size.lg && (
                        <span className='block font-normal'>pack</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pacchetti e Formati */}
    </div>
  );
}

export default Product;
