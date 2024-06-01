"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function BookAppointment() {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeSlot(timeList);
  };

  const handleSubmit = async () => {
    if (!selectedTimeSlot) {
      alert("Please select a time slot.");
      return;
    }

    const [time, period] = selectedTimeSlot.split(" ");
    const [hour, minute] = time.split(":");

    let hours = parseInt(hour, 10);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;

    const bookingDate = new Date(date);
    bookingDate.setHours(hours, parseInt(minute, 10));

    const data = {
      trainername: "John Doe",
      programname: "Fitness Bootcamp",
      booked_at: bookingDate.toISOString(), // ensure date is in correct format
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/createorder",
        data
      );
      console.log("Booking successful:", response.data);
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className={buttonVariants({ size: "categ", variant: "category" })}
        >
          Book
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Calendar */}
                <div className="flex flex-col gap-5 items-baseline">
                  <h2 className="mt-2">Select Date</h2>
                  <div className="flex">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                </div>
                {/* Time */}
                <div className="mt-3">
                  <h2 className="mb-5">Select Time</h2>
                  <div className="grid grid-cols-3 gap-2 border rounded-lg p-3">
                    {timeSlot.map((item, index) => (
                      <h2
                        key={index}
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2.5 border cursor-pointer text-center hover:bg-customRed rounded-md ${
                          item.time === selectedTimeSlot &&
                          "bg-customRed text-white"
                        }`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <>
              <Link href='/homepage'>
                <Button type="button" variant="category" onClick={handleSubmit}>
                  Submit
                </Button>
              </Link>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;
