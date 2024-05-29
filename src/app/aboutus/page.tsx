"use client";
import Image from "next/image";
import "../globals.css"
import { Button, buttonVariants } from "../components/ui/button";
import RegisterPage from "./register/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footers from "../(component)/footer";
import NavbarHome from "../(component)/navbarhome";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <NavbarHome />
      <main className="flex flex-col items-center justify-between p-24 font-sans">

      </main>
    </div>
  );
}
