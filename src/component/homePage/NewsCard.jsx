import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FcRating } from 'react-icons/fc';
import { IoMdEye } from 'react-icons/io';


const NewsCard = ({n}) => {
  const {author,name,title,img,published_date,image_url,details,rating,total_view} =n
  return (
    <div>
      <div className='bg-base-200 px-4 rounded-2xl'>
         <div className='flex justify-between items-center gap-3'>
          <div className='flex justify-center items-center gap-3'>
            <Image
            className='rounded-full p-2'
          src={author.img}
          alt={author.name}
          width={60}
          height={60}
          ></Image>
          <div>
            <h2 className='text-[15px] font-bold'>{author.name}</h2>
            <p className='text-[13px]'>{author.published_date}</p>
          </div>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <CiBookmark></CiBookmark>
            < CiShare2></CiShare2>
          </div>
         </div>
      </div>
 <p className='font-bold mt-4 space-y-3 text-[17px]'>{title}</p>

<Image
className='p-4 rounded-xl mt-4 w-full'
src={image_url}
alt={author.name}
width={400}
height={200}
>

</Image>
 
 <p className='p-4 text-[#706F6F] text-[16px] line-clamp-3'>{details}</p>
 <div className='mt-6'><Link href="/details"><button className='btn '>See 
  details</button></Link></div>

<div className='flex justify-between items-center p-3'>
  <div className='flex justify-center items-center gap-2'>
  <h2 className='bg-base-200 p-2 rounded flex justify-center items-center gap-2'>
    <FcRating></FcRating>
    {rating.number}</h2>

</div>
 <p className='flex justify-center items-center gap-3 bg-base-200 p-2 rounded'><IoMdEye></IoMdEye> {total_view}</p>
</div>

    </div>
  );
};

export default NewsCard;