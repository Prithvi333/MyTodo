import React from "react";

export default function Loader() {
  return (
    <div className="bg-gray-100 flex items-center justify-center w-4/5">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-blue-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}
