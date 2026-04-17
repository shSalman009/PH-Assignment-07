"use client";

import { TimelineContext } from "@/context/TimelineContext";
import Image from "next/image";
import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsCameraVideo, BsChatLeftDots } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineArchive } from "react-icons/hi";
import { PiBellSimpleZFill } from "react-icons/pi";
import { toast } from "react-toastify";

const statusColor = {
  overdue: "bg-red-500",
  "almost due": "bg-yellow-500",
  "on-track": "bg-emerald-900",
};

export default function FriendDetails({ friend }) {
  const { setTimelineData } = useContext(TimelineContext);

  const handleCheckIn = (type) => {
    const timeline = {
      date: new Date().toLocaleDateString("en-CA"),
      name: friend.name,
      type: type,
    };
    setTimelineData((prev) => [...prev, timeline]);

    toast.success(
      `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`,
      {
        position: "top-center",
      },
    );
  };

  return (
    <div className="container mx-auto px-4 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-6 gap-y-6 lg:my-20 my-12">
      {/* Left Part */}
      <div className="col-span-1 space-y-4">
        <div className="bg-base-100 shadow rounded-md p-6 flex flex-col items-center justify-center gap-2">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full"
          />

          <h4 className="text-xl font-semibold">{friend.name}</h4>

          <p
            className={`rounded-full px-2 py-1 text-xs font-medium capitalize text-white ${statusColor[friend.status]}`}
          >
            {friend.status}
          </p>

          <div className="flex gap-1 flex-wrap">
            {friend.tags.map((tag, id) => (
              <p
                key={id}
                className="rounded-full px-2 py-1 text-xs font-medium bg-emerald-200 text-emerald-900 uppercase"
              >
                {tag}
              </p>
            ))}
          </div>

          <p className="text-gray-500 font-medium text-base italic">
            "{friend.bio}"
          </p>

          <p className="text-gray-500 text-sm italic">
            Preferred: {friend.email}
          </p>
        </div>
        <div className="space-y-2">
          <button className="btn btn-xl text-base bg-base-100 w-full">
            <PiBellSimpleZFill className="size-[1.2em]" />
            Snooze 2 Weeks
          </button>
          <button className="btn btn-xl text-base bg-base-100 w-full">
            <HiOutlineArchive className="size-[1.2em]" />
            Archive
          </button>
          <button className="btn btn-xl text-base bg-base-100 text-red-500 w-full">
            <FaRegTrashAlt className="size-[1.2em]" />
            Delete
          </button>
        </div>
      </div>
      {/* Right Part */}
      <div className="col-span-2 space-y-6">
        <div className="grid grid-cols-3 sm:gap-6 gap-4 text-center">
          <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
            <h4 className="md:text-4xl sm:text-2xl text-xl font-bold text-emerald-900 mb-2">
              {friend.days_since_contact}
            </h4>
            <p className="text-gray-500 md:text-xl text-base">
              Days Since Contact
            </p>
          </div>
          <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
            <h4 className="md:text-4xl sm:text-2xl text-xl font-bold text-emerald-900 mb-2">
              {friend.goal}
            </h4>
            <p className="text-gray-500 md:text-xl text-base">Goal (Days)</p>
          </div>
          <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
            <h4 className="md:text-4xl sm:text-2xl text-xl font-bold text-emerald-900 mb-2">
              {friend.next_due_date}
            </h4>
            <p className="text-gray-500 md:text-xl text-base">Next Due</p>
          </div>
        </div>
        <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
          <div className="flex justify-between">
            <h4 className="text-2xl font-medium text-emerald-900 mb-4">
              Relationship Goal
            </h4>
            <button className="btn">Edit</button>
          </div>
          <p className="text-xl">
            <span className="text-gray-500">Connect every</span>
            <span className="font-bold text-slate-900">
              {" "}
              {friend.goal} days
            </span>
          </p>
        </div>

        <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
          <h4 className="text-2xl font-medium text-emerald-900 mb-4">
            Quick Check-In
          </h4>

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
        </div>
      </div>
    </div>
  );
}
