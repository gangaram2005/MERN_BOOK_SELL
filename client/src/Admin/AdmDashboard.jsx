import React from "react";
import AdmSidebar from "./Sidebar/AdmSidebar";

function AdmDashboard() {
  return (
    <div className="flex">
      <div className="sidebar-page">
        <AdmSidebar />
      </div>
      <div className="content-page">
        <h1> This is content side</h1>
      </div>
    </div>
  );
}

export default AdmDashboard;
