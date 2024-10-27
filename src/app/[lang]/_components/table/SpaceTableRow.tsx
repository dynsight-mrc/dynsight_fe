"use client";
import React from "react";

import Link from "next/link";

export default function SpaceTableRow({ row, keys }:{row:Record<string,any>,keys:string[]}) {
  return (
    <Link href={`/admin/blocs/${row.id}/overview`} className="cursor-pointer bg-white flex flex-row items-center py-3 border-b border-gray-100 hover:bg-gray-100">
      <div className="flex w-full flex-row items-center justify-between ">
        {keys.map((key, index) => {
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

