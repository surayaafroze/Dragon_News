import React from 'react';
import { RingLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <RingLoader />
    </div>
  );
};

export default loading;