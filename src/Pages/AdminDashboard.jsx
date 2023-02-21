import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import DashboardMain from "../Components/DashboardMain";
function AdminDashboard() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <DashboardMain />
    </div>
  );
}

export default AdminDashboard;
