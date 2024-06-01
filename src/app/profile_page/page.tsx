"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import NavbarHome from "../(component)/navbarhome";
import Link from "next/link";

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

interface Booking {
  trainername: string;
  programname: string;
  booked_at: string;
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const router = useRouter();

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getorders");
      const data = response.data;

      if (Array.isArray(data.data)) {
        setBookings(data.data);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    router.push("/login");
  };

  return (
    <main className="justify-between">
      <NavbarHome />
      <div className="min-h-screen bg-customGray3 text-white flex items-center justify-center">
        <div className="container mx-auto p-6">
          <div className="flex justify-between">
            <div className="w-1/3 bg-customGray p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <img src="pp.png" className="rounded-full w-32 h-32" />
                <p className="mt-4 text-2xl font-bold">{userData?.username}</p>
                <div className="flex flex-col items-center mt-4">
                  <div className="flex items-center">
                    <span className="text-xl">📏</span>
                    <span className="ml-2 text-lg">{userData?.height} cm</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-xl">⚖️</span>
                    <span className="ml-2 text-lg">{userData?.weight} kg</span>
                  </div>
                  <div className="mt-4 text-center">
                    <p>{userData?.email}</p>
                    <p>{userData?.phone}</p>
                  </div>
                  <button
                    className="mt-6 px-4 py-2 bg-red-600 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="w-2/3 bg-customGray p-6 rounded-lg ml-6">
              <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
              <div className="space-y-4">
                {bookings.map((booking, index) => (
                  <Link href='/meeting'>
                    <div
                      key={index}
                      className="flex bg-customGray2 rounded-lg p-4 items-center"
                    >
                      <img
                        src="/gananwo.png"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="text-lg font-semibold">
                          {booking.trainername}
                        </p>
                        <p className="text-sm">
                          {new Date(booking.booked_at).toLocaleDateString()}
                        </p>
                        <p className="text-sm">
                          {new Date(booking.booked_at).toLocaleTimeString()}
                        </p>
                      </div>
                      <div className="relative max-w-xl ml-auto mt-auto">
                        <img className="object-cover rounded-md" src="p1.png" />
                        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h2 className="text-white text-xl font-bold">
                            {booking.programname}
                            <h5 className="text-xs text-center font-normal">Click to join meeting</h5>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
