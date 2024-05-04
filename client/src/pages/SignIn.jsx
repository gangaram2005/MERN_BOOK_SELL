import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./Signup.css";
export default function SignIn() {
  const navigate = useNavigate();
  // password show or hide garaune
  const [password, setPassword] = useState(true);

  const handleClick = () => {
    setPassword(!password);
  };

  const [user, setUser] = useState({
    email: "",
    password1: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //console.log(user);   form ma haneko value clg ma print hunxa

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const res = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    if (res.status === 200) {
      console.log("Login successful");
      console.log(res.role);
    } else if (res.status === 404) {
      console.log("You are not a register user");
    } else if (res.status === 403) {
      console.log("All fields are required");
    } else {
      console.log("server error");
    }
    if (res.status === 400) {
      console.log("Username and password is not mathced");
    }
    try {
    } catch (error) {
      console.log("Can't Connect to the server", error);
    }
  };

  return (
    <div className="bg-[#070d1b;] w-[98%] ml-1">
      <div className="login-page customradious md:mx-[35%] md:w-2/3 md:items-center mb-36">
        <div className="setcolor bg-[#070d1b;] pt-10 mb-20 pb-20">
          <div className="main-one md:w-[70%] lg:w-[50%] sm:w-full sm:pr-0 items-center">
            <div className="heading">
              <h3 className="text-center">Sign In</h3>
            </div>
            <div className="form-part" id="registration-form">
              <form
                className="form-part-11 register-form"
                id="register-form"
                onSubmit={handleSubmit}
              >
                <div className="alag-part">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                </div>

                <div className="alag-part flex items-center  ml-0">
                  <input
                    type={password ? "password" : "text"}
                    name="password1"
                    id="password1"
                    value={user.password1}
                    onChange={handleChange}
                    placeholder="Your Password"
                  />
                  {password ? (
                    <FaEyeSlash
                      className="text-3xl bg-[#070d1b;] text-white cursor-pointer -ml-20 mt-2"
                      onClick={handleClick}
                    />
                  ) : (
                    <FaEye
                      className="text-3xl bg-[#070d1b;] text-white cursor-pointer -ml-20 mt-2"
                      onClick={handleClick}
                    />
                  )}
                </div>

                {/* <div className="alag-part"> */}
                <Button
                  gradientDuoTone="purpleToPink"
                  className="rounded-lg w-[90%] h-7 mt-4 ml-8"
                  type="submit"
                >
                  Login
                </Button>
                {/* </div> */}
              </form>
              <div className="another flex justify-evenly items-center mt-2">
                <h1 className="text-white text-1xl ml-5">Have Account ?</h1>
                <Link to="/sign-in">
                  <Button
                    gradientDuoTone="purpleToPink"
                    className="rounded-lg w-full h-2 button pr-4"
                    type="submit"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
            {/* {error.status ? (
              <span className="text-white">{error.msg}</span>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
