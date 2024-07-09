import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SiderBar from "./SiderBar";

const Layout = () => {
  useEffect(() => {
    
  }, [])
  return (
    <>
      {" "}
      <div className="flex">
        <SiderBar />
        <div className="flex w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
