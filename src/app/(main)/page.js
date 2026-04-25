import NewsTitle from "@/component/homePage/NewsTitle";
import RightSideBar from "@/component/homePage/RightSideBar";
import Image from "next/image";


const fetchData = async()=>{
  const res =await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data =await res.json()
 return data.data.news_category;
 
}
const middleNewsFetchData = async()=>{
  const res =await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data =await res.json()
 return data.data.news_category;
 
}


export default async function Home() {
  const data = await fetchData()

  return (
   <div className="grid grid-cols-12 justify-center items-center max-w-7xl mx-auto my-[60px] gap-4 ">
    {/* 1st div */}
    <div className=" col-span-3">
      <NewsTitle data={data} activeId={null}></NewsTitle>
    </div>




{/* 2nd div */}
    <div className="bg-yellow-100 col-span-6 font-bold text-3xl min-h-full">
2nd
    </div>

{/* 3rd div */}
    <div className="col-span-3 px-3  min-h-full">
   <RightSideBar></RightSideBar>
    </div>
   </div>
  );
}
