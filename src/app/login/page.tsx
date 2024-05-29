"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar2 from "../(component)/navbar2";
import { Button, buttonVariants } from "../../components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/getaccounts", {
        email,
        password,
      });

      console.log(JSON.stringify(response.data));

      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        localStorage.setItem("email", email); // Store email in local storage
        router.push("/profile"); // Redirect to homepage
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="flex h-screen font-sans">
      <Navbar2 />
      <div className="w-1/2 flex flex-col justify-center p-24">
        <h1 className="text-3xl mb-6 font-bold">Welcome Back!</h1>
        <div className="flex font-normal -mt-4">
          <h2>New here?</h2>
          <Link href="/register">
            <h2 className="text-customMaroon ml-2">Register</h2>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col mt-7">
          <div className="flex mt-7">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex mt-7">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Password"
              required
            />
            <input
              type="checkbox"
              onClick={togglePasswordVisibility}
              className="-ml-5 opacity-0 cursor-pointer"
            />
            <img src="eye_pw2.png" className="w-5 h-5 -ml-6 mt-2.5 text-white" />
          </div>
          <div className="flex mt-4">
            <Button
              type="submit"
              className={buttonVariants({
                size: "reg2",
                variant: "reg_button",
              })}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <div className="bgimg-container">
        <div className="bgimg2" />
        <div className="bgimg3" />
        <div className="bgimg4" />
      </div>
    </main>
  );
}
