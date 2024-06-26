import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import About from "../component/About";
import Shop from "../Shop/Shop";
import SingleBook from "../Shop/SingleBook";
import Blog from "../component/Blog";
import Signin from "../component/Signin";
import Cart from "../component/Cart";
import SignUp from "../component/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/Shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
    
        {
            path: '/Shop',
            element: <Shop/>
        },
        {
            path: '/Signin',
            element: <Signin/>
        },
        {
            path: 'Signup',
            element: <SignUp/>
        },
        {
            path: '/Cart',
            element: <Cart/>
        },
        {
            path: '/book/ :id',
            element: <SingleBook/>
        },
      ]
    },

  ]); 

  export default router;