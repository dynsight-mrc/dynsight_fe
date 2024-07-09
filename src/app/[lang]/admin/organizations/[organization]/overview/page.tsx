import Image, { StaticImageData } from "next/image";
import React from "react";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky5 from "@/public/skyscapper5.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineSensors } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdDeviceHub } from "react-icons/md";
import { VscArrowLeft } from "react-icons/vsc";
import Link from "next/link";
import BuildingListItem from "../../_components/buildingListItem";
import { IoLocationSharp } from "react-icons/io5";
import { BiMapAlt } from "react-icons/bi";
import Table from "@/src/app/[lang]/_components/table/Table";
import BuildingTableRow from "@/src/app/[lang]/_components/table/BuildingTableRow";
import Widget from "./_compoenents/Widget";
import WorkingHoursWidget from "./_compoenents/WorkingHoursWidget";
import WeatherWidget from "./_compoenents/WeatherWidget";
import EnergyWidget from "./_compoenents/EnergyWidget";
import OrganizationHeader from "./_compoenents/OrganizationHeader";
import OrganizationBuildingsList from "./_compoenents/BuildingsList/OrganizationBuildingsList";

let buildings = [
  {
    id: "1",
    name: "Corporate Dive Buildings",
    image: sky4,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13,
  },
  {
    id: "2",
    name: "Corporate Swim Buildings",
    image: sky2,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13,
  },
  {
    id: "3",
    name: "Corporate Comercial Buildings",
    image: sky3,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13,
  },
  {
    id: "4",
    name: "Corporate Marketing Buildings",
    image: sky,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13,
  },
  {
    id: "4",
    name: "Corporate Marketing Buildings",
    image: sky,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13,
  },
  {
    id: "4",
    name: "Corporate Marketing Buildings",
    image: sky,
    type: "Residential",
    area: "223554",
    floors: 5,
    sensors: 13,
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


function Page({ params }: { params: { site: string } }) {
  return (
    <div className="flex flex-col md:flex-row h-full ">
      <OrganizationBuildingsList
        title="__title_here__"
        image={sky5}
        reference="12345"
        buildings={buildings}
        floors={floors}
      />
      <div className="w-full lg:w-3/4  h-full  ">
        {/* HEADER IMAGE IBANNER */}
        <OrganizationHeader
          image={sky5}
          title="__title_here__"
          area={150}
          address="__addresse here__"
          reference="12345"
          BlocsNumber={22}
          buildingsNumber={2}
        />
        {/* WIDGETS SECTION */}
        <div className="h-[65%] lg:h-[70%] overflow-auto px-2">
          {/* WIDGETS */}
          <div className="flex flex-col lg:flex-row lg:space-x-3">
            <div className="w-full lg:w-2/3 mt-3">
              <div className="flex flex-row space-x-2 ">
                <WeatherWidget />
                <EnergyWidget />
              </div>
              <div className="flex flex-row justify-between items-center space-x-1 mt-3">
                <Widget
                  title="Equipements"
                  value={10}
                  Icon={MdOutlineSensors}
                />
                <Widget title="Alarms" value={2} Icon={GoBell} />
                <Widget title="Assets" value={22} Icon={MdDeviceHub} />
              </div>
            </div>
            <div className="w-full lg:w-1/3  bg-white rounded-md shadow-sm p-4 mt-3">
              <WorkingHoursWidget />
            </div>
          </div>

          {/* TABLE  */}

          <div className="mt-10">
            <div className="w-full bg-white py-3 pl-3">
              <h4 className="text-gray-500 text-xl font-opensans">
                Liste des immeubles
              </h4>
            </div>
            <Table
              RowComponent={BuildingTableRow}
              rows={buildings}
              header={["Intitulé", "Type", "Étages", "Equipements connectés"]}
              keys={["name", "type", "floors", "sensors"]}
              filters={[{ key: "all", title: "Tout les immeubles" }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
