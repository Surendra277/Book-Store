import { Button, Popover } from 'flowbite-react'
import { CgProfile } from "react-icons/cg";
import React from 'react'

const Profile = ({user}) => {
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
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">Full Stack Developer</p>
                <p className="mt-2 text-gray-500">
                  Passionate about building scalable web applications and working with modern web technologies.
                </p>
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