import React from "react";
import SearchBar from "../components/SearchBar";
import Utilities from "../components/Utilities";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-6 max-w-sm md:max-w-2xl mx-auto">
        <h1 className="text-gray-700 text-2xl md:text-5xl font-bold">
          What can we help you with?
        </h1>
        <SearchBar />
        <Utilities />
      </div>
      <div className="flex flex-col gap-6 max-w-sm md:max-w-6xl mx-auto mt-10">
        <h1 className="text-gray-700 text-xl text-center md:text-4xl font-bold">
          Categories
        </h1>
        <Categories />
      </div>
      <hr />
    </div>
  );
}
