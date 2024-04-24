import React, { useState } from "react";
import Vayyar from "@/images/vayyar.png";
import Image from "next/image";
import { VscTrash } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { useRecoilState } from "recoil";
import { deviceSidebarMenuAtom } from "@/atoms/deviceSidebarMenuAtom";
import { deviceDataAtom } from "@/atoms/deviceDataAtom";
import { useRouter } from "next/router";

function AlertTableRow({ row, keys }) {
  const router = useRouter();
  const [deviceSidebarMenuState, setDeviceSidebarMenuState] = useRecoilState(
    deviceSidebarMenuAtom
  );
  const [deviceData, setDeviceData] = useRecoilState(deviceDataAtom);

  const eventCreator = (row) => {
    const options = {
      timeZone: "Europe/Paris",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const eventType = {
      fall: "Chute Confirmée",
      suspectedProlongedPresence: "Présence Prolongé Présumée",
      fake:"Fausse Alerte",
      simulation:"Test"
    };

    const eventTypeTag = {
      fall: (
        <span className="bg-red-500 shadow-md p-1 rounded-md text-white">
          {eventType[row.type]}
        </span>
      ),
      suspectedProlongedPresence: (
        <span className="bg-blue-500 shadow-md p-1 rounded-md text-white">
          {eventType[row.type]}
        </span>
      ),
      fake: (
        <span className="bg-yellow-500 shadow-md p-1 rounded-md text-white">
          {eventType[row.type]}
        </span>
      ),
      simulation: (
        <span className="bg-yellow-500 shadow-md p-1 rounded-md text-white">
          {eventType[row.type]}
        </span>
      ),
    };
    return {
      ...row,
      device: (
        <div className="flex flex-row items-center space-x-2">
          <div className="w-7 h-7">
            <Image src={Vayyar} alt="logo" />
          </div>
          <span> {row.device}</span>
        </div>
      ),
      timestamp: new Date(row.timestamp).toLocaleTimeString("fr-FR", options),
      endTimestamp: new Date(row.endTimestamp).toLocaleTimeString(
        "fr-FR",
        options
      ),
      type: eventTypeTag[row.type],
    };
  };

  const event = eventCreator(row);
  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <div className="bg-white flex flex-row items-center py-3 border-b border-gray-100 hover:bg-gray-100">
      <span className="mr-3">
        <input type="checkbox" name="" id="" />
      </span>
      <div className="flex w-full flex-row items-center ">
        {keys.map((key, index) => {
          return key === "actions" ? (
            <div
              className={`mx-3 text-xs sm:text-lg  text-gray-600 w-full w-1/${keys.length} flex flex-row items-center space-x-3`}
              key={index}
            >
              <div className="relative group " onClick={goToHomePage}>
                <VscEye
                  textAnchor="yes"
                  className="cursor-pointer w-7 h-7 text-blue-500 hover:scale-110 transition-all duration-300 ease-out"
                />
                <span className="bg-black rounded-md text-white absolute -top-4 left-5 hidden group-hover:inline-block transition-all duration-300 ease-out opacity-70 px-1">
                  Détails
                </span>
              </div>
          
            </div>
          ) : (
            <div
              key={index}
              className={`mx-3 text-xs sm:text-lg  text-gray-600 w-full w-1/${keys.length}`}
            >
              {event[key]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AlertTableRow;
