import React from "react";

export default function Card({ id, image, title, desc }) {
  return (
    <div className="flex flex-col flex-1 gap-4 border border-white shadow-lg shadow-slate-200 rounded-lg p-5">
      <div className="flex justify-center items-center">
        <img src={image} alt="Image" className="h-20 w-30" />
      </div>
      <div className="text-center">
        <h1 className="text-lg font-bold text-slate-700">{title}</h1>
      </div>
      <div className="text-center">
        <p className="text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
