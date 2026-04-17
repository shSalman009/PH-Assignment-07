"use client";

import { TimelineContext } from "@/context/TimelineContext";
import React, { useContext, useState } from "react";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { DateFormat } from "@/lib/DateFormat";

const icons = {
  call: callIcon,
  text: textIcon,
  video: videoIcon,
};

const filterOptions = ["all", "call", "text", "video"];

export default function TimelinePage() {
  const { filteredTimelineData, filter, setFilter } =
    useContext(TimelineContext);

  // Handle Filter Function
  const handleFilterTimeline = (type) => {
    setFilter(type);
    document.activeElement.blur();
  };

  const [searchValue, setSearchValue] = useState("");
  const [sortType, setSortType] = useState("default");

  let processedData = [...filteredTimelineData];

  // Search
  if (searchValue) {
    processedData = processedData.filter(
      (d) =>
        d.type.toLowerCase().includes(searchValue.toLowerCase()) ||
        d.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  // Handle Sort Function
  const handleSort = () => {
    if (sortType === "default") {
      processedData.sort((a, b) => b.date.localeCompare(a.date));
      setSortType("newest");
    } else if (sortType === "newest") {
      processedData.sort((a, b) => a.date.localeCompare(b.date));
      setSortType("oldest");
    } else if (sortType === "oldest") {
      setSortType("default");
    }
  };

  return (
    <div className="container mx-auto px-4 lg:my-20 my-12">
      <h2 className="md:text-5xl text-4xl font-extrabold leading-tight text-slate-800 mb-8">
        Timeline
      </h2>
      <div className="flex md:flex-nowrap flex-wrap-reverse md:justify-start justify-between mb-6 gap-4">
        {/* Dropdown */}
        <div className="dropdown">
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

        {/* Sort */}
        <button
          onClick={handleSort}
          className="btn btn-lg text-base text-gray-500 gap-2 border-gray-200 capitalize"
        >
          <TbArrowsSort />
          {sortType === "default" ? "Sort" : sortType}
        </button>

        {/* Searc Bar */}
        <label className="input input-lg md:ml-auto md:w-auto w-full">
          <IoSearchSharp className="h-[1em] opacity-50" />
          <input
            type="search"
            required
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
      </div>
      <div className="space-y-6">
        {processedData.length === 0 && (
          <p className="text-center text-gray-500 text-xl font-medium">
            No Data Found
          </p>
        )}
        {processedData.length > 0 &&
          processedData.map((timeline, id) => (
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
                <p className="text-gray-500 font-medium">
                  {DateFormat(timeline.date)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
