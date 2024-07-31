"use client"
import BuildingTableRow from "@/src/app/[lang]/_components/table/BuildingTableRow";
import Table from "@/src/app/[lang]/_components/table/Table";

import { useParams } from "next/navigation";
import React from "react";

import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import sky4 from "@/public/skyscapper4.jpeg";
import { useQuery } from "@tanstack/react-query";
import { getOrganizationById } from "../_api/getOrganization";
import { useSession } from "next-auth/react";
import { CustomSession } from "../../../types/session.type";
import { getBuildingsByOrganizationId } from "../_api/getBuildingsByOrganizationId";

let buildings = [
  {
    name: "1 Corporate Drive",
    type: "Residential",
    area: "235",
    floors: 5,
    image: sky,
    manager: "user@dynsight.fr",
  },
  {
    name: "1 Corporate Drive",
    type: "Industrial",
    area: "355",
    floors: 1,
    image: sky2,

    manager: "user@dynsight.fr",
  },
  {
    name: "1 Corporate Drive",
    type: "Residential",
    area: "254",
    floors: 5,
    image: sky3,
    manager: "user@dynsight.fr",
  },
  {
    name: "1 Corporate Drive",
    type: "Hospital",
    area: "223",
    floors: 2,
    image: sky4,

    manager: "user@dynsight.fr",
  },
];
function BuildingsList() {
  const { data: session } = useSession();

  session;
  let params = useParams<{ organization: string; lang: string }>();

  const buildingsQuery = useQuery({
    queryKey: ["buildings", { organization: params.organization }],
    queryFn: () =>
      getBuildingsByOrganizationId( session, params.organization ),
  });
  if (buildingsQuery.isLoading) {
    console.log("loading");
    
    return <div>Loading ...</div>;
  }
  if(buildingsQuery.isSuccess){
    console.log("success");
    
    console.log(buildingsQuery.data);
    
  }
  return (
    <div>
      <Table
        RowComponent={BuildingTableRow}
        rows={buildings}
        header={["Intitulé", "Type", "Manager", "Étages", "Superficie"]}
        keys={["name", "type", "manager", "floors", "area"]}
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

export default BuildingsList;
