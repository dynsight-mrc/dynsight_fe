import React from "react";
import BuildingTableRow from "@/src/app/[lang]/_components/table/BuildingTableRow";
import Table from "@/src/app/[lang]/_components/table/Table";

import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { CustomSession } from "@common/types/session.type";
import { getManyBuildingsWithFloorsDetails } from "@common/buildings/api/get-buildings";
import { updateBuildingWithFloorsAndRoomsStats } from "@common/buildings/helper-functions";


async function page({ params }: { params: { organization: string } }) {
  const session = (await getServerSession(authOptions) )as CustomSession;

  const buildings = await getManyBuildingsWithFloorsDetails(session,[{"name":"organizationId","value":params.organization}])
  
  
  let buildingWithFloorAndStats = buildings.map(updateBuildingWithFloorsAndRoomsStats)  

  return (
    <div>
      <Table
        RowComponent={BuildingTableRow}
        rows={buildingWithFloorAndStats}
        header={["Intitulé", "Type",  "Étages",'Blocs',"Année de construction", "Superficie"]}
        keys={["name", "type", "numberOfFloors","numberOfRooms","constructionYear", "surface"]}
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
