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
      className={`block-with-icon flex ${
        vertical ? 'flex-col text-center' : ''
      } ${
        changeOnMobile ? 'flex-col text-center lg:flex-row lg:text-left' : ''
      } items-center ${className ? className : ''}`}>
      <div
        className={`${
          vertical
            ? 'h-16 mb-6'
            : changeOnMobile
            ? 'w-16 mb-4 mx-auto lg:ml-0 lg:mr-6'
            : 'w-16 mr-6'
        }`}>
        <img src={icon} alt='' className='h-full' />
      </div>
      <div className='flex flex-col w-full'>
        <h3 className='font-bold text-xl'>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default BlockWithIcon;
