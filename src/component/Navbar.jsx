import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import icon from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-7xl mx-auto mt-5'>
      <div></div>
      <ul className='flex justify-center items-center gap-4'>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/career">Career</NavLink></li>
      </ul>
      <div className='flex gap-4 justify-center items-center'>
      <Image
      src={icon}
      alt='user icon'
      height={50}
      width={50}
      ></Image>
      <Link href='/login'><button className='btn bg-[#403F3F] text-white'>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;