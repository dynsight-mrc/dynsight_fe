"use client";
import React, { useState } from "react";
import Vayyar from "@/public/air-conditioner.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
function generateRandomNumber() {
  const min = Math.pow(10, 9); // 10^9
  const max = Math.pow(10, 10) - 1; // 10^10 - 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function DeviceTableRow({ row, keys }:{row:Record<string,string>,keys:string[]}) {
  const params = useParams()
  console.log("params from deviceTableRow",params.building);
  
  const path = usePathname()
  console.log("here table row",path);
  
  return (
    <Link href={`/oo/buildings/${params.building}}/devices/${generateRandomNumber()}/overview`} className="cursor-pointer bg-white flex flex-row items-center py-3 border-b border-gray-100 hover:bg-gray-100">
      <div className="flex w-full flex-row items-center justify-between ">
        {keys.map((key, index) => {
          if (index === 0)
            return (
              <div className={`flex flex-row w-full w-1/${keys.length} mx-3 items-center space-x-3`}>
                <div className="w-9 h-9 rounded-full overflow-hidden object-cover">
                  <Image
                    src={Vayyar}
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
              key={index}
              className={`mx-3 sm:text-base text-xs text-gray-600 w-full w-1/${keys.length}`}
            >
              {row[key]}
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default DeviceTableRow;
