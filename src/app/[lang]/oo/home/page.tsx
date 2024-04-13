import { getServerSession } from "next-auth";
import React from "react";
import { CustomSession } from "../../types/session.type";
import { authOptions } from "../../../api/auth/authOptions";
import { Locale } from "@/src/i18n-config";
import map from "@/public/map.png";
import Image from "next/image";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";

import sky4 from "@/public/skyscapper4.jpeg";

async function Home() {
  let session = (await getServerSession(authOptions)) as CustomSession;
  let {
    user: { personalInformation },
  } = session;

  return (
    <div className="text-gray-500">
      <div className="flex flex-row space-x-3">
        <div className="w-2/3 sm:w-3/4 h-[400px]">
          <Image className="w-full h-full object-cover" src={map} alt="map" />
        </div>
        <div className="w-1/2 sm:w-1/4 bg-white rounded-md shadow-md flex flex-col space-y-4 justify-between items-center">
          <div className="p-5">
            <span>Site overview</span>
          </div>
          <div className="flex p-5 flex-col justify-center items-center">
            <div className="flex items-center justify-center text-2xl font-opensans font-semibold w-20 h-20 bg-yellow-100 text-yellow-400 rounded-full">
              <span>4</span>
            </div>
            <span>Buildings</span>
            <span className="underline text-blue-600">add building</span>
          </div>
          <div className="flex flex-row border-t border-gray-100 w-full justify-between divide-x-2">
            <div className="flex flex-col p-5 w-1/2 items-center ">
              <span className="text-gray-300">Buildings</span>
              <span className="text-gray-600">4</span>
            </div>
            <div className="flex flex-col p-5 w-1/2 items-center ">
              <span className="text-gray-300">Totoal Area</span>
              <span className="text-gray-600">12km2</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-5">
          
          <span className="text-gray-700">All Buildings <span className="text-red-500">(4)</span></span>
        </div>

        <div>
          <div className="flex font-opensans flex-row bg-gray-100 border-t border-gray-200 p-2 w-full">
            <span className="w-1/12"></span>
            <div className="w-11/12 flex ">
              <span className="w-1/5 uppercase">Site Name</span>
              <span className="w-1/5 uppercase">Type</span>
              <span className="w-1/5 uppercase">Managed by</span>
              <span className="w-1/5 uppercase">Floors</span>
              <span className="w-1/5 uppercase">Total area</span>
            </div>
          </div>
          <div className="flex items-center bg-white font-opensans flex-row py-6 border-t border-gray-200 p-2 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={sky}
                  alt=""
                />
              </div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/5 ">100N central ave</span>
              <span className="w-1/5 ">Commercial</span>
              <span className="w-1/5 ">.</span>
              <span className="w-1/5 ">8</span>
              <span className="w-1/5 ">1.5 km2</span>
            </div>
          </div>

          <div className="flex items-center bg-white font-opensans flex-row py-6 border-t border-gray-200 p-2 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={sky2}
                  alt=""
                />
              </div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/5 ">102N central ave</span>
              <span className="w-1/5 ">Commercial</span>
              <span className="w-1/5 ">.</span>
              <span className="w-1/5 ">8</span>
              <span className="w-1/5 ">0.9 km2</span>
            </div>
          </div>

          <div className="flex items-center bg-white font-opensans flex-row py-6 border-t border-gray-200 p-2 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={sky3}
                  alt=""
                />
              </div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/5 ">100N central ave</span>
              <span className="w-1/5 ">Public</span>
              <span className="w-1/5 ">.</span>
              <span className="w-1/5 ">8</span>
              <span className="w-1/5 ">1.5 km2</span>
            </div>
          </div>

          <div className="flex items-center bg-white font-opensans flex-row py-6 border-t border-gray-200 p-2 w-full">
            <span className="w-1/12 ">
              <div className="w-14 h-14 rounded-md overflow-hidden">
                <Image
                  className="object-cover w-full h-full"
                  src={sky4}
                  alt=""
                />
              </div>
            </span>
            <div className="w-11/12 flex ">
              <span className="w-1/5 ">Corporate Dive Building</span>
              <span className="w-1/5 ">Private</span>
              <span className="w-1/5 ">.</span>
              <span className="w-1/5 ">4</span>
              <span className="w-1/5 ">0.9 km2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
