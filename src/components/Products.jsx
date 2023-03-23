import React, { memo, useState } from 'react';
import { FaStar } from 'react-icons/fa';
const Products = () => {
  const [products, setProducts] = useState([
    {
      name: 'SleepHaven King',
      image: 'https://source.unsplash.com/500x500?bed',
      label: '2 Colours, 1 Size',
      price: '$345.50',
      rating: 4,
    },
    {
      name: 'White bed for kids',
      image: 'https://source.unsplash.com/520x520?bed',
      label: '2 Colours, 1 Size',
      price: '$120.65',
      rating: 4,
    },
    {
      name: 'BlueBed Comfy',
      image: 'https://source.unsplash.com/510x510?bed',
      label: '2 Colours, 1 Size',
      price: '$120.65',
      rating: 4,
    },
    {
      name: 'Cozzy Bed Queen',
      image: 'https://source.unsplash.com/530x530?bed',
      label: '2 Colours, 1 Size',
      price: '$120.65',
      rating: 4,
    },
  ]);
  return (
    <div className='grid grid-cols-2 gap-4 px-5 pb-[6rem]'>
      {products.map((product, idx) => (
        <div
          key={idx}
          className='cursor-pointer bg-[#FDFDFD] border border-[#EDEDED] p-2 rounded-3xl shadow-[0px_4px_14px_rgba(0,0,0,0.04)]'>
          <div className='aspect-[1.1515/1] rounded-2xl overflow-hidden mb-1'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-full object-cover'
            />
          </div>
          <strong className='text-sm font-medium'>{product.name}</strong>
          <span className='block text-[#646464] text-xs'>{product.label}</span>
          <div className='flex gap-0.5 py-1'>
            {[0, 1, 2, 3, 4].map((star) => (
              <FaStar
                key={star}
                fontSize={12}
                className={
                  star >= product.rating ? 'text-[#DEDEDE]' : 'text-[#FFC736]'
                }
              />
            ))}
          </div>
          <strong className='text font-semibold'>{product.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default memo(Products);
