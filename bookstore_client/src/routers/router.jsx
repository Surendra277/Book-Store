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
import Favourites from "../component/Favourites";
import Signin from "../component/Signin";
import Cart from "../component/Cart";
import SignUp from "../component/SignUp";
import Dashboard from "../Admin/Pages/Dashboard";
import AddBook from "../Admin/Pages/AddBook";
import AllOrders from "../Admin/Pages/AllOrders";
import Layout from "../Admin/Layout/Layout";
import Licensing from "../component/FooterPages/Licensing";
import PrivacyPolicy from "../component/FooterPages/PrivacyPolicy";
import Terms from "../component/FooterPages/Terms";

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
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
      {
        path: "/licensing",
        element: <Licensing />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <Terms/>,
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
    element: <Layout />,
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
    ],
  },
]);

export default router;
