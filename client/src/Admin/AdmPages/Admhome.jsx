import React from "react";
import AdmSidebar from "../Sidebar/AdmSidebar";

function Admhome() {
  return (
    <div className="flex">
      <div className="sidebar-page">
        <AdmSidebar />
      </div>

      <div className="content-page sm:mt-7 sm:ml-0 xm:mt-7 xm:ml-0">
        <div className="heading-page md:ml-5">
          <h1>admin home page</h1>
        </div>
      </div>
    </div>
  );
}

export default Admhome;
