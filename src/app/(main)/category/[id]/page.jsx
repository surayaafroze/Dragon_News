import NewsCard from '@/component/homePage/NewsCard';
import NewsTitle from '@/component/homePage/NewsTitle';
import RightSideBar from '@/component/homePage/RightSideBar';
import { fetchData, middleNewsFetchData } from '@/lib/FetchData';
import React from 'react';




  

const NewsDetailsByCategorie =async ({params}) => {
 const {id}=await params
const data = await fetchData()
  const news = await middleNewsFetchData(id)
  console.log(news,'news')


  return (
    <div>
     <div className="grid grid-cols-12 justify-center items-center max-w-7xl mx-auto my-15 gap-4 ">
    {/* 1st div */}
    <div className=" col-span-3 min-h-full">
      <NewsTitle data={data} activeId={id}></NewsTitle>
    </div>




{/* 2nd div */}
    <div className="col-span-6  min-h-full">
      <h2 className='font-bold text-xl mb-4'>Dragon News Home</h2>
    <div className="space-y-15">
      {news.map (n=> <NewsCard key={n._id} 
      n={n}
      className="p-4 rounded-xl ">
      
      </NewsCard>)}
    </div>
    </div>

{/* 3rd div */}
    <div className="col-span-3 px-3  min-h-full">
   <RightSideBar></RightSideBar>
    </div>
   </div>
    </div>
  );
};

export default NewsDetailsByCategorie;