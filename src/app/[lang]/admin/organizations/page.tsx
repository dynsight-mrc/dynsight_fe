import React from "react";
import Table from "../../_components/table/Table";
import OrganizationTableRow from "../../_components/table/OrganizationTableRow";

import { CustomSession } from "../../_common/types/session.type";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { updateOrganizationWithBuildingStats } from "./helper-functions/functions";

import { getOrganizations } from "@common/organizations/api/get-organizations";
import { ReadOrganizationWithDetailsDto } from "@common/organizations/dtos/read-organizations.dto";

async function page() {
  const session = (await getServerSession(authOptions)) as CustomSession;

  let organizations: ReadOrganizationWithDetailsDto[] =
    await getOrganizations(session,{details:true});

  let organisationsWithBuildingsStats = organizations.map(
    updateOrganizationWithBuildingStats
  );

  return (
    <div>
      {/* {jokes.value} */}
      <Table
        RowComponent={OrganizationTableRow}
        rows={organisationsWithBuildingsStats!}
        header={[
          "Intitulé",
          "Type",
          "Manager",
          "Nombre d'immeubles",
          "Superficie totale",
        ]}
        keys={["name", "type", "owner", "numberOfBuildings", "totalSurface"]}
        filters={[{ key: "organizations", title: "Toutes les organizations" }]}
      />
    </div>
  );
}

export default page;
