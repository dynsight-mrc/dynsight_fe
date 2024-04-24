import Image, { StaticImageData } from "next/image";
import React from "react";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky5 from "@/public/skyscapper5.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import { PiStackSimpleLight } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineSensors } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdDeviceHub } from "react-icons/md";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import { VscArrowLeft } from "react-icons/vsc";
import Link from "next/link";
import BuildingListItem from "../../_components/buildingListItem";
import { IoLocationSharp } from "react-icons/io5";
import { BiMapAlt } from "react-icons/bi";
import Table from "@/src/app/[lang]/_components/table/Table";
import BuildingTableRow from "@/src/app/[lang]/_components/table/BuildingTableRow";

let buildings = [
  {
    id: "1",
    name: "Corporate Dive Buildings",
    image: sky4,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13
  },
  {
    id: "2",
    name: "Corporate Swim Buildings",
    image: sky2,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13
  },
  {
    id: "3",
    name: "Corporate Comercial Buildings",
    image: sky3,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13
  },
  {
    id: "4",
    name: "Corporate Marketing Buildings",
    image: sky,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13
  },
];
let floors = [
  {
    buildingId: "1",
    id: "1",
    name: "Floor01",
  },
  {
    buildingId: "1",
    id: "2",
    name: "Floor02",
  },
  {
    buildingId: "2",
    id: "3",
    name: "Floor01",
  },
  {
    buildingId: "2",
    id: "4",
    name: "Floor02",
  },
  {
    buildingId: "3",
    id: "5",
    name: "Floor01",
  },
  {
    buildingId: "3",
    id: "6",
    name: "Floor02",
  },
  {
    buildingId: "3",
    id: "7",
    name: "Floor03",
  },
  {
    buildingId: "4",
    id: "5",
    name: "Floor01",
  },
  {
    buildingId: "4",
    id: "6",
    name: "Floor02",
  },
  {
    buildingId: "4",
    id: "7",
    name: "Floor03",
  },
];

const SiteComponent = ({
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

function Page({ params }: { params: { site: string } }) {
  return (
    <div className="flex flex-row h-full overflow-y-auto">
      <div className="w-1/2 md:w-1/4  bg-white border-r border-r-gray-200 h-full lg:block hidden">
        <Link href="/admin/sites">
          <div className="flex flex-row space-x-3 items-center py-2 hover:bg-blue-50 px-3 border-b border-b-gray-200">
            <VscArrowLeft className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">Back to list</span>
          </div>
        </Link>

        <SiteComponent id={params.site} name="Dive Buildings" image={sky} />
        <div className="overflow-auto overflow-x-hidden h-[88%]">
          {buildings.map((building) => (
            <BuildingListItem
              name={building.name}
              key={building.id}
              image={building.image}
              floors={floors.filter(
                (floor) => floor.buildingId === building.id
              )}
            />
          ))}
          {/* {buildings.map((building) => (
            <BuildingListItem
              name={building.name}
              key={building.id}
              image={building.image}
              floors={floors.filter(
                (floor) => floor.buildingId === building.id
              )}
            />
          ))}
          {buildings.map((building) => (
            <BuildingListItem
              name={building.name}
              key={building.id}
              image={building.image}
              floors={floors.filter(
                (floor) => floor.buildingId === building.id
              )}
            />
          ))} */}
        </div>
      </div>
      <div className="w-1/2 md:w-3/4 lg:w-full h-full  ">
        {/* HEADER IMAGE IBANNER */}
        <div className=" relative w-full h-[300px] bg-red-400 overflow-hidden">
          <Image
            src={sky5}
            alt="site-cover"
            className="w-full h-full object-cover absolute"
          />
          <div className="relative z-10 h-full  flex flex-col justify-between">
            <div className="flex flex-row space-x-3 items-center justify-end py-5 px-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md">
                Add
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md">
                Modify
              </button>
              <button className="px-4 py-2 bg-white text-gray-500 rounded-md shadow-md">
                Delete
              </button>
            </div>
            <div>
              <div className="flex flex-col items-start px-8 py-5 bg-gradient-to-t from-black from-10%">
                <span className="text-base text-white">#12335346</span>
                <span className="text-2xl text-white">Site Name</span>
              </div>

              <div className="bg-black border-t border-t-white text-white flex flex-row justify-between items-center py-5 px-8">
                <div className="flex flex-row  space-x-5 divide-x ">
                  <div className="flex flex-col items-center justify-center pr-5">
                    <span className="text-2xl  font-opensans">12</span>
                    <span className="text-lg font-thin ">Buildings</span>
                  </div>
                  <div className="flex flex-col items-center justify-center px-8">
                    <span className="text-2xl  font-opensans">59</span>
                    <span className="text-lg font-thin ">Spaces</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center space-x-2">
                      <IoLocationSharp className="w-5 h-5 text-blue-400" />
                      <span className="text-base "> Address here</span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <BiMapAlt className="w-5 h-5 text-blue-400" />

                      <span className="text-base  font-opensans">
                        {" "}
                        950m<sup>2</sup>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WIDGETS SECTION */}
        <div className="h-[70%] overflow-auto px-2">
          {/* WIDGETS */}
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
            <div className="w-1/3  bg-white rounded-md shadow-sm p-4 mt-3">
              <span className="text-thin text-teltonika-800">
                Opening hours
              </span>
              <div className="flex h-full flex-row mt-3">
                <div className="w-1/3 flex flex-col text-gray-500 text-thin">
                  <span></span>
                  <span>Sunday</span>
                  <span>Moday</span>
                  <span>Tuesday</span>
                  <span>Wednesday</span>
                  <span>Thursday</span>
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

          {/* TABLE  */}
          

          <div className="mt-10">
            <div className="w-full bg-white py-3 pl-3">
              <h4 className="text-gray-500 text-xl font-opensans">
                List of buildings
              </h4>
            </div>
            <Table
              RowComponent={BuildingTableRow}
              rows={buildings}
              header={[
                "Name",
                "Type",
                "Floors",
                "Total Area",
                "Connected Sensors",
              ]}
              keys={["name", "type", "floors", "area", "sensors"]}
              filters={[{ key: "all", title: "All buildings" }]}
            />

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
