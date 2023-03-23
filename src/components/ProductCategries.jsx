import React, { memo, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
const ProductCategries = () => {
  const [categories, setCategories] = useState([
    'All',
    'Bed',
    'Chair',
    'Sofa',
    'Recliner',
  ]);
  const [selected, setSelected] = useState(0);

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
      <div className='flex space-x-3 py-5 px-2 my-5 overflow-x-auto'>
        {categories.map((c, i) => (
          <button
            key={c}
            onClick={() => setSelected(i)}
            className={`bg-gradient-to-tr transition-all duration-200 ease-in-out ${
              selected == i
                ? 'from-black to-gray-500 text-white'
                : 'from-gray-400 to-gray-100 text-black'
            }  rounded-full px-6 py-2.5`}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductCategries);
