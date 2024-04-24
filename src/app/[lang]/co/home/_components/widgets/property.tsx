"use client";

import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

import { BsThreeDots } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import Wave from "@/public/wave-top.svg";
import { Nova_Flat } from "next/font/google";
import Wave2 from "@/public/wave-top2.svg";

const novaFlat = Nova_Flat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Property({
  room,
  equipment,
  property,
  unit,
  socketId,
}: any) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuIsOpen]);

  const formatReceivedData = (data: any): any => {
    if (typeof data === "boolean") {
      if (data) return "ON";
      else return "OFF";
    }
    return data;
  };

  useEffect(() => {
    const socket = io("http://38.242.254.49:4000");

    // Event listeners for the socket
    socket.on("connect", () => {
    });

    socket.on(socketId, (data: any): any => {
      setValue(formatReceivedData(data));
    });

    // Cleanup the socket connection when the component unmounts
    return () => {
      console.log("disconnected");
      
      socket.disconnect();
    };
  }, [socketId]);

  const handleToggleMenu = () => {
    setMenuIsOpen(true);
  };

  
  return (
    <div className="mr-1 mb-1 relative w-full overflow-hidden h-40  sm:h-72 sm:w-52  rounded-md   text-white shadow-lg font-semibold text-xl justify-between bg-yellow-300 ">
      <Image
        src={Wave}
        alt="wave"
        className="absolute top-0 z-20 h-28 w-full object-cover "
      />

      <Image
        src={Wave2}
        alt="wave"
        className="absolute top-0 z-10 h-28 w-full object-cover "
      />

      <div className="relative flex flex-col justify-between p-4 pb-3 h-full z-20">
        <div className="flex flex-rox justify-between">
          {equipment}
          <div ref={menuRef} onClick={handleToggleMenu}>
            <BsThreeDots className="w-5 h-5 hover:scale-110 hover:text-blue-400 cursor-pointer" />
            {/* {menuIsOpen && ( */}
            <div
              className={`absolute transition-all duration-300 ease-out ${
                menuIsOpen ? "translate-x-0" : "translate-y-36"
              } bottom-0 left-0 w-full divide-y-2 z-20  bg-white border border-gray-100 rounded-sm`}
            >
              <div className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                item 1
              </div>
              <div className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                item 2
              </div>
              <div className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                item 3
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between sm:space-y-3 ">
          <div className="font-thin text-2xl">
            {property.length > 15 ? property.slice(0, 10) + "..." : property}{" "}
          </div>
      
            <div
              className={`flex space-x-3 items-center font-bold ${novaFlat.className}`}
            >
              <div className="text-4xl font-bold">{value ? value : ""}</div>
              <div className="text-2xl flex flex-col divide-y-2 justify-center items-center">
                {unit ? unit : ""}
              </div>
            </div>
    
        </div>

        <div className="flex justify-center  hover:text-yellow-500 hover:underline transition-all duration-200 ease-out">
          <Link href={""}>{room}</Link>
        </div>
      </div>
    </div>
  );
}
