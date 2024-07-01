import React from 'react'
import { Outlet } from 'react-router-dom';
import SiderBar from './SiderBar';



const Layout = () => {
  return (
    <>  <div className='flex'>
        <SiderBar />
        <div className='flex'>
            <Outlet />
        </div>
        </div>
        
    </>
  );
};

export default Layout;