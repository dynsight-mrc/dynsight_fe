import Image, { StaticImageData } from "next/image";
import React from "react";
import sky4 from "@/public/skyscapper4.jpeg";
import { MdLocationPin } from "react-icons/md";

import { VscArrowLeft } from "react-icons/vsc";
import Link from "next/link";
import FloorListItem from "../../_components/floorListItem";

import BuildingSubsections from "./_components/BuildingSubsections";

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
  },
  {
    buildingId: "1",
    id: "2",
    name: "Floor02",
    spaces: 2,
    sensors: 20,
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
  return (
    <div className="flex flex-row h-full overflow-y-auto">
      <div className="w-1/2 md:w-1/4  bg-white border-r border-r-gray-200 h-full lg:block hidden">
        <Link href={`/admin/sites/${params.building}/buildings-list`}>
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
            <FloorListItem
              name={floor.name}
              key={floor.id}
              spaces={spaces.filter((space) => space.floorId === floor.id)}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 md:w-3/4 h-full ">
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
                  <span className="text-teltonika-800 text-xs">
                    #{params.building}
                  </span>
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
            <div>
              <span className="text-2xl">Corporate Dive Building</span>
            </div>
            <div className="flex flex-row justify-between items-center mt-3">
              <div className="flex flex-row divide-x-2">
                <div className="flex flex-col py-3 pl-0 px-14 justify-center items-center ">
                  <span className="text-md text-gray-600 text-4xl">12</span>
                  <span className="text-base font-thin uppercase text-gray-500 ">
                    Floors
                  </span>
                </div>
                <div className="flex flex-col py-3 px-14 justify-center items-center ">
                  <span className="text-md text-gray-600 text-4xl">31</span>
                  <span className="text-base font-thin uppercase text-gray-500 ">
                    Spaces
                  </span>
                </div>
                <div className="flex flex-col py-3 px-14 justify-center items-center ">
                  <span className="text-md text-gray-600 text-4xl">10</span>
                  <span className="text-base font-thin uppercase text-gray-500 ">
                    Other
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex flex-row items-center">
                  <MdLocationPin className="text-teltonika-800 w-5 h-5 " />
                  <span className="text-gray-500">Building name location</span>
                </div>
                <span className="text-gray-400 font-thin font-opensans">
                  450m<sup>2</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-t items-center flex flex-row space-x-5  border-gray-200  bg-white ">
          <div onClick={()=>toggleBuildingSubection("summary")} className="border-b-2 border-b-teltonika-800 h-full py-2 px-3 text-gray-500 uppercase text-sm ">
            Summary
          </div>
          <div onClick={()=>toggleBuildingSubection("identity")} className="h-full text-gray-500 uppercase text-sm py-2 px-3 ">
            Carte d'identité
          </div>
          <div onClick={()=>toggleBuildingSubection("characteristics")} className="h-full text-gray-500 uppercase text-sm py-2 px-3 ">
            Caractéristique
          </div>
          <div onClick={()=>toggleBuildingSubection("activities")} className="h-full text-gray-500 uppercase text-sm py-2 px-3 ">
            Activités spécifiques
          </div>
        </div>

        <div className="h-[74%] overflow-y-auto px-2">
          <div className="flex flex-row space-x-3">
            <div className="w-2/3 mt-3">
              <div className="flex flex-row space-x-2 ">
                <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
                  <TiWeatherPartlySunny className="text-gray-500 w-10 h-10" />
                  <span className="text-gray-500">Weather widget</span>
                </div>
                <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
                  <SlEnergy className="text-gray-500 w-10 h-10" />
                  <span className="text-gray-500">
                    Energy consumption widget
                  </span>
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
              <span className="text-thin text-teltonika-800">
                Opening hours
              </span>
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

          <div className="mt-10 ">
            <div className="w-full bg-white py-3 pl-3">
              <h4 className="text-gray-500 text-xl font-opensans">
                List of floors
              </h4>
            </div>
            <Table
              RowComponent={FloorTableRow}
              rows={floors}
              header={["Name", "Spaces", "Connected Sensors"]}
              keys={["name", "spaces", "sensors"]}
              filters={[{ key: "all", title: "All floors" }]}
            />
          </div>
        </div> */}
        <BuildingSubsections />
      </div>
    </div>
  );
}

export default Page;
