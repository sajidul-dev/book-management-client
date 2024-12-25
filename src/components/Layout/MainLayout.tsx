import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TopNavbar from "../shared/Navbar/TopNavbar";
import { SideNavbar } from "../shared/Navbar/SideNavbar";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/books");
    }
  }, [location.pathname]);
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2 ">
        <SideNavbar />
      </div>
      <div className="w-full mx-auto col-span-10 flex-grow pr-6 max-h-screen">
        <div className="">
          <TopNavbar />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
