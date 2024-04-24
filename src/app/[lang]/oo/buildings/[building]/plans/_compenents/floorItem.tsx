"use client"
import { PiStackSimpleLight } from "react-icons/pi";
import { useState } from "react";

export default function FloorItem({
  name,
}: {
  name: string;
}) {
   
  return (
    <div className="border-b border-gray-100">
      <div
        className={`w-full flex flex-row justify-between p-3 px-1 pr-4 space-x-3 items-center  hover:bg-blue-100 cursor-pointer `}
      >
        <div className="pl-3 flex flex-row items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden ">
            <PiStackSimpleLight className="w-full h-full object-cover" />
          </div>
          <span className="text-gray-500">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}
