import React from "react";

export default function teste() {
  return (
    <div>
      <div className="flex flex-col gap-4 m-4 justify-center sm:space-x-5 items-center sm:flex-row  ">
        <div className="bg-red-700 w-80 h-12"></div>
        <div className="bg-red-700 w-80 h-12"></div>
        <div className="bg-red-700 w-80 h-12"></div>
      </div>
      <div className="flex space-x-4 sm:justify-center sm:flex-col sm:items-center sm:space-y-5 ">
        <div className="bg-blue-700 w-40 h-52 ml-4"></div>
        <div className="bg-blue-700 w-40 h-52"></div>
      </div>
    </div>
  );
}
