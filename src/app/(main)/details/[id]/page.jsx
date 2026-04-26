import { NewsDetailsFetchData } from '@/lib/FetchData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FcRating } from 'react-icons/fc';
import { IoMdEye } from 'react-icons/io';

const DetailsPage =async ({params}) => {
  const {id} = await params;
  const n= await NewsDetailsFetchData (id)
  return (
      <div className='max-w-4xl mx-auto mt-10 mb-10'>
          <div className='bg-base-200 px-4 rounded-2xl'>
             <div className='flex justify-between items-center gap-3'>
              <div className='flex justify-center items-center gap-3'>
                <Image
                className='rounded-full p-2'
              src={n.author.img}
              alt={n.author.name}
              width={60}
              height={60}
              ></Image>
              <div>
                <h2 className='text-[15px] font-bold'>{n.author.name}</h2>
                <p className='text-[13px]'>{n.author.published_date}</p>
              </div>
              </div>
              <div className='flex justify-center items-center gap-3'>
                <CiBookmark></CiBookmark>
                < CiShare2></CiShare2>
              </div>
             </div>
          </div>
     <p className='font-bold mt-4 space-y-3 text-[17px]'>{n.title}</p>
    
    <Image
    className='p-4 rounded-xl mt-4 w-full'
    src={n.image_url}
    alt={n.author.name}
    width={400}
    height={200}
    >
    
    </Image>
     
     <p className='p-4 text-[#706F6F] text-[16px] '>{n.details}</p>
     
    <div className='flex justify-between items-center p-3'>
      <div className='flex justify-center items-center gap-2'>
      <h2 className='bg-base-200 p-2 rounded flex justify-center items-center gap-2'>
        <FcRating></FcRating>
        {n.rating.number}</h2>
    
    </div>
     <p className='flex justify-center items-center gap-3 bg-base-200 p-2 rounded'><IoMdEye></IoMdEye> {n.total_view}</p>
    </div>
    <div className='mt-6'><Link href={`/category/${n.category_id}`}><button className='btn bg-pink-500'><FaArrowLeftLong></FaArrowLeftLong> All news in this category</button></Link></div>
        </div>
  );
};

export default DetailsPage;