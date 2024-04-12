import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { BsYinYang } from "react-icons/bs";
import { BsCameraReels } from "react-icons/bs";
import { BsColumnsGap } from "react-icons/bs";
import { BsFlower3 } from "react-icons/bs";
import { BsDropbox } from "react-icons/bs";

export default function Utilities() {
  return (
    <div className="flex justify-between items-center gap-4 m-5">
      <div className="flex flex-col gap-5 text-md text-blue-500 font-medium">
        <a className="flex items-center gap-3" href="#">
          <BsStarHalf className="text-xl" /> Setting up your first event
        </a>
        <a className="flex items-center gap-3" href="#">
          <BsYinYang className="text-xl" />
          Troubleshooting availability
        </a>
        <a className="flex items-center gap-3" href="#">
          <BsCameraReels className="text-xl" />
          Schedule with video conferencing
        </a>
      </div>
      <div className="flex flex-col gap-5 text-md text-blue-500 font-medium">
        <a className="flex items-center gap-3" href="#">
          <BsColumnsGap className="text-xl" />
          Embed options overview
        </a>
        <a className="flex items-center gap-3" href="#">
          <BsFlower3 className="text-xl" />
          Automate tasks with Workflows
        </a>
        <a className="flex items-center gap-3" href="#">
          <BsDropbox className="text-xl" />
          Using Calendly for Chromess
        </a>
      </div>
    </div>
  );
}
