import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      const header = document.querySelector('header');
      document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('shadow-classic');
        } else {
          header.classList.remove('shadow-classic');
        }
      });
    });
  }, []);

  return (
    <header className='bg-white z-50 w-full py-4 transition-all flex items-center'>
      <div className='container mx-auto flex justify-between items-center'>
        <img
          className='w-24 md:w-32'
          src='https://bakkanoinviamanara.com/wp-content/uploads/2015/12/Bakkano_Logo_Black_230x87.png'
          alt=''
        />
        <nav>
          <ul className='flex items-center justify-between ml-auto uppercase'>
            <li className='mr-2 tracking-wide'>Ordina</li>
            <li className='ml-2 px-4 py-2 bg-red-600 hover:bg-red-700 cursor-pointer tracking-wide transition-colors duration-200 transform text-white focus:outline-none focus:bg-red-500'>
              I Nostri Prodotti
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
