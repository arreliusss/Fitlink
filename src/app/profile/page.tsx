"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavbarHome from "../(component)/navbarhome";

interface UserData {
  ID: string;
  username: string;
  password: string;
  phone: string;
  email: string;
  weight: number;
  height: number;
  created_at: string;
}

interface ResponseData {
  data: UserData;
  message: string;
}

export default function ProfilePage() {
  const [data, setData] = useState<ResponseData | null>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  useEffect(() => {
    console.log(data);
    const jsonString = data;
  }, [data]);

  return (
    <main className="flex flex-col">
      <NavbarHome />
      <div className="flex">
        <div className="flex">
          <div>
            <h1 className="justify-start ml-28 mt-10 font-bold text-3xl w-screen">
              My Profile
            </h1>
            <div className="flex">
              <div className="ml-32 mt-10">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="ml-32 mt-4">
              <p>Email: {email}</p>
              {/* <p>User: {data.data.username || "Username not available"}</p>               */}
              {/* <p>Msg: {data.message}</p>               */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
