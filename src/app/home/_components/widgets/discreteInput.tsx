"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import DoorLock from "@/public/door-lock.svg";
import Link from "next/link";
import Image from "next/image";
import { MdRefresh } from "react-icons/md";
import axios from "axios";
import { Nova_Flat } from "next/font/google";

import Wave from "@/public/wave-top-blue.svg";
import Wave2 from "@/public/wave-top-blue2.svg";

const novaFlat = Nova_Flat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function DiscreteInput({ room, discreteInputDetails }: any) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const getDiscreteInputValue = useCallback(async () => {

    const result = await fetch(
      `http://localhost:3001/home/api/devices/discreteinputs/${discreteInputDetails.id}`
    );
    let data = await result.json()
    setValue(data);
  }, []);

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

  const handleToggleMenu = () => {
    setMenuIsOpen(true);
  };

  useEffect(() => {
    getDiscreteInputValue();
  }, [getDiscreteInputValue]);

  return (
    <div
      ref={menuRef}
      className="mr-1 mb-1 relative w-full overflow-hidden h-40  sm:h-72 sm:w-52  rounded-md   text-white shadow-lg font-semibold text-xl justify-between bg-blue-300 "
    >
      <Image
        src={Wave}
        alt="wave"
        className="absolute top-0 z-20  h-28 w-full object-cover "
      />
      <Image
        src={Wave2}
        alt="wave"
        className="absolute top-0 z-10 h-28 w-full object-cover "
      />


      <div className="relative flex flex-col justify-between p-4 pb-3 h-full z-20">
        <div className="flex flex-rox justify-between">
          {discreteInputDetails.modbusServer.name}
          <div ref={menuRef} onClick={() => handleToggleMenu}>
            <div className="flex flex-row space-x-2 items-center">
              <MdRefresh
                onClick={getDiscreteInputValue}
                className="w-6 h-6   hover:scale-110 hover:text-blue-400 cursor-pointer"
              />
              <BsThreeDots
                onClick={handleToggleMenu}
                className="w-5 h-5 ml-2 hover:scale-110 hover:text-blue-400 cursor-pointer"
              />
            </div>

            {/* {menuIsOpen && ( */}
            <div
              className={`absolute transition-all duration-300 ease-out ${
                menuIsOpen ? "translate-x-0" : "translate-y-36"
              } bottom-0 left-0 w-full divide-y-2 z-20  bg-white border border-gray-100 rounded-sm`}
            >
        
              <div className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                details
              </div>
              <div className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                see last values
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between sm:space-y-3 ">
          <div className="font-thin text-2xl">
            {discreteInputDetails.name.length > 15
              ? discreteInputDetails.name.slice(0, 10) + "..."
              : discreteInputDetails.name}{" "}
          </div>
          <div
            className={`flex space-x-3 items-center font-bold ${novaFlat.className}`}
          >
            <div className="text-4xl font-bold">{value ? "ON" : "OFF"}</div>
            {/* <div className="text-2xl flex flex-col divide-y-2 justify-center items-center">
              {unit ? unit : ""}
            </div> */}
          </div>
        </div>

        <div className="flex justify-center text-white-300 hover:text-blue-400 hover:underline transition-all duration-200 ease-out">
          <Link href={""}>{room}</Link>
        </div>
      </div>

      {/* <div className="flex flex-rox justify-between">
        {discreteInputDetails.modbusServer.name}
        <div ref={menuRef} className="flex flex-row items-center">
          <MdRefresh
            onClick={getDiscreteInputValue}
            className="w-6 h-6   hover:scale-110 hover:text-blue-400 cursor-pointer"
          />

          <BsThreeDots
            onClick={handleToggleMenu}
            className="w-5 ml-3 h-5 hover:scale-110 hover:text-blue-400 cursor-pointer"
          />
          <div className="relative">
            {menuIsOpen && (
              <div className="absolute bottom-0 left-0 w-max divide-y-2 z-20  bg-white border border-gray-100 rounded-sm">
                <div className="p-2 text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                  details
                </div>
                <div className="p-2 text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                  see last values
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between ">
        <div className="flex space-x-3 items-center">
          <div>
            <Image src={DoorLock} className="w-10 h-10" alt="Door-Lock-Icon" />
          </div>
          <div className="text-4xl">{value ? "ON" : "OFF"}</div>
        </div>
        <div>{discreteInputDetails.name}</div>
      </div>
      <div className="flex justify-center text-blue-300 hover:text-blue-400 hover:underline transition-all duration-200 ease-out">
        <Link href={""}>{room}</Link>
      </div> */}
    </div>
  );
}
