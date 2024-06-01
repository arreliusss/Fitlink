"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../globals.css";
import { Button, buttonVariants } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavbarHome() {
  const router = useRouter();
  return (
    <main>
      <nav className="flex justify-between gap-y-36 font-sans items-center">
        <div className="flex ml-4 items-center text-2xl font-bold">
          <Link href="/homepage" className="flex">
            <img src="fitlink_logo.png" className="mt-0.5 h-12 w-12"></img>
            <h1 className="mt-2.5">FitLink</h1>
          </Link>
        </div>
        <div className="flex justify-between m-5 gap-x-8">
          <Link href="">
            <h1 className="mt-1">Home</h1>
          </Link>
          <Link href="/aboutus">
            <h1 className="mt-1">About Us</h1>
          </Link>
          <Link href="/homepage">
            <h1 className="mt-1">Program</h1>
          </Link>
          <Avatar>
            <Link href="./profile_page">
              <AvatarImage src="avatar.png" />
            </Link>
          </Avatar>
        </div>
      </nav>
    </main>
  );
}
