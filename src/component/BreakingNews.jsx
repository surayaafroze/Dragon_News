import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    id: 1,
    title: "Government announces new education policy"
  },
  {
    id: 2,
    title: "Heavy rainfall causes flooding in coastal areas"
  },
  {
    id: 3,
    title: "Tech companies introduce new AI tools"
  },
  {
    id: 4,
    title: "Local market prices increase due to inflation"
  },
  {
    id: 5,
    title: "University students organize cultural festival"
  }
];




const BreakingNews = () => {
  return (
    <div>
      <div className='flex justify-between items-center py-4 bg-gray-200 max-w-7xl px-2 mx-auto 
      
      mt-5'>
      <button className='btn bg-red-600 text-white mr-2'>Lates Now</button>
      <Marquee pauseOnHover={true}>
  
        {news.map(n=> 
        <span key={n.id} className="mx-6 ">{n.title}</span>)}

      </Marquee>
    </div>
    </div>
  );
};

export default BreakingNews;