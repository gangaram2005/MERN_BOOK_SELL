import React from "react";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "flowbite-react";
import { FaMoon } from "react-icons/fa";
export default function MobileSidebar() {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="xm:px-0 xm:py-0 xm:mt-0 text-white md:hidden">
        <div className="flex gap-2 md:order-2 dark:bg-white sm:mx-0">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/admin/home" className="font-bold">
              Dashboard
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/admin/bkcategory" className="font-bold">
              Upload Book Category
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/admin/book/category" className="font-bold">
              Manage Book Category
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/video"} as={"div"}>
            <Link to="/admin/upload/book" className="font-bold">
              Upload Book
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/video"} as={"div"}>
            <Link to="/admin/manage-books" className="font-bold">
              Manage Book
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/video"} as={"div"}>
            <Link to="/admin/user-details" className="font-bold">
              Users
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/video"} as={"div"}>
            <Link to="/shop" className="font-bold">
              Logout
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
