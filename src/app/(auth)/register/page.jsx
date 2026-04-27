'use client'

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
      <h2 className='text-3xl font-bold mb-4'>Register your account</h2>

      <form className='space-y-4' onSubmit={handleSubmit(handelerFunction)}>
        <fieldset className="fieldset">
  <legend className="fieldset-legend"> Your name</legend>
  <input type="text" {...register("name" , { required: 'name filed is required' })} 
  className="input" placeholder="input your name" />
    {errors.name && <p className='text-red-500'>{errors.name.message}</p> }
</fieldset>
        <fieldset className="fieldset">
  <legend className="fieldset-legend"> Photo URL</legend>
  <input type="text" {...register("photo" , { required: 'photo url filed is required' })} 
  className="input" placeholder="input your photo url" />
    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p> }
</fieldset>
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
<button className="btn btn-neutral w-full">Register</button>
      </form>
    
    </div>
    </div>
   </div>
  );
};

export default registerPage;