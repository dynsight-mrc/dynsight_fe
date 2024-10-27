import Image, { StaticImageData } from "next/image";
import React from "react";
import sky4 from "@/public/skyscapper4.jpeg";

import BuildingSubsections from "./_components/BuildingDetailsCards/BuildingSubsections";
import BuildingHeader from "./_components/BuildingHeader";
import BuildingFloorsList from "./_components/floorsList/BuildingFloorsList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { CustomSession } from "@common/types/session.type";
import { ReadBuildingWithFloorsDetailsDto } from "@common/buildings/dtos/read-buildings.dto";
import { getBuildingWithFloors } from "../../_api/get-buildings";




async function Page({ params }: { params: { building: string } }) {
  const session =( await getServerSession(authOptions))as CustomSession
  const building :ReadBuildingWithFloorsDetailsDto = await getBuildingWithFloors(session,params.building)
   
  
  return (
    <div className="flex flex-col md:flex-row   h-full overflow-hidden">
      {/* floors list */}

      <BuildingFloorsList
        organizationId={building.organization.id}
        buildingId={params.building}
        reference={building.reference}
        buildingName={building.name}
        image={sky4}
        floors={building.floors}
        rooms={building.floors.map(floor=>floor.rooms).flat()}
      />
      {/* building details */}
      <div className="w-full lg:w-3/4  h-full ">
        {/* building Header */}

        <BuildingHeader
          address={building.address}
          area={building.surface}
          reference={building.reference}
          organizationName={building.organization.name}
          buildingId={building.id}
          buildingName={building.name}
          image={sky4}
          blocsNumber={building.floors.map(floor=>floor.rooms).flat().length}
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
