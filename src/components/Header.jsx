import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between items-center shadow-sm max-w-6xl mx-auto p-3">
      <div>
        <Link to={"/"}>
          <span className="text-blue-700 text-2xl">Calendly</span>
        </Link>
        <span className="text-2xl opacity-65 mx-1 px-1">|</span>
        <Link to={"/"}>
          <span className="text-lg font-semibold">Help Center</span>
        </Link>
      </div>
      <div className="flex justify-around">
        <ul className="hidden md:flex items-center gap-4 text-sm font-semibold md:text-md">
          <Link to={"#"}>
            <li className="flex items-center">
              Developers &nbsp; <BsBoxArrowUpRight className="text-lg" />
            </li>
          </Link>
          <Link to={"#"}>
            <li className="flex items-center">
              Report Abuse &nbsp; <BsBoxArrowUpRight className="text-lg" />
            </li>
          </Link>
          <Link to={"#"}>
            <li>Contact Us</li>
          </Link>
        </ul>
        <span className="text-2xl opacity-65 mx-1 px-2 hidden md:inline">
          |
        </span>
        <ul className="flex items-center gap-4 text-sm font-semibold sm:text-md">
          <Link to={"#"}>
            <li>Log In</li>
          </Link>
          <Link to={"#"}>
            <li>Sign Up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
