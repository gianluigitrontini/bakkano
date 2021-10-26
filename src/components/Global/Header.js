import React, { useLayoutEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';

function Header() {
  useLayoutEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      const header = document.querySelector('header');
      document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add(
            'bg-brand-dark-1',
            'bg-opacity-75',
            'backdrop-blur',
            'border-white'
          );
        } else {
          if (
            header.classList.contains(
              'bg-brand-dark-1',
              'bg-opacity-75',
              'backdrop-blur',
              'border-white'
            )
          ) {
            header.classList.remove(
              'bg-brand-dark-1',
              'bg-opacity-75',
              'backdrop-blur',
              'border-white'
            );
          }
        }
      });
    });
  }, []);

  return (
    <header className='fixed top-0 h-header bg-transparent z-50 w-full py-4 transition-all border-b-2 border-transparent duration-700 flex items-center backdrop-filter'>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />
        <nav>
          <ul className='flex items-center justify-between ml-auto uppercase text-white'>
            <Link
              to='i-nostri-prodotti'
              smooth={true}
              offset={-50}
              className='mr-2 tracking-wide cursor-pointer'>
              I nostri prodotti
            </Link>
            <Link
              to='#'
              className='ml-2 px-4 py-2 bg-red-600 hover:bg-red-700 cursor-pointer tracking-wide transition-colors duration-200 transform text-white focus:outline-none focus:bg-red-500'>
              Acquista
            </Link>
          </ul>
        </nav>
      </div>
      <div className='opacity-0 transition-all dashed-background w-full absolute bottom-0 h-4'></div>
    </header>
  );
}

export default Header;
