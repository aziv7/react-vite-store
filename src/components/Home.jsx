import React, { memo } from 'react';

const Home = () => {
  return (
    <div className='px-5'>
      <h1 className='text-[1.65rem] font-semibold leading-tight'>
        Choose Your
      </h1>
      <h1 className='text-[1.65rem] font-semibold leading-tight'>
        Best Furniture
      </h1>
      <p className='text-sm text-gray-500 mt-1'>
        {' '}
        Your perfect furniture is here.
      </p>
    </div>
  );
};

export default memo(Home);
