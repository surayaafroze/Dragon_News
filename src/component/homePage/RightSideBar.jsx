import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-3'>Login With</h1>
      <div className='flex flex-col gap-2 w-full'>
        <button className='btn border-blue-500 text-blue-500'> <FaGoogle></FaGoogle> Login with Google</button>
        <button className='btn'><FaGithub></FaGithub> Login with Github</button>
      </div>
    </div>
  );
};

export default RightSideBar;