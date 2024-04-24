"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import sky4 from "@/public/skyscapper4.jpeg";

import { VscArrowLeft } from "react-icons/vsc";
import Link from "next/link";

import FloorItem from "./_compenents/floorItem";
import CustomGoogleMap from "@/src/app/[lang]/_components/CustomGoogleMap";
let spaces = [
  {
    id: "1",
    name: "Office 01",

    floorId: "1",
  },
  {
    id: "2",
    name: "Office 01",
    floorId: "2",
  },
  {
    id: "3",
    name: "Office 02",
    floorId: "1",
  },
  {
    id: "4",
    name: "Office 02",
    floorId: "2",
  },
];
let floors = [
  {
    buildingId: "1",
    id: "1",
    name: "Floor01",
    spaces: 2,
    sensors: 12,
    coordinates: [
      ["3.0960821", "36.7300103"],
      ["3.0959346", "36.7300387"],
      ["3.0958735", "36.7298356"],
      ["3.0958413", "36.7298404"],
      ["3.0957964", "36.7296942"],
      ["3.0958259", "36.7296883"],
      ["3.0958145", "36.7296561"],
      ["3.0959185", "36.7296341"],
      ["3.0959527", "36.7297394"],
      ["3.0960593", "36.7297147"],
      ["3.0961089", "36.7298635"],
      ["3.0961431", "36.729856"],
      ["3.0961719", "36.729949"],
      ["3.096068", "36.7299705"],
      ["3.0960821", "36.7300103"],
    ],
    sensorsCoordinates: [
      { lat: 36.729998837619554, lng: 3.0959526984267294 },
      { lat: 36.729854009973465, lng: 3.0958927168409605 },
    ],
  },
  {
    buildingId: "1",
    id: "2",
    name: "Floor02",
    spaces: 2,
    sensors: 20,
    coordinates: [
      ["3.0960821", "36.7300103"],
      ["3.0959346", "36.7300387"],
      ["3.0958735", "36.7298356"],
      ["3.0958413", "36.7298404"],
      ["3.0957964", "36.7296942"],
      ["3.0958259", "36.7296883"],
      ["3.0958145", "36.7296561"],
      ["3.0959185", "36.7296341"],
      ["3.0959527", "36.7297394"],
      ["3.0959862", "36.7297335"],
      ["3.0960821", "36.7300103"],
    ],
    sensorsCoordinates: [{ lat: 36.73000066317639,lng: 3.09599901332207 }],
  },
  {
    buildingId: "1",
    id: "3",
    name: "Floor03",
    spaces: 2,
    sensors: 20,
    coordinates: [
      ["3.0958413", "36.7298404"],
      ["3.0957964", "36.7296942"],
      ["3.0958259", "36.7296883"],
      ["3.0958145", "36.7296561"],
      ["3.0959185", "36.7296341"],
      ["3.0959527", "36.7297394"],
      ["3.0960593", "36.7297147"],
      ["3.0960854", "36.7297894"],
      ["3.0958413", "36.7298404"],
    ],
    sensorsCoordinates: [
      { lat: 36.729738999589316, lng: 3.096051402302045 },
      {lat:36.7296574577311,lng: 3.0958699390235798}
    ],
  },
  {
    buildingId: "1",
    id: "4",
    name: "Floor04",
    spaces: 2,
    sensors: 20,
    coordinates: [
      ["3.0961029", "36.7297109"],
      ["3.0959513", "36.7297286"],
      ["3.0959346", "36.7296437"],
      ["3.0960861", "36.729626"],
      ["3.0961029", "36.7297109"],
    ],
    sensorsCoordinates: [{ lat: 36.72964467877532, lng: 3.096072661598267 }],
  },
];

const BuildingComponent = ({
  id,
  name,
  image,
}: {
  id: string;
  name: string;
  image: StaticImageData;
}) => {
  return (
    <div className="w-full flex flex-row py-4 px-6 space-x-3 items-center border-b border-gray-100 bg-gray-50">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-teltonika-800 ">#{id}</span>
        <span className="text-gray-500">{name}</span>
        {/* Dive Buildings */}
      </div>
    </div>
  );
};

function Page({ params }: { params: { building: string } }) {
  const [currentFloor, setCurrentFloor] = useState({
    coordinates: [],
    sensorsCoordinates:[]
  });
  const handleClickOnFloor = (floor: any) => {
    setCurrentFloor(floor);
  };
  return (
    <div className="flex flex-row h-full overflow-y-hidden">
      <div className="w-1/2 md:w-1/4  bg-white border-r border-r-gray-200 h-full lg:block hidden">
        <Link href={`/oo/buildings`}>
          <div className="flex flex-row space-x-3 items-center py-2 hover:bg-blue-50 px-3 border-b border-b-gray-200">
            <VscArrowLeft className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">Back to buildings list</span>
          </div>
        </Link>

        <BuildingComponent
          id={params.building}
          name="Corporate Dive Building"
          image={sky4}
        />

        <div className="overflow-auto overflow-x-hidden h-[88%]">
          {floors.map((floor) => (
            <div key={floor.id} onClick={() => handleClickOnFloor(floor)}>
              <FloorItem name={floor.name} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-1/2 md:w-3/4 h-full "> */}
      <div className="lg:w-full w-full h-[1030px]  overflow-scroll">
        <CustomGoogleMap
          center={{ lat: 36.72986070369422, lng: 3.095980791068165 }}
          polygon={
            currentFloor?.coordinates &&
            currentFloor?.coordinates?.map((ele) => ({
              lat: parseFloat(ele[1]),
              lng: parseFloat(ele[0]),
            }))
          }
          marks={currentFloor.sensorsCoordinates&& currentFloor.sensorsCoordinates }
          id="dynsight-420610"
          /* marks={[{ lat: 36.72986070369422, lng: 3.095980791068165 }]} */
          options={{
            zoom: 23,
            mapId: "e8f6329658c9128f",
            markerStyle: {
              size: [50, 50],
              iconUrl: "https://www.svgrepo.com/show/493976/air-conditioner.svg",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Page;
