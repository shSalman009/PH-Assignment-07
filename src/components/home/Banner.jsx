import React from "react";
import { BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

export default function Banner() {
  return (
    <div className="text-center lg:mt-20 mt-12 space-y-4">
      <h2 className="md:text-5xl text-4xl font-extrabold leading-tight text-slate-800">
        Friends to keep close in your life
      </h2>
      <p className="text-lg text-gray-500 lg:max-w-2xl text-center mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-emerald-900 text-white ">
        <LuPlus className="size-[1.2em]" /> Add a Friend
      </button>

      <div className="grid lg:grid-cols-4 grid-cols-2 sm:gap-6 gap-4 mt-6">
        <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
          <h4 className="text-4xl font-bold text-emerald-900 mb-2">10</h4>
          <p className="text-gray-500 md:text-xl text-base">Total Friends</p>
        </div>
        <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
          <h4 className="text-4xl font-bold text-emerald-900 mb-2">3</h4>
          <p className="text-gray-500 md:text-xl text-base">TOn Track</p>
        </div>
        <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
          <h4 className="text-4xl font-bold text-emerald-900 mb-2">6</h4>
          <p className="text-gray-500 md:text-xl text-base">Need Attention</p>
        </div>
        <div className="bg-base-100 shadow rounded-md sm:p-8 p-4">
          <h4 className="text-4xl font-bold text-emerald-900 mb-2">12</h4>
          <p className="text-gray-500 md:text-xl text-base">
            Interactions This Month
          </p>
        </div>
      </div>
    </div>
  );
}
