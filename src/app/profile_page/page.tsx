import React from 'react'
import Navbarhome from "../(component)/navbarhome";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
function page() {
    return (
        <main className="justify-between">
            <Navbarhome />

            <div className="min-h-screen bg-customGray3 text-white flex items-center justify-center">
                <div className="container mx-auto p-6">
                    <div className="flex justify-between">
                        <div className="w-1/3  bg-customGray p-6 rounded-lg">
                            <div className="flex flex-col items-center">
                                <img src="pp.png" className="rounded-full w-32 h-32" />
                                <h2 className="mt-4 text-2xl font-bold">Delvin Supriadi</h2>
                                <div className="flex flex-col items-center mt-4">
                                    <div className="flex items-center">
                                        <span className="text-xl">📏</span>
                                        <span className="ml-2 text-lg">180 cm</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="text-xl">⚖️</span>
                                        <span className="ml-2 text-lg">78 kg</span>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p>DelvinSupriadi@gmail.com</p>
                                        <p>081234567890</p>
                                    </div>
                                    <button className="mt-6 px-4 py-2 bg-red-600 rounded">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3 bg-customGray p-6 rounded-lg ml-6">
                            <h2 className="text-2xl font-bold mb-4">My Appointment</h2>
                            <div className="space-y-4">
                                <div className="flex bg-customGray2 rounded-lg p-4 items-center">
                                    <img src="/gananwo.png" width={50} height={50} className="rounded-full" />
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold">Gananwo</p>
                                        <p className="text-sm">17-Aug-1945</p>
                                        <p className="text-sm">4:20 PM</p>
                                    </div>
                                    <div className="relative max-w-xl ml-auto mt-auto">
                                        <img className="object-cover rounded-md" src="p1.png" />
                                        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h2 className="text-white text-xl font-bold">
                                                {" "}
                                                Lorem ipsum dolor sit amet
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex bg-customGray2 rounded-lg p-4 items-center">
                                    <img src="/gananwo.png" width={50} height={50} className="rounded-full" />
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold">Gananwo</p>
                                        <p className="text-sm">17-Aug-1945</p>
                                        <p className="text-sm">4:20 PM</p>
                                    </div>
                                    <div className="relative max-w-xl ml-auto mt-auto">
                                        <img className="object-cover rounded-md" src="p1.png" />
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
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page