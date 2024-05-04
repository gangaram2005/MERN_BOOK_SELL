import React from "react";
import AdmSidebar from "../Sidebar/AdmSidebar";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <div className="sidebar">
        <AdmSidebar />
      </div>

      <div className="content-part">
        <div className="heading">Dashboard</div>
      </div>
    </div>
  );
}
