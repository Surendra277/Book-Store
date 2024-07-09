import { Button } from 'flowbite-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate =useNavigate();  

  const handleLogout = () => {
    // Clear authentication tokens or user data
    localStorage.removeItem('token');
    navigate('/signin')
    
  }
  
  return (
    <Button onClick={handleLogout}>LogOut</Button>
  )
}

export default LogOut