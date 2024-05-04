import React from "react";
import "./sidebar.css";
import { Sidebar } from "flowbite-react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import AdmForm from "../AdmPages/AdmForm";

export default function AdmSidebar() {
  const ShowIcon = () => {
    console.log("onclick clicked");
    document.getElementById("sidebar");
  };
  return (
    <div className="flex wrapper">
      <div
        className="xm:[display:none]  sm:[display:none] md:[display:flex]"
        id="sidebar"
      >
        <Sidebar aria-label="Sidebar with multi-level dropdown example bg-black text-white">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {/* <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Sidebar.Item href="#">Products</Sidebar.Item>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                <Sidebar.Item href="#">Shipping</Sidebar.Item>
              </Sidebar.Collapse> */}
              <Link to="/admin/dashboard">
                <Sidebar.Item Link to="/admin/form" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
              </Link>
              <Link to="/admin/upload/book">
                <Sidebar.Item icon={HiInbox}>Upload Book</Sidebar.Item>
              </Link>
              <Link to="/admin/bkcategory">
                <Sidebar.Item icon={HiInbox}>Book Category</Sidebar.Item>
              </Link>

              <Link to="/admin/manage-books">
                <Sidebar.Item href="#" icon={HiUser}>
                  Manage Books
                </Sidebar.Item>
              </Link>
              <Link to="/admin/user-details">
                <Sidebar.Item href="#" icon={HiUser}>
                  Users
                </Sidebar.Item>
              </Link>

              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <div className="left-part">
        <AdmForm />
      </div>
    </div>
  );
}
