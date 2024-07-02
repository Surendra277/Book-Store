
import React from 'react'


const Dashboard = () => {
    return (
        <div className='flex min-h-screen bg-white text-blue-700'>
          
            <div className="flex-1 flex-col ">
                <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
                    <h1 className="text-xl font-bold">Admin Dashboard</h1>
                    {/* Add any header elements here */}
                </div>

                <div className="p-4 flex-1">
                    {/* Your main content goes here */}
                    <p>Main content area...</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard