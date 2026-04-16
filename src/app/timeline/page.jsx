"use client";

import { TimelineContext } from "@/context/TimelineContext";
import React, { useContext, useState } from "react";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const icons = {
  call: callIcon,
  text: textIcon,
  video: videoIcon,
};

const filterOptions = ["all", "call", "text", "video"];

export default function TimelinePage() {
  const { timelineData, filter, setFilter } = useContext(TimelineContext);

  const handleFilterTimeline = (type) => {
    setFilter(type);
    document.activeElement.blur();
  };
  console.log(timelineData.length);

  return (
    <div className="container mx-auto px-4 lg:my-20 my-12">
      <h2 className="md:text-5xl text-4xl font-extrabold leading-tight text-slate-800 mb-8">
        Timeline
      </h2>
      <div className="dropdown mb-6">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg text-base text-gray-500 w-60 justify-between capitalize"
        >
          {filter === "all" ? "Filter Timeline" : filter}
          <IoIosArrowDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-60 p-2 shadow-sm"
        >
          {filterOptions.map((option) => (
            <li key={option}>
              <button
                className="capitalize"
                onClick={() => handleFilterTimeline(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        {timelineData.length === 0 && (
          <p className="text-center text-gray-500 text-xl font-medium">
            No Data Found
          </p>
        )}
        {timelineData.length > 0 &&
          timelineData.map((timeline, id) => (
            <div
              key={id}
              className="bg-base-100 shadow rounded-md p-4 flex justify-start items-center gap-6"
            >
              <Image
                src={icons[timeline.type]}
                alt={timeline.type}
                width={35}
                height={35}
              />
              <div>
                <p className="text-xl mb-2">
                  <span className="font-semibold text-emerald-900 capitalize">
                    {timeline.type}
                  </span>{" "}
                  <span className="text-gray-500">with {timeline.name}</span>
                </p>
                <p className="text-gray-500 font-medium">{timeline.date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
