import React from 'react';
import image from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";



const Header = () => {
  return (
    <div>
  <div className='flex flex-col justify-center items-center'>
    <Image
  
  src={image}
  alt='logo'
  width={400}
  height={400}
  ></Image>
   <p>Journalism Without Fear or Favour</p>

 <p>{format(new Date(), " EEEE, MMMM dd, yyyy")}</p>
  </div>
    </div>
  );
};

export default Header;