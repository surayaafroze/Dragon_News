import React from 'react';

const NewsTitle = ({data,activeId}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold ">All categories</h2>
      <div className="flex flex-col gap-3 mt-4">
        {data.map(categorie=> 
         <ul key={categorie.category_id}>
           <li  className={`
            ${activeId===categorie.category_id && 'bg-slate-200'  }
            p-2 rounded-xl font-bold text-center text-md`}> {categorie.category_name}</li>
         </ul>
      )}
      </div>
    </div>
  );
};

export default NewsTitle;