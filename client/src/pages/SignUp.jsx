import React, { useState } from "react";
import { Button } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function SignUp() {
  const navigate = useNavigate();
  // password show or hide garaune
  const [password, setPassword] = useState(true);

  const handleClick = () => {
    setPassword(!password);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    cpassword1: "",
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new FormData object and append form values
      const form = new FormData(e.currentTarget);
      const name = form.append("name", formData.name);
      const email = form.append("email", formData.email);
      const password1 = form.append("password", formData.password1);
      const cpassword1 = form.append("cpassword1", formData.cpassword1);
      console.log(typeof form);

      if (name && email && password1 && cpassword1) {
        if (password === cpassword1) {
          console.log("Password and confirm password is  matched");
        } else {
          console.log("Password and confirm password is not matched");
          document.getElementById("register-form").reset();
        }
      } else {
        console.log("All fields are required");
      }

      // console.log(formData.name);
      // console.log(formData.email);
      // console.log(formData.password1);
      // console.log(formData.cpassword1);
      console.log(form);

      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        // Handle non-200 status codes
        const errorData = await response.json();
        setError(errorData.message);
        console.log(errorData);
        console.log("Can not connect to the server");
        return;
      }

      // Handle successful response
      console.log("Registration successful");
      // document.getElementById("register-form").reset();
      // Optionally clear form or redirect user
    } catch (err) {
      setError("An error occurred during submission.");
    }
  };

  return (
    <div className="bg-[#070d1b;]">
      <div className="login-page customradious md:mx-[35%] md:w-2/3 md:items-center mb-36">
        <div className="setcolor bg-[#070d1b;] pt-10 mb-20 pb-20">
          <div className="main-one md:w-[70%] lg:w-[50%] sm:w-full sm:pr-0 items-center">
            <div className="heading">
              <h3 className="text-center">Sign Up</h3>
            </div>
            <div className="form-part" id="registration-form">
              <form
                className="form-part-11 register-form"
                id="register-form"
                onSubmit={handleSubmit}
              >
                <div className="alag-part">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                </div>
                <div className="alag-part">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                </div>

                <div className="alag-part flex items-center  ml-0">
                  <input
                    type={password ? "password" : "text"}
                    name="password1"
                    id="password1"
                    value={formData.password}
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

                <div className="alag-part flex items-center  ml-0">
                  <input
                    type={password ? "password" : "text"}
                    name="cpassword1"
                    id="cpassword1"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Your Confirm Password"
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
                  Register
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
