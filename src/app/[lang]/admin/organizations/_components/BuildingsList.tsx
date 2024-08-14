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
import { useSession } from "next-auth/react";
import { getBuildingsByOrganizationId } from "../_api/get-buildings";


function BuildingsList() {
  const { data: session } = useSession();
  
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
        rows={buildingsQuery.data}
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
