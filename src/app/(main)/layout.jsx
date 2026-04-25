import BreakingNews from '@/component/BreakingNews';
import Header from '@/component/Header';
import Navbar from '@/component/Navbar';
import React from 'react';

const layout = ({children}) => {
  return (
    <div>
      <Header></Header>
      
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;