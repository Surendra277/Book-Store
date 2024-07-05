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
import AddBook from "../Admin/Pages/AddBook";
import AllOrders from "../Admin/Pages/AllOrders";
import Layout from "../Admin/Layout/Layout";
import ManageBook from "../Admin/Pages/ManageBook";

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
    path: "/admin",
    element: <Layout/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "addBook",
        element: <AddBook />,
      },
      {
        path: "allOrders",
        element: <AllOrders />,
      },
      {
        path: "managebook",
        element: <ManageBook />,
      },
    ],
  },
]);

export default router;
