import React from "react";
import BuildingTableRow from "@/src/app/[lang]/_components/table/BuildingTableRow";
import Table from "@/src/app/[lang]/_components/table/Table";

import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import sky4 from "@/public/skyscapper4.jpeg";
import { getBuildingsByOrganizationId } from "../../_api/getBuildingsByOrganizationId";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";


async function page({ params }: { params: { organization: string } }) {
  const session = await getServerSession(authOptions);

  const buildings = await getBuildingsByOrganizationId(
    session,
    params.organization
  );

  console.log(buildings);
  
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

export default page;
