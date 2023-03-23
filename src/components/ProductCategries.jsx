import React, { memo } from 'react';
import { BsSearch } from 'react-icons/bs';
const ProductCategries = () => {
  return (
    <div className='mt-5 mx-5'>
      <div className=' flex items-center border rounded-full p-2 hover:border-gray-600 border-gray-300 space-x-3'>
        <span>
          <BsSearch className='text-gray-500' size={22} />
        </span>
        <input
          className='outline-none'
          placeholder='Search'
          id='search'
          type='text'
        />
      </div>
    </div>
  );
};

export default memo(ProductCategries);
