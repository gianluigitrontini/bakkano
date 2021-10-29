import React from 'react';

function BlockWithIcon({
  icon,
  children,
  title,
  vertical,
  className,
  changeOnMobile,
}) {
  return (
    <div
      className={`flex ${vertical ? 'flex-col text-center' : ''} ${
        changeOnMobile ? 'flex-col text-center lg:flex-row lg:text-left' : ''
      } items-center ${className ? className : ''}`}>
      <img src={icon} alt='' className='w-16 my-4 lg:mr-8' />
      <div className='flex flex-col w-full'>
        <h3 className='font-bold text-heading text-xl mb-4'>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default BlockWithIcon;
