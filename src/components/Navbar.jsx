import React, { memo, useState } from 'react';
import { BiHomeSmile } from 'react-icons/bi';
import { MdOutlineBookmarkAdded, MdOutlineCategory } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';
const Navbar = () => {
  const [navItems, _] = useState([
    {
      icon: <BiHomeSmile fontSize={26} />,
    },
    { icon: <MdOutlineBookmarkAdded fontSize={26} /> },
    { icon: <CgShoppingBag fontSize={26} /> },
    { icon: <MdOutlineCategory fontSize={26} /> },
  ]);
  const [selected, setSelected] = useState(0);

  return (
    <div className='flex justify-center items-center fixed bottom-0 rounded-t-xl left-0 w-full h-[5.25rem] bg-white shadow-[0px_-4px_25px_rgba(0,0,0,0.04)]'>
      <div className='flex gap-8'>
        {navItems.map((e, i) => (
          <button
            className={` bg-gradient-to-tr rounded-full ${
              selected == i
                ? 'from-black to-gray-500 text-white'
                : 'from-gray-400 to-gray-100 text-black'
            } h-[3.5rem] w-[3.5rem] flex items-center justify-center py-0 px-0 text-white`}>
            {e.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(Navbar);
