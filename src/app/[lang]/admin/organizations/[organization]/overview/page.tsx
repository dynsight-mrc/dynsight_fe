import React from "react";
import sky5 from "@/public/skyscapper5.jpg";

import { MdOutlineSensors } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdDeviceHub } from "react-icons/md";

import Table from "@/src/app/[lang]/_components/table/Table";
import BuildingTableRow from "@/src/app/[lang]/_components/table/BuildingTableRow";
import Widget from "./_compoenents/Widget";
import WorkingHoursWidget from "./_compoenents/WorkingHoursWidget";
import WeatherWidget from "./_compoenents/WeatherWidget";
import EnergyWidget from "./_compoenents/EnergyWidget";
import OrganizationHeader from "./_compoenents/OrganizationHeader";
import OrganizationBuildingsList from "./_compoenents/BuildingsList/OrganizationBuildingsList";
import { getOrganizationById } from "../../_api/getOrganization";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { CustomSession } from "@/src/app/[lang]/types/session.type";
import { ReadOrganizationDto } from "../../dto/read-organization-details.dto";

const calcaulateRoomsNumber = (organization: ReadOrganizationDto) => {
  let counter = 0;
  organization.buildings.forEach((building) => {
    building.floors.forEach((floor) => {
      counter += floor.rooms.length;
    });
  });

  return counter;
};
async function Page({ params }: { params: { organization: string } }) {
  let session = await getServerSession(authOptions);

  const organization: ReadOrganizationDto | undefined =
    await getOrganizationById(session, params.organization);
    
  if (!organization) {
    return <div>Organization non trouvée !</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-full ">
      <OrganizationBuildingsList
        title={organization.name}
        image={sky5}
        reference={organization.reference ?? ""}
        buildings={organization.buildings}
      />
      <div className="w-full lg:w-3/4  h-full  ">
        {/* HEADER IMAGE IBANNER */}
        <OrganizationHeader
          id={organization.id}
          image={sky5}
          title={organization.name}
          area={organization.buildings.reduce(
            (acc: number, val: any) => acc + val.surface,
            0
          )}
          address="__addresse here__"
          reference={organization.reference}
          BlocsNumber={calcaulateRoomsNumber(organization)}
          buildingsNumber={organization.buildings.length}
        />
        {/* WIDGETS SECTION */}
        <div className="h-[65%] lg:h-[65%] overflow-auto px-2">
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
              rows={organization.buildings.map((building: any) => ({
                ...building,
                floors: building.floors.length,
              }))}
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
