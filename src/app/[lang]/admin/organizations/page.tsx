import React from "react";
import Table from "../../_components/table/Table";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import OrganizationTableRow from "../../_components/table/OrganizationTableRow";
import { getOrganizations } from "./_api/get-organizations";
import { CustomSession } from "../../types/session.type";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { ReadOrganizationOverviewDto } from "./dto/read-organization-overview.dto";

async function page() {
  const session = (await getServerSession(authOptions)) as CustomSession;

  let organizations: ReadOrganizationOverviewDto[] =
    await getOrganizations(session);
  //let jokes = await getJoke();

  return (
    <div>
      {/* {jokes.value} */}
      <Table
        RowComponent={OrganizationTableRow}
        rows={organizations!}
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
