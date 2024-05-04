import React, { useEffect, useState } from "react";
import AdmSidebar from "../Sidebar/AdmSidebar";
import { Table } from "flowbite-react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
function UserDetail() {
  const [records, setRecords] = useState([]);

  // useEffect(() => {
  //   const newdata = fetch("http://localhost:5000/api/user/getalluser")
  //     .then((response) => response.json())
  //     .then((data) => setRecords(data))
  //     .catch((err) => console.log(err));
  //   console.log(newdata);
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "http://localhost:5000/api/user/getalluser"
    ).then((response) => response.json());
    setRecords(response);
  };
  //console.log(records.users);

  const mu = records.users;
  console.log(mu);

  return (
    <div>
      <div className="md:flex">
        <div className="sidebar-part">
          <AdmSidebar />
        </div>

        <div className="content-part">
          <div className="user-detail text-center font-bold">
            <h1 className="text-center">User Details</h1>
          </div>
          <div className="overflow-x-auto">
            <table
              className="lg:w-[1100px] border-collapse border border-slate-400"
              border="1"
            >
              <thead>
                <tr border="1">
                  <th className="border-collapse border border-slate-400 text-center">
                    Name
                  </th>
                  <th className="border-collapse border border-slate-400">
                    Email
                  </th>
                  <th className="border-collapse border border-slate-400">
                    Password
                  </th>
                  <th className="border-collapse border border-slate-400">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {mu &&
                  mu.map((item, index) => (
                    <tr className="border-collapse border border-slate-400">
                      <td border="1" key={index}>
                        {item.name}
                      </td>
                      <td
                        className="border-collapse border border-slate-400"
                        key={index}
                      >
                        {item.email}
                      </td>
                      <td
                        className="border-collapse border border-slate-400"
                        key={index}
                      >
                        {item.password}
                      </td>
                      <td
                        className="border-collapse border border-slate-400"
                        key={index}
                      >
                        {item.role}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
