import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../component/About";
import Blog from "../component/Blog";
import SingleBook from "../component/SingleBook";

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
            path: '/singleBook',
            element: <SingleBook/>
        },
        {
            path: '/Shop',
            element: <Shop/>
        },
      ]
    },

  ]); 

  export default router;