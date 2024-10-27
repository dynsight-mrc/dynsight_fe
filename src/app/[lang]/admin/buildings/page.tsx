import React from "react";
import Table from "../../_components/table/Table";
import BuildingTableRow from "../../_components/table/BuildingTableRow";

import { authOptions } from "@/src/app/api/auth/authOptions";
import { getServerSession } from "next-auth";
import { CustomSession } from "@common/types/session.type";
import { getManyBuildingsWithFloorsDetails } from "@common/buildings/api/get-buildings";
import { updateBuildingWithFloorsAndRoomsStats } from "@common/buildings/helper-functions";
import { ReadBuildingWithFloorsDetailsDto } from "@common/buildings/dtos/read-buildings.dto";


async function page() {
  let session =  (await getServerSession(authOptions))as CustomSession
  let buildings : ReadBuildingWithFloorsDetailsDto[] =await getManyBuildingsWithFloorsDetails(session)  
 
  let buildingWithFloorAndStats = buildings.map(updateBuildingWithFloorsAndRoomsStats)
  
  return (
    <div>
      <Table
        RowComponent={BuildingTableRow}
        rows={buildingWithFloorAndStats}
        header={["Intitulé","Organisation", "Type", "Propriétaire", "Étages","Blocs", "Superfice"]}
        keys={["name","organization.name", "type",  "organization.owner", "numberOfFloors","numberOfRooms","surface"]}
        filters={[
          { key: "all", title: "All buildings" },
          { key: "commercial", title: "Commercial" },
          { key: "residential", title: "Residential" },
          { key: "indutrial", title: "Industrial" },

          { key: "hospital", title: "Hospital" },

          { key: "hotel", title: "Hotel" },
        ]}
      />
    </div>
  );
}

export default page;
