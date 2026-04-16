import Friends from "@/components/home/Friends";
import Banner from "@/components/home/Banner";
import React, { Suspense } from "react";
import LoadingState from "@/components/LoadingState";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 lg:my-20 my-12">
      <Banner />

      <div className="border-t border-gray-200 my-12"></div>

      <Suspense fallback={<LoadingState />}>
        <Friends />
      </Suspense>
    </div>
  );
}
