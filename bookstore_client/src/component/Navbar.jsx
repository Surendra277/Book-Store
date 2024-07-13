import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBarsStaggered, FaBookOpen, FaXmark } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import Darkmode from "./Darkmode";
import logo from "../assets/Logo.png";
import { IoIosHeartEmpty } from "react-icons/io";
import Profile from "./Profile";
import UserProfile from "./ProfilePage/UserProfile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get the current location
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(
      "http://localhost:3000/user/getUser",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
      
        setUser(data.user);
      });
  }, []);
  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    // { link: "Favourites", path: "/favourites" },
  ];

  return (
    <>
      <header className="w-full bg-transparent fixed top-0 right-0 left-0 dark:bg-black dark:text-white-700 transition-all ease-in duration-300 ">
        <nav
          className={`py lg:px-24 px-4  ${
            isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : "bg-teal-100"
          }`}
        >
          <div className="flex justify-between font-serif items-center text-base ">
            <div className=" font-extralight flex justify-between items-center text-base">
              <Link
                to="/"
                className="text-2xl font-bold text-blue-700 flex items-center gap-2"
              >
                <FaBookOpen />
                BiblioMart
              </Link>
            </div>

            {/* nav item for lg devices */}
            <ul className="md:flex space-x-12 hidden flex justify-center items-center">
              {navItems.map(({ link, path }) => {
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`block text-base text-black uppercase cursor-pointer dark:text-white dark:hover:text-yellow-500 hover:text-blue-700 ${
                      location.pathname === path ? "font-bold" : ""
                    }`}
                  >
                    {link}
                  </Link>
                );
              })}

              <Link className="flex justify-between items-center" to="./Cart">
                <BsCart4 className="dark:text-white w-14 h-5 " />
              </Link>
              {/* <Link className="flex justify-between items-center" to="./Cart">
                <IoIosHeartEmpty className="dark:text-white w-5 h-5 " />
              </Link>
             */}
              {user?.fullName ? (
                <Profile user={user} />
              ) : (
                <Link
                  to={"/signin"}
                  className={`block text-base text-black uppercase cursor-pointer dark:text-white dark:hover:text-yellow-500 hover:text-blue-700`}
                >
                  Signin
                </Link>
              )}
            </ul>

            {/* menu btn for mobile devices */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-5 w-5 text-black" />
                ) : (
                  <FaBarsStaggered />
                )}
              </button>
            </div>
          </div>

          {/* menu for mobile devices */}
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className={`block text-base text-white uppercase cursor-pointer ${
                  location.pathname === path ? "font-bold" : ""
                }`}
              >
                {link}
              </Link>
            ))}
            <Darkmode />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
