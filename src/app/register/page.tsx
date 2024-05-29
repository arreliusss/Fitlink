"use client";
import Image from "next/image";
import { Button, buttonVariants } from "../../components/ui/button";
import Navbar2 from "../(component)/navbar2";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    weight: "",
    height: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "weight" || name === "height") {
      updatedValue = parseInt(value, 10) || 0;
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.length < 8) {
      newErrors.username = "Username must be at least 8 characters long.";
    }

    const phonePattern = /^\+\d{8,13}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must start with + and followed by 8-13 digits.";
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      newErrors.password = "Password must contain at least one capital letter, one number, and one symbol.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      console.log("Submitting form data:", formData); // Debugging
      const response = await axios.post(
        "http://localhost:5000/createaccount",
        formData
      );
      console.log("Response data:", response.data); // Debugging
    } catch (error) {
      console.error(
        "Error occurred:",
        error.response ? error.response.data : error.message
      ); // Debugging
    }
  };

  return (
    <main className="flex h-screen font-sans">
      <div className="w-1/2 flex flex-col justify-center p-24">
        <h1 className="text-3xl mb-6 font-bold">Create New Account</h1>
        <div className="flex font-normal -mt-4">
          <h2>Already a member?</h2>
          <Link href='/login'>
            <h2 className="text-customMaroon ml-2">Login</h2>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex mt-5">
            <input
              type="text"
              name="username"
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            ></input>
          </div>
          {errors.username && <p className="text-red-500">{errors.username}</p>}
          <div className="flex mt-7">
            <input
              type="text"
              name="weight"
              className="h-10 w-64 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Weight                                     kg"
              value={formData.weight}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="height"
              className="h-10 w-64 rounded-xl ml-4 text-white bg-customGray3 pl-3"
              placeholder="Height                                     cm"
              value={formData.height}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex mt-7">
            <input
              type="email"
              name="email"
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex mt-7">
            <input
              type="text"
              name="phone"
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            ></input>
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          <div className="flex mt-7">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            ></input>
            <input
              type="checkbox"
              onClick={togglePasswordVisibility}
              className="-ml-5 opacity-0 cursor-pointer"
            />
            <img
              src="eye_pw2.png"
              className="w-5 h-5 -ml-6 mt-2.5 text-white"
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <div className="flex mt-4">
            <Button
              type="submit"
              className={buttonVariants({
                size: "reg2",
                variant: "reg_button",
              })}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
      <Navbar2 />
    </main>
  );
}
