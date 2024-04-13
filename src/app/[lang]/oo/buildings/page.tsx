import Image from "next/image";
import React from "react";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import { PiStackSimpleLight } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineSensors } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdDeviceHub } from "react-icons/md";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
function Page() {
  return (
    <div className="flex flex-row space-x-2">
      <div className="w-1/2 md:w-1/5  bg-white">
        <div className="w-full flex flex-row p-3 space-x-3 items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src={sky} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-teltonika-800 ">#23342343</span>
            <span className="text-gray-500">Dive Buildings</span>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-row justify-between p-3 px-1 pr-4 space-x-3 items-center bg-blue-100">
            <div className="flex flex-row items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden ">
                <Image
                  src={sky4}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-500">Corporate Dive Buildings</span>
            </div>
            <BsChevronDown className="text-gray-500 w-3 h-3" />
          </div>

          <div className="w-full flex flex-row justify-between p-2 px-1 pr-4 space-x-3 items-center  border-b border-gray-200">
          <div className="flex flex-row items-center  pl-10 w-full space-x-2 ">
              <PiStackSimpleLight className="text-gray-500 w-5 h-5" />
              <span className="text-gray-500">Floor 01</span>
            </div>

            <BsChevronDown className="text-gray-500 w-3 h-3" />
          </div>

          <div className="w-full flex flex-row justify-between p-2 px-1 pr-4 space-x-3 items-center  border-b border-gray-200">
          <div className="flex flex-row items-center  pl-10 w-full space-x-2 ">
              <PiStackSimpleLight className="text-gray-500 w-5 h-5" />
              <span className="text-gray-500">Floor 02</span>
            </div>

            <BsChevronDown className="text-gray-500 w-3 h-3" />
          </div>

          <div className="w-full flex flex-row justify-between p-2 px-1 pr-4 space-x-3 items-center  border-b border-gray-200">
          <div className="flex flex-row items-center  pl-10 w-full space-x-2 ">
              <PiStackSimpleLight className="text-gray-500 w-5 h-5" />
              <span className="text-gray-500">Floor 03</span>
            </div>

            <BsChevronDown className="text-gray-500 w-3 h-3" />
          </div>

          <div className="w-full flex flex-row justify-between p-2 px-1 pr-4 space-x-3 items-center  border-b border-gray-200">
            <div className="flex flex-row items-center  pl-10 w-full space-x-2 ">
              <PiStackSimpleLight className="text-gray-500 w-5 h-5" />
              <span className="text-gray-500">Floor 04</span>
            </div>

            <BsChevronDown className="text-gray-500 w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-4/5 h-full ">
        <div className="flex flex-row p-5 space-x-5 bg-white ">
          {/* image container */}
          <div className="w-1/6">
            <div className="w-40 h-40 m-auto rounded-full overflow-hidden">
              <Image src={sky4} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* info banner */}
          <div className="w-5/6 ">
            <div className="flex flex-row justify-between items-start">
              {/* buttons and navigation */}
              <div className="flex flex-col">
                <div className="font-opensans text-sm">
                  <span className="text-gray-500">Site /</span>
                  <span className="text-gray-300"> Building</span>
                </div>
                <div>
                  <span className="text-teltonika-800 text-xs">#2034234</span>
                </div>
              </div>
              {/* building details  */}
              <div className="flex space-x-3">
                <button className="px-3 py-1 rounded-sm text-white text-sm bg-blue-500 font-opensans uppercase">
                  Add
                </button>
                <button className="px-3 py-1 rounded-sm text-white text-sm bg-blue-500 font-opensans uppercase">
                  Change
                </button>
                <button className="px-3 py-1 rounded-sm text-white text-sm bg-red-500 font-opensans uppercase">
                  Delete
                </button>
              </div>
            </div>
            <div><span className="text-2xl">Corporate Dive Building</span></div>
            <div className="flex flex-row justify-between items-center mt-3">
              <div className="flex flex-row divide-x-2">
                <div className="flex flex-col py-3 pl-0 px-14 justify-center items-center ">
                  <span className="text-md text-gray-600 text-4xl">12</span>
                  <span className="text-base font-thin uppercase text-gray-500 ">
                    Floors
                  </span>
                </div>
                <div className="flex flex-col py-3 px-14 justify-center items-center ">
                  <span className="text-md text-gray-600 text-4xl">1</span>
                  <span className="text-base font-thin uppercase text-gray-500 ">
                    Spaces
                  </span>
                </div>
                <div className="flex flex-col py-3 px-14 justify-center items-center ">
                  <span className="text-md text-gray-600 text-4xl">10</span>
                  <span className="text-base font-thin uppercase text-gray-500 ">Other</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex flex-row items-center">
                  <MdLocationPin className="text-teltonika-800 w-5 h-5 " />
                  <span className="text-gray-500">Building name locaion</span>
                </div>
                <span className="text-gray-400 font-thin font-opensans">
                  1KM2
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t items-center flex flex-row space-x-5  border-gray-200  bg-white ">
          <div className="border-b-2 border-b-teltonika-800 h-full py-2 px-3 text-gray-500 uppercase text-sm ">
            Summary
          </div>
          <div className="h-full text-gray-500 uppercase text-sm py-2 px-3 ">
            Other
          </div>
        </div>

        <div className="flex flex-row space-x-3">
          <div className="w-2/3 mt-3">
            <div className="flex flex-row space-x-2 ">
              <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
                <TiWeatherPartlySunny className="text-gray-500 w-10 h-10" />
                <span className="text-gray-500">Weather widget</span>
              </div>
              <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
                <SlEnergy className="text-gray-500 w-10 h-10" />
                <span className="text-gray-500">Energy consumption widget</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center space-x-1 mt-3">
              <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm w-1/3 h-28">
                <MdOutlineSensors className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600 font-opensans  text-4xl">
                  34
                </span>{" "}
                <span className="text-base text-gray-500 font-thin ">
                  Sensors
                </span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm w-1/3 h-28">
                <GoBell className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600 font-opensans  text-4xl">
                  12
                </span>
                <span className="text-base text-gray-500 font-thin ">
                  Alarms
                </span>
              </div>
              <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm w-1/3 h-28">
                <MdDeviceHub className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600 font-opensans  text-4xl">
                  22
                </span>
                <span className="text-base text-gray-500 font-thin ">
                  Assets
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full bg-white rounded-md shadow-sm p-4 mt-3">
            <span className="text-thin text-teltonika-800">Opening hours</span>
            <div className="flex flex-row">
              <div className="w-1/3 flex flex-col text-gray-500 text-thin">
                <span></span>
                <span>Sunday</span>
                <span>Moday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Tuursday</span>
                <span>Friday</span>
              </div>
              <div className="w-2/3 flex flex-col text-gray-600">
                <span>09:00 - 17:00</span>
                <span>09:00 - 17:00</span>

                <span>09:00 - 17:00</span>
                <span>09:00 - 17:00</span>
                <span>09:00 - 17:00</span>
                <span>09:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex font-opensans flex-row bg-gray-100 border-t border-gray-200 p-2 w-full">
            <span className="w-1/12"></span>
            <div className="w-11/12 flex">
              <span className="w-1/3 uppercase">Floor Name</span>
              <span className="w-1/3 uppercase">Max occupancy</span>
              <span className="w-1/3 uppercase">Area</span>
            </div>
          </div>
          <div className="flex items-center bg-white font-opensans flex-row  border-t border-gray-200 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden"></div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/3 ">Floor 01</span>
              <span className="w-1/3 ">4</span>
              <span className="w-1/3 ">.</span>
            </div>
          </div>
          <div className="flex items-center bg-white font-opensans flex-row  border-t border-gray-200 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden"></div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/3 ">Floor 02</span>
              <span className="w-1/3 ">22</span>
              <span className="w-1/3 ">.</span>
            </div>
          </div>

          <div className="flex items-center bg-white font-opensans flex-row  border-t border-gray-200 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden"></div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/3 ">Floor 03</span>
              <span className="w-1/3 ">13</span>
              <span className="w-1/3 ">.</span>
            </div>
          </div>

          <div className="flex items-center bg-white font-opensans flex-row  border-t border-gray-200 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden"></div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/3 ">Floor 04</span>
              <span className="w-1/3 ">10</span>
              <span className="w-1/3 ">.</span>
            </div>
          </div>

          <div className="flex items-center bg-white font-opensans flex-row  border-t border-gray-200 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden"></div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/3 ">Floor 05</span>
              <span className="w-1/3 ">12</span>
              <span className="w-1/3 ">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
