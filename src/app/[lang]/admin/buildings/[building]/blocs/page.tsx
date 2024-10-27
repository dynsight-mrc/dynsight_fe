import { authOptions } from "@/src/app/api/auth/authOptions";

import { getServerSession } from "next-auth";
import React from "react";
import SpaceTableRow from "@/src/app/[lang]/_components/table/SpaceTableRow";
import Table from "@/src/app/[lang]/_components/table/Table";
import { getRooms } from "@common/rooms/api/get-rooms";

async function page({ params }: { params: { building: string } }) {
  let session = await getServerSession(authOptions);
  let blocs = await getRooms(session, { details: true }, [
    { name: "buildingId", value: params.building },
  ]);
  console.log(blocs);

  return (
    <div>
      <Table
        RowComponent={SpaceTableRow}
        rows={blocs}
        header={["Intitulé", "Étage","Immeuble","Type",  "Superficie","Équipements",]}
        keys={["name", "floor.name",'building.name', "type", "surface","sensors",]}
        filters={[{ key: "all", title: "All spaces" }]}
      />
    </div>
  );
}

export default page;
