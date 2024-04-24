"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function generateRandomNumber() {
  const min = Math.pow(10, 9); // 10^9
  const max = Math.pow(10, 10) - 1; // 10^10 - 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function BuildingTableRow({ row, keys }:{row:Record<string,string>,keys:string[]}) {
  return (
    <Link href={`/oo/buildings/${generateRandomNumber()}/overview`} className="cursor-pointer bg-white flex flex-row items-center py-3 border-b border-gray-100 hover:bg-gray-100">
      <div className="flex w-full flex-row items-center justify-between ">
        {keys.map((key, index) => {
          if (index === 0)
            return (
              <div  key={generateRandomNumber()} className={`flex flex-row w-1/${keys.length} mx-3 items-center space-x-3`}>
                <div className="w-9 h-9 rounded-full overflow-hidden object-cover">
                  <Image
                    src={row.image}
                    alt="site-image"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center leading-tight">
                  <span className="text-blue-400">#1235667</span>
                  <span>{row["name"]}</span>
                </div>
              </div>
            );
          return (
            <div
              key={generateRandomNumber()}
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

export default BuildingTableRow;
