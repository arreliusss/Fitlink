"use client";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footers from "../(component)/footer";
import NavbarHome from "../(component)/navbarhome";
import { Button, buttonVariants } from "@/components/ui/button";
import RegisterPage from "../register/page";
import AgoraRTC from 'agora-rtc-react';
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main className="flex flex-col items-center justify-between p-24 font-sans">
        <p>ppk</p>
      </main>
    </div>
  );
}
