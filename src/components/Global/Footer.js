import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <footer className='border-b-4 border-red-500'>
      <div className='container flex flex-col items-center justify-between px-6 py-4 bg-brand-dark-1 sm:flex-row'>
        <Logo />

        <p className='py-2 text-white font-light sm:py-0'>
          &copy; Bakkano. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
