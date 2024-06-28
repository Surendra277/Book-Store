import React from 'react'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const SiderBar = () => {

  const navItems = [
    { link:"Dashboard", path:"/Dashboard" }
  ]

  return (
    <>
      <div className='  w-1/6 '>
        {/* Logo */}
        <div className='text-2xl font-bold text-blue-700  h-28  flex justify-between bg-gray-400'>
          <div className=' m-6 flex justify-between gap-2'>
            <img src={logo} alt="" className='flex w-10 h-10  ' />
            BiblioMart
          </div>       
        </div>

        {/* navitem */}
        <ul className='md:flex space-x-12 hidden'>
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block text-base text-black uppercase cursor-pointer dark:text-white dark:hover:text-yellow-500 hover:text-blue-700 ${location.pathname === path ? 'font-bold' : ''}`}
                >
                  {Link}
                </Link>
              ))}
              
            </ul>
      </div>
    </>
  )
}

export default SiderBar