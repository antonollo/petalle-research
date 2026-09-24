import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center text-white selection:bg-hovering/60 selection:text-white">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
