import React from "react";
import { FcExpand } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-12 m-20">
        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          <div className="text-3xl font-bold">
            <h1 className="text-slate-600">Easy</h1>
            <h1 className="text-blue-700">ahead</h1>
          </div>
          <div className="text-slate-600">
            <p>
              We take the work out of connecting with others so you can
              accomplish more.
            </p>
          </div>
          <div>
            <button className="flex justify-between p-3 border rounded-lg w-full">
              <span>English (US)</span>
              <span className="text-xl">
                <FcExpand />
              </span>
            </button>
          </div>
          <div className="flex items-center gap-5 text-lg text-slate-700">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-slate-600">About</h1>
            <ul className="text-slate-600">
              <li>About Calendly</li>
              <li>Contact Sales</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-slate-600">Solutions</h1>
            <ul className="text-slate-600">
              <li>Customer Success</li>
              <li>Sales</li>
              <li>Recruiting</li>
              <li>Information Technology</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-slate-600">
              Popular Features
            </h1>
            <ul className="text-slate-600">
              <li>Embed Calendly</li>
              <li>Availability</li>
              <li>Sending Notifications</li>
              <li>Using Calendly Mobile</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-slate-600">Support</h1>
            <ul className="text-slate-600">
              <li>Help Center</li>
              <li>Video Tutorials</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-slate-600">Add-Ons</h1>
            <ul className="text-slate-600">
              <li>Download for Chrome</li>
              <li>Download for Firefox</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-slate-600">Developers</h1>
            <ul className="text-slate-600">
              <li>Developer Tools</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row justify-between items-center text-sm text-slate-400 opacity-70 mx-10 my-5">
        <p>Copyright Calendly 2022</p>
        <p>Calendly Status</p>
        <p>Privacy / Terms and Consitions</p>
      </div>
    </div>
  );
}
