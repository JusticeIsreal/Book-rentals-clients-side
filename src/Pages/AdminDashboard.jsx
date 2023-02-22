import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import DashboardMain from "../Components/DashboardMain";
function AdminDashboard({ products }) {
  return (
    <div>
      {/* <Sidebar /> */}
      {/* <Topbar /> */}
      <DashboardMain products={products} />
    </div>
  );
}

export default AdminDashboard;
