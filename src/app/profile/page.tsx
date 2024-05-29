'use client';
import Image from "next/image";
import { Button, buttonVariants } from "../../components/ui/button";
import Home from "../page";
import Navbar2 from "../(component)/navbar2";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getaccount/6654cd44e1364edada175a9f")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex">
        <Navbar2 />
        {/* <h1>adsdsaddsa</h1> */}
        <div>
          <h1>Name    : {data.username}</h1>
          <h1>Gender  : {data.gender}</h1>
          <h1>E-Mail  : {data.email}</h1>
          <h1>Age     : {data.age}</h1>
          <h1></h1>
        </div>
      </div>
    </main>
  );
}
