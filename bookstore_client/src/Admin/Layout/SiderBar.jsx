import React from 'react';
import logo from '../../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";

const SiderBar = () => {
  const location = useLocation();

  const navItems = [
    { link: "Dashboard", path: "/admin/dashboard", icon: AiFillHome },
    { link: "Add Book", path: "/admin/addBook", icon: GiWhiteBook },
    { link: "All Orders", path: "/admin/allOrders", icon: FaBoxOpen },
    { link: "LogOut", path: "/logout", icon: RiLogoutBoxRFill },
  ];

  return (
    <div className='w-1/6 bg-slate-500 flex flex-col items-center '>
      {/* Logo */}
      <div className='text-3xl font-bold text-blue-700 h-28 flex justify-center items-center bg-gray-400 w-full'>
        <div className='flex justify-between items-center gap-2'>
          <img src={logo} alt="Logo" className='w-10 h-10' />
          BiblioMart
        </div>
      </div>

      {/* navitem */}
      <ul className='flex flex-col items-center mt-10 gap-8 w-full'>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center text-base text-yellow uppercase cursor-pointer text-lg dark:text-white dark:hover:text-yellow-500 hover:text-blue-700 ${location.pathname === item.path ? 'font-bold' : ''}`}
          >
            <item.icon className='w-6 h-6 mr-2' />
            {item.link}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SiderBar;
