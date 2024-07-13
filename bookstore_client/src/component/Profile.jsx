import { Button, Popover } from 'flowbite-react'
import { FaHeart, FaRegCircleUser } from "react-icons/fa6";
import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FaUser, FaBoxOpen } from "react-icons/fa";
// import { IoLogOut } from "react-icons/io5";
import Darkmode from './Darkmode';



const Profile = ({ user }) => {
const navigate =useNavigate();  

  const handleLogout = () => {
    // Clear authentication tokens or user data
    localStorage.removeItem('token');
    navigate('/signin')
    
  }
  
  return (
    <div className=''>
      <Popover
        content={
          <div className="max-w-sm mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  w-80  h-96 border border-black">
            <div className="md:flex flex flex-col mt-5 px-5">
              {/* <div className="p-8"> */}
              <div className=" tracking-wide text-sm text-indigo-500 font-semibold m-auto">
                Hey! <span className="uppercase ">{user.fullName}</span>
              </div>
              <hr style={{ height: '1px', border: 'none', width: '80%', backgroundColor: '#333', margin: '5px auto' }} />
              {/* <p className="block mt-1 text-lg leading-tight font-medium text-black">{user.email}</p> */}

              <Link to="/userprofile" className="block flex py-2 mt-1 text-lg leading-tight font-medium text-black"> <FaUser className='mx-3' /> Profile</Link>
              <Link to="/order" className="block flex py-2 mt-1 text-lg leading-tight font-medium text-black"> <FaBoxOpen className='mx-3' /> Orders</Link>
              <Link to="/favorites" className="block flex py-2 mt-1 text-lg leading-tight font-medium text-black"> <FaHeart className='mx-3' /> favorites</Link>
            <p className='block flex py-2 text-lg leading-tight font-medium text-black mx-3'><Darkmode /></p>
            

              {/* <Link to="/userprofile" className="block flex  mt-1 text-lg leading-tight font-medium text-black"> <IoLogOut  className='mx-3 h-5 w-5' /> Logout</Link> */}

              <Button onClick={handleLogout} className="w-full bg-red-500 text-white relative -bottom-28">Logout</Button>
            </div>
            {/* </div> */}
          </div>


        }
      >
        <Button ><FaRegCircleUser className='w-6 h-6 text-black' /></Button>
      </Popover>
    </div>
  )
}

export default Profile
