import { CustomSession } from "@/src/app/[lang]/_common/types/session.type";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import { getBuildingWithFloors } from "../../_api/get-buildings";

import BuildingParameters from "./_components/BuildingParameters";

async function page({ params }: { params: { building: string } }) {
  const session = (await getServerSession(authOptions)) as CustomSession;

  const buildingData = await getBuildingWithFloors(session, params.building);

 
  return (
    <div className="lg:p-7 px-2 h-full overflow-auto">
        <BuildingParameters buildingData={buildingData} session={session} building={params.building}  />
    </div>
  );
}

export default page;
