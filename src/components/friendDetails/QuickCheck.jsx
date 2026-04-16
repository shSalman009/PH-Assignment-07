"use client";

import { BiPhoneCall } from "react-icons/bi";
import { BsCameraVideo, BsChatLeftDots } from "react-icons/bs";

export default function QuickCheck({ handleCheckIn }) {
  return (
    <div className="flex gap-4">
      <button
        className="btn sm:btn-xl btn-lg flex-col h-auto p-6 font-medium grow"
        onClick={() => handleCheckIn("call")}
      >
        <BiPhoneCall className="size-[1.2em]" />
        Call
      </button>
      <button
        className="btn sm:btn-xl btn-lg flex-col h-auto p-6 font-medium grow"
        onClick={() => handleCheckIn("text")}
      >
        <BsChatLeftDots className="size-[1.2em]" />
        Text
      </button>
      <button
        className="btn sm:btn-xl btn-lg flex-col h-auto p-6 font-medium grow"
        onClick={() => handleCheckIn("video")}
      >
        <BsCameraVideo className="size-[1.2em]" />
        Video
      </button>
    </div>
  );
}
