"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";

const navLinks = [
  {
    text: "Home",
    icon: RiHome2Line,
    path: "/",
  },
  {
    text: "Timeline",
    icon: LuClock3,
    path: "/timeline",
  },
  {
    text: "Stats",
    icon: FaChartLine,
    path: "/stats",
  },
];

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <div className="max-lg:collapse bg-base-100 shadow-sm w-full rounded-t-md lg:px-12">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-ghost mr-2 lg:hidden"
          >
            <HiMenuAlt1 className="h-5 w-5" />
          </label>
          <Link href="/" className="text-2xl">
            <Image src={logo} width={140} height={30} alt="Website Logo" />
          </Link>
        </div>

        <div className="navbar-end space-x-1 lg:flex hidden">
          {navLinks.map((link, id) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.path}
                key={id}
                className={`btn ${link.path === currentPath ? "bg-emerald-900 text-white" : "bg-transparent border-none text-gray-500"}`}
              >
                <Icon className="size-[1.2em]" />
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu w-full">
          {navLinks.map((link, id) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.path}
                key={id}
                className={`btn justify-start ${link.path === currentPath ? "bg-emerald-900 text-white" : "bg-transparent border-none text-gray-500"}`}
              >
                <Icon className="size-[1.2em]" />
                {link.text}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
