import { Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import demobook from "../img/demobkimg.jpg";
import Cart from "../img/cart.svg";
import MobileSidebar from "./MobileSidebar";
export default function Header() {
  const path = useLocation().pathname;
  return (
    <>
      <div className="top-part bg-[#131921] xm:hidden sm:hidden md:visible">
        <div className="flex justify-between pb-2 pt-2">
          <div className="right-part">
            <p className="mb-0 text-white pl-10">
              Free Shipping Over Rs500 & Free Returns
            </p>
          </div>
          <div className="left-part text-end">
            <p className="text-end text-white pr-10">
              <a href="tel">+977 9804503265</a>
            </p>
          </div>
        </div>
      </div>
      <Navbar className="border-b-2 bg-[#131921] mt-1 text-white ">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white sm:ml-0 xm:ml-0"
        >
          <img src={demobook} alt="" className="rounded w-12 h-12" />
        </Link>
        <div className="xm:hidden sm:hidden md:inline">
          <p className="text-2xl font-bold">Kamal Pd Sharma</p>
        </div>
        <form action="">
          <TextInput
            type="text"
            placeholder="Search"
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden xm:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          {/* <Link to="/sign-up">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign Up
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link> */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="text-white text-2xl font-bold">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about" className="text-white text-2xl font-bold">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/shop" className="text-white text-2xl font-bold">
              Shop
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/video"} as={"div"}>
            <Link to="/video" className="text-white text-2xl font-bold">
              Sell Your Book
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/video"} as={"div"}>
            <div>
              <Link to="/cart" className="flex items-center gap-0 text-bold">
                <img src={Cart} alt="Cart" />
                <div className="flex flex-col gap-0 ml-2">
                  <span className="bg-white text-dark">0</span>
                  <p className="mb-0 text-white">$500</p>
                </div>
              </Link>
            </div>
          </Navbar.Link>

          <Navbar.Link active={path === "/video"} as={"div"}>
            <Link to="/sign-up">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign Up
              </Button>
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/video"} as={"div"}>
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="mobile-sidebar md:hidden xm:visible py-0 mt-0 mb-0 pb-0">
        <MobileSidebar />
      </div>
    </>
  );
}
