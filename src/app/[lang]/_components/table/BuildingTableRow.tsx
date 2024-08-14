"use client";
import React, { useState } from "react";
import Vayyar from "@/public/skyscapper5.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BuildingAlt from "@/public/building-alt.svg"

function BuildingTableRow({ row, keys }:{row:Record<string,any>,keys:string[]}) {
  
  const path = usePathname()
  return (
    <Link href={`/${path.split("/")[2]}/buildings/${row.id}/overview`} className="cursor-pointer bg-white flex flex-row items-center py-3 border-b border-gray-100 hover:bg-gray-100">
      <div className="flex w-full flex-row items-center justify-between ">
        {keys.map((key, index) => {
          if (index === 0)
            return (
              <div key={index} className={`flex flex-row w-full w-1/${keys.length} mx-3 items-center space-x-3`}>
                <div className="w-9 h-9 rounded-full overflow-hidden object-cover">
                  <Image
                    src={row.image ?? BuildingAlt}
                    alt="site-image"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-center leading-tight">
                  <span className="text-blue-400">{row.reference}</span>
                  <span>{row["name"]}</span>
                </div>
              </div>
            );
          return (
            <div
              key={index}
              className={`mx-3 sm:text-base text-xs text-gray-600 w-full  w-1/${keys.length}`}
            >

              {key.split(".").length>1?row[`${key.split(".")[0]}`][`${key.split(".")[1]}`]:row[key]}
             
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default BuildingTableRow;
