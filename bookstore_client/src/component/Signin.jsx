// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Signin = () => { 
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("User logged in successfully", data);
//         // Store token in localStorage or context for future requests
       
//         localStorage.setItem('token', data.token);
//         if (data.role === 'admin') {
//           localStorage.setItem("role","admin")
//           navigate('/admin/dashboard');
//         } else {
//           navigate('/');
//         }
//       } else {
//         console.error("Error logging in:", data);
//         setError(data.error);
//       }
//     } catch (error) {
//       console.error("Network error:", error);
//       setError("Network error. Please try again later.");
//     }
//   //   const handleLogout = () => {
//   //     localStorage.removeItem('token');
//   //     navigate('/signin');
//   //   };
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-teal-100 py-6   flex flex-col  justify-center sm:py-12  ">
//         <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
           
//           <div className="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20 ">

//             <div className="max-w-md mx-auto">
//               <div>
//                 <h1 className="text-2xl flex  justify-center font-semibold ">Log In</h1>
//               </div>
//               {error && <p className="text-red-500">{error}</p>}
//               <div className="divide-y divide-gray-200">
//                 <form  onSubmit={handleSignIn} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                   <div className="relative">
//                     <input  name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
//                   </div>
//                   <div className="relative">
//                     <input  id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                   
//                   </div>
//                   <div className="relative flex  justify-center">
//                     <button className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
//                   </div>
//                   <div className="w-full flex justify-center">OR </div>

//             </form>
//               </div>
//             </div>


//             <div className="w-full flex justify-center">

//               <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
//                 <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-401.000000, -860.000000)"> <g transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
//                 <span>Continue with Google</span>
//               </button>
//             </div><br />
//             <div className="w-full flex justify-center">
//               Forgotten Your Password?
//             </div>
//             <hr className='bg-black' />
//             <hr className='bg-black' />
//             <hr className='bg-black' />
//             <div>
//               Don't have an account? 
//               <span><Link to="/signup" className='font-bold'> Sign up</Link></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Signin;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Navigate to appropriate page based on role
      const role = localStorage.getItem('role');
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User logged in successfully", data);
        
        // Store token and role in localStorage
        // localStorage.setItem('id',data._id);
        localStorage.setItem('id',data.id)
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
  
        if (data.role === 'admin') {
          navigate('/admin/dashboard');
         
        } else {
          navigate('/');
        }
      } else {
        console.error("Error logging in:", data);
        setError(data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-teal-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl flex justify-center font-semibold">Log In</h1>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="divide-y divide-gray-200">
                <form onSubmit={handleSignIn} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="relative">
                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="relative flex justify-center">
                    <button className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
                  </div>
                  <div className="w-full flex justify-center">OR </div>
                </form>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
                  <title>Google-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-401.000000, -860.000000)">
                      <g transform="translate(401.000000, 860.000000)">
                        <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                        <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                        <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path>
                        <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div><br />
            <div className="w-full flex justify-center">
              Forgotten Your Password?
            </div>
            <hr className='bg-black' />
            <hr className='bg-black' />
            <hr className='bg-black' />
            <div>
              Don't have an account?
              <span><Link to="/signup" className='font-bold'> Sign up</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin;
