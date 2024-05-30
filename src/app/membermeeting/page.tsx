"use client"
import { useEffect, useState } from "react";
import Navbar2 from "../(component)/navbar2";

const fetchMeetingLink = async () => {
  const userID = "someUserID"; // replace with actual user ID logic
  const response = await fetch(`http://localhost:3001/api/getMeetingLink?userID=${userID}`);
  if (response.ok) {
    const data = await response.json();
    return data.meetingLink;
  }
  throw new Error('Meeting link not found');
};

export default function MemberMeeting() {
  const [meetingLink, setMeetingLink] = useState("");

  useEffect(() => {
    const getLink = async () => {
      try {
        const link = await fetchMeetingLink();
        setMeetingLink(link);
      } catch (error) {
        console.error(error);
      }
    };
    getLink();
  }, []);

  return (
    <div>
      <Navbar2 />
      <main className="flex flex-col items-center justify-between p-24 font-sans">
        <div className="flex flex-col mt-10">
          {meetingLink ? (
            <a href={meetingLink} className="text-center text-lg">
              Join the meeting
            </a>
          ) : (
            <p>Loading meeting link...</p>
          )}
        </div>
      </main>
    </div>
  );
}
