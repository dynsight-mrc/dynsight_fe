import Image, { StaticImageData } from "next/image";
import React from "react";
import sky4 from "@/public/skyscapper4.jpeg";

import BuildingSubsections from "./_components/BuildingDetailsCards/BuildingSubsections";
import BuildingHeader from "./_components/BuildingHeader";
import BuildingFloorsList from "./_components/floorsList/BuildingFloorsList";
import { getBuildingById } from "../../_api/getBuilding";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { ReadBuildingDto } from "../../dto/ReadBuildingDto";

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

async function Page({ params }: { params: { building: string } }) {
  const session = await getServerSession(authOptions)
  const building :ReadBuildingDto = await getBuildingById(session,params.building)
  
  
  
  if(!building){
    return <div>... loading building</div>
  }
  return (
    <div className="flex flex-col md:flex-row   h-full overflow-hidden">
      {/* floors list */}

      <BuildingFloorsList
        buildingId={params.building}
        reference={building.reference}
        buildingName={building.name}
        image={sky4}
        floors={building.floors}
        spaces={building.floors.map(floor=>floor.rooms)}
      />
      {/* building details */}
      <div className="w-full lg:w-3/4  h-full ">
        {/* building Header */}

        <BuildingHeader
          address={building.address}
          area={building.surface}
          reference={building.reference}
          organizationName={"OrganizationName"}
          buildingName={building.name}
          image={sky4}
          blocsNumber={building.floors.map(floor=>floor.rooms).length}
          floorsNumber={building.floors.length}
          devicesNumber={20}
        />
        <div className="lg:h-full h-[75%]  overflow-auto px-2">
          
          <BuildingSubsections building = {building} />
        </div>
      </div>
    </div>
  );
}

export default Page;
