'use client'
import Link from 'next/link'; 
import { useRouter } from 'next/navigation'
import Image from "next/image";
import "../globals.css";
import { Button, buttonVariants } from "../../components/ui/button";

export default function Navbar2() {
  const router = useRouter()
  return (
    <main>
      <nav className="fixed top-3 left-3 w-full shadow-md flex font-sans items-center">
        <div className="flex ml-4 items-center text-2xl font-bold">
          <img src='fitlink_logo.png' className="mt-0.5 h-12 w-12"></img>
          FitLink
        </div>
      </nav>
    </main>
  );
}
