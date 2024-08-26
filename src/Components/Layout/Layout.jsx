import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
function Layout() {
  return (
    <div className="container min-h-screen mx-auto">
      <Header />

      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
