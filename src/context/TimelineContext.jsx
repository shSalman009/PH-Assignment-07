"use client";

import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

export default function TimelineProvider({ children }) {
  const [timelineData, setTimelineData] = useState([]);

  const data = {
    timelineData,
    setTimelineData,
  };

  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
}
