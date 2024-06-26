"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import AirConditioner from "@/public/air-conditioner.svg";
import { IoBulbOutline } from "react-icons/io5";

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

export default function HoldingRegister({ room, holdingRegisterDetails }: any) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [holdingRegisterModal, setHoldingRegisterModal] = useState(false);
  const [value, setValue] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const getHoldingRegisterValue = useCallback(async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/home/api/devices/holdingregisters/${holdingRegisterDetails.id}`
    );
    let data = await res.json();

    setValue(data.toString());
  }, [holdingRegisterDetails]);

  const changeHoldingRegisterValue = useCallback(async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/home/api/devices/holdingregisters/${holdingRegisterDetails.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You may include other headers as needed
        },
        body: JSON.stringify({ value }),
      }
    );
    setValue(value);
    setHoldingRegisterModal(false);
  }, [holdingRegisterDetails,value]);

  useEffect(() => {
    getHoldingRegisterValue();
  }, [getHoldingRegisterValue]);

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

  const handleToggleMenu = (event: MouseEvent) => {
    setMenuIsOpen(true);
    event.stopPropagation();
  };

  const HandleToggleHoldingRegisterModal = (event: MouseEvent) => {
    setHoldingRegisterModal(true);
    setMenuIsOpen(false);
    event.stopPropagation();
  };

  const handleChangeHoldingRegisterValue = (event: Event) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
          {holdingRegisterDetails.modbusServer.name}
          <div ref={menuRef} onClick={() => handleToggleMenu}>
            <div className="flex flex-row space-x-2 items-center">
              <MdRefresh
                onClick={getHoldingRegisterValue}
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
              <div
                onClick={(event: any) =>
                  HandleToggleHoldingRegisterModal(event)
                }
                className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out"
              >
                Change value
              </div>
              <div className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                Details
              </div>
              <div className="p-2 text-base font-thin text-gray-500 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-out">
                See last values
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between sm:space-y-3 ">
          <div className="font-thin text-2xl">
            {holdingRegisterDetails.name.length > 15
              ? holdingRegisterDetails.name.slice(0, 10) + "..."
              : holdingRegisterDetails.name}{" "}
          </div>
          <div
            className={`flex space-x-3 items-center font-bold ${novaFlat.className}`}
          >
            <div className="text-4xl font-bold">{value}</div>
            {/* <div className="text-2xl flex flex-col divide-y-2 justify-center items-center">
              {unit ? unit : ""}
            </div> */}
          </div>
        </div>

        <div className="flex justify-center text-white-300 hover:text-blue-400 hover:underline transition-all duration-200 ease-out">
          <Link href={""}>{room}</Link>
        </div>
      </div>

      {holdingRegisterModal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <div className="fixed flex z-10  w-full h-full bg-black opacity-50"></div>
          <div className="flex flex-col relative z-20 bg-white justify-between items-center h-1/5 sm:w-1/3 w-3/4 sm:h-1/5 rounded-md border border-gray-200 shadow-md p-5 ">
            <div className="font-thin text-gray-500">Changer la valuer</div>
            <div>
              <input
                className="font-thin shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="taper valuer ici"
                value={value}
                onChange={(event: any) =>
                  handleChangeHoldingRegisterValue(event)
                }
              />
            </div>
            <div className="flex flex-row  space-x-3 ">
              <button
                onClick={changeHoldingRegisterValue}
                className="font-thin border border-blue-400 rounded-md py-2 p-3 text-blue-500"
              >
                submit
              </button>
              <button
                onClick={() => {
                  setHoldingRegisterModal(false);
                }}
                className="font-thin border border-red-400 rounded-md py-2 p-3 text-red-500"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
