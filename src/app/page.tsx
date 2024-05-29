"use client";
import Image from "next/image";
import "./globals.css";
import { Button, buttonVariants } from "../components/ui/button";
import RegisterPage from "./register/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./(component)/navbar";
import Footers from "./(component)/footer";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24 font-sans"> 
        <div>
          <img
            src="gym_bro.png"
            className="background-image"
            alt="Background Image"
          />
          <div className="flex flex-col h-screen items-center mt-72">
            <h1 className="text-9xl font-sans mb-5 font-bold">FITLINK</h1>
            <h2 className="text-center text-5xs mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            {/* <Link href={RegisterPage}> */}
            <Button
              className={buttonVariants({ size: "reg", variant: "reg_button" })}
              onClick={() => router.push("/register")}
            >
              Register NOW
            </Button>
            {/* </Link>  */}
          </div>
        </div>
      </main>
      <Footers />
    </div>
  );
}
