import { Button, Popover } from 'flowbite-react'
import { CgProfile } from "react-icons/cg";
import React from 'react'
import { Navigate } from 'react-router-dom';


const Profile = ({user}) => {
  

  const handleLogout = () => {
    // Clear authentication tokens or user data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  }
  return (
    <div>
      <Popover
        content={

          <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://via.placeholder.com/150" alt="Profile" />
              </div>
              <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.fullName}</div>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">{user.email}</p>
                <div className="mt-4">
                  <Button onClick={() => history.push('/cart')} className="mb-2 w-full bg-blue-500 text-white">Cart</Button>
                  <Button onClick={() => history.push('/orders')} className="mb-2 w-full bg-green-500 text-white">Orders</Button>
                  <Button onClick={() => history.push('/wishlist')} className="mb-2 w-full bg-purple-500 text-white">Wishlist</Button>
                  <Button onClick={handleLogout} className="w-full bg-red-500 text-white">Logout</Button>
                </div>
              </div>
            </div>
          </div>

        }
      >
        <Button ><CgProfile className='w-6 h-6 text-black' /></Button>
      </Popover>
    </div>
  )
}

export default Profile