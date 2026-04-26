import NewsTitle from '@/component/homePage/NewsTitle';
import RightSideBar from '@/component/homePage/RightSideBar';
import React from 'react';

const fetchData = async()=>{
  const res =await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data =await res.json()
 return data.data.news_category;
 
}
const middleNewsFetchData = async(category_id)=>{
  const res =await fetch (`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data =await res.json()
 return data.data;
}



  

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
      <NewsTitle data={data} activeId={null}></NewsTitle>
    </div>




{/* 2nd div */}
    <div className="bg-yellow-100 col-span-6 font-bold text-xl min-h-full">
      <h2>Dragon News Home</h2>
    <div className="space-y-4">
      {news.map (n=> <div key={n._id} className="p-4 rounded-2xl border">
        <p>{n.title}</p>
      </div>)}
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