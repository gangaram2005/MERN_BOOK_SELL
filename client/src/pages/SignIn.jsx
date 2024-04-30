import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./Signup.css";
export default function SignIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(e.target);
    console.log(formData);

    // Extract values from FormData
    const email = formData.get("username");
    const password = formData.get("password");

    try {
      // Make the API call to submit the login data
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        body: formData, // send the form data directly
      });
      console.log(response);

      if (response.ok) {
        // Handle successful login
        console.log("Login successful");
        // Redirect or show success message
      } else {
        // Handle error cases
        const errorData = await response.json();
        console.error("Login failed", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Username:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
