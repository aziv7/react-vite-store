import React, { memo } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
const Header = (props) => {
  return (
    <div className=' px-5 py-5 flex justify-between items-center'>
      <span className='cursor-pointer'>
        <BiMenuAltRight size={'2.5rem'} />
      </span>

      <div className='bg-gray-200 w-[2.75rem] h-[2.75rem] rounded-full cursor-pointer'>
        <img
          src='https://images.unsplash.com/photo-1679412330029-66dbd3365fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
          className='rounded-full w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default memo(Header);
