import Header from "../shared/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {/* header */}
      <div>
        <Header />
      </div>
      {/* childen */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
