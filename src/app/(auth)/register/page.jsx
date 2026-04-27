'use client'

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const registerPage = () => {
  const { register,handleSubmit,formState: { errors }} = useForm()
  const handelerFunction =(data)=>{
   console.log(data)
  }
  return (
   <div className=' bg-slate-100 mt-5 '>
     <div className='flex justify-center items-center max-w-7xl mx-auto  rounded-xl min-h-screen'>
    <div className='bg-white p-4 rounded-xl py-20 px-7'> 
      <h2 className='text-3xl font-bold mb-4'>Login your account</h2>

      <form className='space-y-4' onSubmit={handleSubmit(handelerFunction)}>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" {...register("email" , { required: 'email filed is required' })} 
  className="input" placeholder="input your email" />
    {errors.email && <p className='text-red-500'>{errors.email.message}</p> }
</fieldset>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" {...register("password", { required: 'password filed is required' })}  className="input w-full" placeholder="input your Password" />
    {errors.password && <p className='text-red-500'>{errors.password.message}</p> }
</fieldset>
<button className="btn btn-neutral w-full">Login</button>
      </form>
     <p className='mt-4'>Dont have an account <Link href='/register' className='text-red-500'>register</Link></p>
    </div>
    </div>
   </div>
  );
};

export default registerPage;