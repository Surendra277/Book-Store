import React from 'react'
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';


const Layout = () => {
  return (
    <>
        <Sidebar />
        <div>
            <Outlet />
        </div>
        
    </>
  );
};

export default Layout;