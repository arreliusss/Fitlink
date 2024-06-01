"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../globals.css";
import { Button, buttonVariants } from "../../components/ui/button";

export default function Navbar() {
  const router = useRouter();
  return (
    <main>
      <nav className="flex justify-between gap-y-36 font-sans items-center">
        <div className="flex ml-4 items-center text-2xl font-bold">
          <img src="fitlink_logo.png" className="mt-0.5 h-12 w-12"></img>
          FitLink
        </div>
        <div className="flex justify-between m-5 gap-x-8">
          <h1 className="mt-1">Home</h1>
          <h1 className="mt-1">About Us</h1>
          <h1 className="mt-1">Program</h1>
          <Link href='/login'>
            <Button className={buttonVariants({ variant: "reg_button" })}>
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </main>
  );
}
