"use client";

import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

export default function TimelineProvider({ children }) {
  const [timelineData, setTimelineData] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTimelineData =
    filter === "all"
      ? timelineData
      : timelineData.filter((d) => d.type === filter);

  const data = {
    timelineData,
    filteredTimelineData,
    setTimelineData,
    filter,
    setFilter,
  };

  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
}
