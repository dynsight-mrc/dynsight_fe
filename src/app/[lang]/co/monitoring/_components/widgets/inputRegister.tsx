"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Humidity from "@/public/humidity.svg";

import { IoBulbOutline } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { MdRefresh } from "react-icons/md";

export default function InputRegister({ room, inputRegisterDetails }:any) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const getInputRegisterValue = useCallback(async () => {
    const result = await axios.get(
      `http://38.242.254.49:5000/api/modbus/inputregister/${inputRegisterDetails.id}`
    );
    setValue(result.data);
  }, [inputRegisterDetails]);
  useEffect(() => {
    const handleClickOutside = (event:Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as HTMLDivElement)) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuIsOpen]);

  useEffect(() => {
    getInputRegisterValue();
  }, [getInputRegisterValue]);

  const handleToggleMenu = (event:Event) => {
    setMenuIsOpen(true);
    event.stopPropagation();
  };
  return (
    <div className=" mt-6 w-full  h-40 sm:w-80 border border-gray-100 rounded-md flex flex-col p-4 pb-3  shadow-md text-gray-600 justify-between bg-gradient-to-tr from-sky-100 to-gray-50">
      <div className="flex flex-rox justify-between">
        {inputRegisterDetails.modbusServer.name}
        <div ref={menuRef} className="flex flex-row">
          <MdRefresh
            onClick={getInputRegisterValue}
            className="w-6 h-6   hover:scale-110 hover:text-blue-400 cursor-pointer"
          />

          <BsThreeDots
            onClick={handleToggleMenu}
            className="w-5 h-5 ml-3 hover:scale-110 hover:text-blue-400 cursor-pointer"
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
            <Image src={Humidity} className="w-10 h-10" alt="Humidity-Icon" />
          </div>
          <div className="text-4xl">{value}</div>
          <div className="flex flex-col divide-y-2 justify-center items-center">
            <div>%</div>
          </div>
        </div>
        <div>{inputRegisterDetails.name}</div>
      </div>
      <div className="flex justify-center text-blue-300 hover:text-blue-400 hover:underline transition-all duration-200 ease-out">
        <Link href={""}>{room}</Link>
      </div>
    </div>
  );
}
