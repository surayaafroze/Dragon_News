'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
  const pathName =usePathname()
  const isActive =pathName===href
  return <Link href={href} className={`${isActive?'bg-[#403F3F] text-white p-1':''}`}>{children}</Link>
};

export default NavLink;