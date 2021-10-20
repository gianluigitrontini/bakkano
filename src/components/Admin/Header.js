import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <header className='w-full border-b-2 border-gray-200 py-2'>
      <div className='container flex justify-between'>
        <Link to='/'>Torna al sito web</Link>
        <span className='block'>Ciao, Mario</span>
      </div>
    </header>
  );
}

export default AdminHeader;
