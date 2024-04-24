"use client";
import React, { useState } from "react";
import { PiStackSimpleLight } from "react-icons/pi";

import Link from "next/link";
function generateRandomNumber() {
  const min = Math.pow(10, 9); // 10^9
  const max = Math.pow(10, 10) - 1; // 10^10 - 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function FloorTableRow({ row, keys }:{row:Record<string,string>,keys:string[]}) {
  return (
    <Link href={`/admin/buildings/${generateRandomNumber()}/overview`} className="cursor-pointer bg-white flex flex-row items-center py-3 border-b border-gray-100 hover:bg-gray-100">
      <div className="flex w-full flex-row items-center justify-between ">
        {keys.map((key, index) => {
          return (
            <div
              key={index}
              className={`mx-3 sm:text-base text-xs text-gray-600  w-1/${keys.length}`}
            >
              {row[key]}
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default FloorTableRow;
