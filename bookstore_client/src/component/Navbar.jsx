import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBookOpen, FaXmark } from "react-icons/fa6";
import Darkmode from './Darkmode';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //toggleMenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    }

  }, [])

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
    
  ]
  return (
    <>
      <header className='w-full bg-transparent fixed top-0 right-0 left-0 dark:bg-black dark:text-white-700   transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky?"sticky top-0 left-0 right-0 bg-blue-300":""}`}>

          <div className='flex justify-between items-center text-base '>
            <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBookOpen />BiblioMart</Link>

            {/* nav item for lg devices */}
            <ul className='md:flex space-x-12 hidden'>
              {
                navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer dark:text-white dark:hover:text-yellow-500 hover:text-blue-700'>{link}</Link>)
              }
             <Darkmode/>
            </ul>
            

            {/* menu btn for mobile devices */}

            <div className='md:hidden'>

              <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {
                  isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered />
                }
              </button>
            </div>
          </div>

          {/* menu btn for mobile devices */}

          <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${ isMenuOpen?"block fixed top-0 right-0 left-0":"hidden" }`}>
            {
              navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer '>{link}</Link>)
            }
            <Darkmode/>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar