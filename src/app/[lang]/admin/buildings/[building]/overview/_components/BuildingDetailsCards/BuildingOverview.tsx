import FloorTableRow from "@/src/app/[lang]/_components/table/FloorTableRow";
import Table from "@/src/app/[lang]/_components/table/Table";
import EnergyWidget from "@/src/app/[lang]/admin/organizations/[organization]/overview/_compoenents/EnergyWidget";
import WeatherWidget from "@/src/app/[lang]/admin/organizations/[organization]/overview/_compoenents/WeatherWidget";
import Widget from "@/src/app/[lang]/admin/organizations/[organization]/overview/_compoenents/Widget";
import WorkingHoursWidget from "@/src/app/[lang]/admin/organizations/[organization]/overview/_compoenents/WorkingHoursWidget";
import React, { useContext } from "react";
import { GoBell } from "react-icons/go";
import { MdDeviceHub, MdOutlineSensors } from "react-icons/md";

import { BuildingContext } from "../../context/BuildingContext";
/* let floors = [
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
  
]; */
function BuildingOverview() {
  const building = useContext(BuildingContext);
  let floors =
    building &&
    building.floors.map((floor) => ({ ...floor, rooms: floor.rooms.length }));
  //const <build</build>ing :ReadBuildingDto = await getBuildingById(session,params.building)
  //let floors = building.floors.map(floor=>({...floor,rooms:floor.rooms.length}))
  return (
    <div className="h-[70%] overflow-auto px-2">
      {/* WIDGETS */}
      <div className="flex flex-col lg:flex-row lg:space-x-3">
        <div className="w-full lg:w-2/3 mt-3">
          <div className="flex flex-row space-x-2 ">
            <WeatherWidget />
            <EnergyWidget />
          </div>
          <div className="flex flex-row justify-between items-center space-x-1 mt-3">
            <Widget title="Equipements" value={10} Icon={MdOutlineSensors} />
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
            Liste des étages
          </h4>
        </div>
        <Table
          RowComponent={FloorTableRow}
          rows={floors!}
          header={["Intitulé", "Numéro", "Blocs"]}
          keys={["name", "number", "rooms"]}
          filters={[{ key: "all", title: "All floors" }]}
        />
      </div>
    </div>
  );
}

export default BuildingOverview;
