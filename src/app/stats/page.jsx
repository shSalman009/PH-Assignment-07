"use client";

import { TimelineContext } from "@/context/TimelineContext";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

export default function StatsPage() {
  const { timelineData } = useContext(TimelineContext);

  const data = [
    {
      name: "Text",
      value: timelineData.filter((t) => t.type === "text").length,
      fill: "#7F37F5",
    },
    {
      name: "Call",
      value: timelineData.filter((t) => t.type === "call").length,
      fill: "#244D3F",
    },
    {
      name: "Video",
      value: timelineData.filter((t) => t.type === "video").length,
      fill: "#37A163",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:my-20 my-12">
      <h2 className="md:text-5xl text-4xl font-extrabold leading-tight text-slate-800 mb-8">
        Friendship Analytics
      </h2>

      <div className="bg-base-100 shadow rounded-md p-8">
        <h4 className="text-xl font-medium text-emerald-900 mb-10 sm:text-start text-center">
          By Interaction Type
        </h4>

        <div className="flex justify-center">
          {timelineData.length === 0 && (
            <p className="text-center text-gray-500 text-xl font-medium">
              Analytics Data Not Available
            </p>
          )}
          {timelineData.length > 0 && (
            <PieChart
              style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "80vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                margi
                data={data}
                innerRadius="75%"
                outerRadius="100%"
                cornerRadius="5%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Tooltip />
              <Legend
                align="center"
                iconSize={8}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-gray-500">{value}</span>
                )}
                wrapperStyle={{
                  paddingTop: "40px",
                }}
              />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
}
