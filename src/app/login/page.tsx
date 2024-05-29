'use client'
import Image from "next/image";
import { Button, buttonVariants } from "../../components/ui/button";
import Home from "../page";
import { useState } from "react";
import Navbar2 from "../(component)/navbar2";

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex h-screen font-sans">
      <Navbar2 />
      <div className="w-1/2 flex flex-col justify-center p-24">
        <h1 className="text-3xl mb-6 font-bold">Welcome Back!</h1>
        <div className="flex font-normal -mt-4">
          <h2>New here?</h2>
          <h2 className="text-customMaroon ml-2">Register</h2>
        </div>
        <div className="flex mt-7">
            <input
              type="email"
              name="email"
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Email"
            ></input>
          </div>
          <div className="flex mt-7">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="h-10 w-11/12 rounded-xl text-white bg-customGray3 pl-3"
              placeholder="Password"
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
      </div>
    </main>
  );
}
