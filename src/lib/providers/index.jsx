import TimelineProvider from "@/context/TimelineContext";
import React from "react";

export default function Providers({ children }) {
  return <TimelineProvider>{children}</TimelineProvider>;
}
