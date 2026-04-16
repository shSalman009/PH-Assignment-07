import React from "react";

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <span className="loading loading-dots loading-lg text-primary"></span>

      <p className="text-sm font-semibold tracking-widest text-base-content/50 uppercase">
        Preparing your view...
      </p>
    </div>
  );
}
