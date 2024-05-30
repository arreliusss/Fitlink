"use client";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footers from "../(component)/footer";
import NavbarHome from "../(component)/navbarhome";
import { Button, buttonVariants } from "@/components/ui/button";
import RegisterPage from "../register/page";
import Navbar2 from "../(component)/navbar2";
import VideoRoom from "../(component)/VideoRoom";
import { useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function Meeting() {
  const router = useRouter();
  const [joined, setJoined] = useState(false);

  const roomID = getUrlParams().get("roomID") || randomID(5);
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 572224980;
    const serverSecret = "81dacf3eb59dee443272e9965df99985";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div>
      <Navbar2 />
      <main className="flex flex-col items-center justify-between p-24 font-sans">
        <div className="flex flex-col mt-10">
          <img
            src="gym_bg5.jpg"
            className="background-image"
            alt="Background Image"
          />
          {!joined && (
            <div>
              <h1 className="text-4xl font-bold text-center mb-4">
                Click to Join the Meeting
              </h1>
              <button
                onClick={() => setJoined(true)}
                className="ml-40 bg-gray-800 text-white rounded-lg w-24 h-14 mt-40 shadow-xl"
              >
                Join
              </button>
            </div>
          )}
          {joined && <div ref={myMeeting}></div>}
          <p className="text-center text-lg"></p>
        </div>
      </main>
    </div>
  );
}
