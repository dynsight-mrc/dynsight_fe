import React from "react";
import Table from "../../_components/table/Table";
import SpaceTableRow from "../../_components/table/SpaceTableRow";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { ReadRoomWithDetails } from "./dto/read-rooms.dto";
import { getRooms } from "@common/rooms/api/get-rooms";


async function page() {
  let session =  await getServerSession(authOptions)
  let rooms : ReadRoomWithDetails[] =await getRooms(session,{details:true})
    
  return (
    <div>
      <Table
        RowComponent={SpaceTableRow}
        rows={rooms}
        header={[
          "Intitulé", "Organisation", "Immeuble", "Étage", "Équipements","Superficie"
        ]}
        keys={["name", "organization.name", "building.name", "floor.name", "sensors", "surface"]}
        filters={[
          { key: "all", title: "All spaces" },
          
        ]}
      />
    </div>
  );
}

export default page;
