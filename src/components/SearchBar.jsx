import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div>
      <div className="flex items-center gap-2 text-slate-400 text-xl border rounded-3xl shadow-md p-3">
        <FaSearch />
        <input type="text" placeholder="Search our articles" />
      </div>
    </div>
  );
}
