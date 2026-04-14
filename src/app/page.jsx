import Banner from "@/components/home/Banner";
import React from "react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <Banner />

      <div className="border-t border-gray-200 my-12"></div>

      <h1>Home Page</h1>
    </div>
  );
}
