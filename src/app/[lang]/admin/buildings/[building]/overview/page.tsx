import Image, { StaticImageData } from "next/image";
import React from "react";
import sky4 from "@/public/skyscapper4.jpeg";

import BuildingSubsections from "./_components/BuildingDetailsCards/BuildingSubsections";
import BuildingHeader from "./_components/BuildingHeader";
import BuildingFloorsList from "./_components/floorsList/BuildingFloorsList";
import { getBuildingById } from "../../_api/get-building";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { ReadBuildingDto } from "../../dto/ReadBuildingDto";




async function Page({ params }: { params: { building: string } }) {
  const session = await getServerSession(authOptions)
  const building :ReadBuildingDto = await getBuildingById(session,params.building)
  
  console.log(building);
  
  
  if(!building){
    return <div>... loading building</div>
  }
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
        spaces={building.floors.map(floor=>floor.rooms)}
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
