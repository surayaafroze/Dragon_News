import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      <h2 className='text-3xl font-bold text-purple-500'>Not Found Page</h2>
      <Link href='/'>
      <button className='btn bg-purple-500 text-white'>Back</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;