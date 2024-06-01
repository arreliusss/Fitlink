import BookAppointment from "@/components/ui/BookAppointment";
import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import axios from "axios";
import Navbarhome from "../(component)/navbarhome";

export default function TrainerProfile() {
  return (
    <main className="justify-between">
            <Navbarhome />
    <div className="bg-customGray2 bg-suto static text-white p-24 font-sans">
      <div className="container justify-center mx-auto flex items-center  ">
        <img
          src="gananwo.png"
          alt=""
          className="size-30 rounded-lg object-cover mb-6 mr-4"
        />
        <div>
          <h3 className="text-lg/tight font-bold mb-1">Gananwo</h3>

          <p className="mt-0.5 mb-4">Personal Trainer</p>
          <BookAppointment></BookAppointment>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl mb-4">About Me</h2>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor si amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative max-w-xl mx-auto mt-auto">
            <img className="object-cover rounded-none" src="p1.png" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
          <div className="relative max-w-xl mx-auto mt-auto">
            <img className="object-cover rounded-md" src="p2.png" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
          <div className="relative max-w-xl mx-auto mt-auto">
            <img className="object-cover rounded-md" src="p3.png" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
          <div className="relative max-w-xl mx-auto mt-auto">
            <img className="object-cover rounded-md" src="p4.png" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
          <div className="relative max-w-xl mx-auto mt-auto">
            <img className="object-cover rounded-md" src="p5.png" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
          <div className="relative max-w-xl mx-auto mt-auto">
            <img className="object-cover rounded-md" src="p6.png" />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
