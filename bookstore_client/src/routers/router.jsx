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
import Dashboard from "../Admin/Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />, 
  },
  {
    path: "/signup",
    element: <SignUp />, 
  },
  {
    path: "/Dashboard",
    element:<Dashboard/>,
  },
]);

export default router;
