import React from "react";
import Table from "../../_components/table/Table";
import SpaceTableRow from "../../_components/table/SpaceTableRow";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/authOptions";
import { ReadBlocOverview } from "./dto/read-bloc.dto";
import { getBlocsOverview } from "./_api/getBlocs";



let spaces = [
  {
    name: "Office01",
    site: "Group Driving Association 1",
    building: "Corporate driving",
    area: "22",

    floor: "Floor01",
    sensors: 3,
  },
  {
    name: "Office02",
    site: "Group Driving Association 1",
    building: "Corporate driving",
    area: "5",

    floor: "Floor01",
    sensors: 2,
  },
  {
    name: "Office03",
    site: "Group Driving Association 1",
    building: "Corporate driving",
    area: "5",

    floor: "Floor02",
    sensors: 1,
  },
];
async function page() {
  let session =  await getServerSession(authOptions)
  let blocs : ReadBlocOverview[] =await getBlocsOverview(session)
    console.log(blocs);
    
  return (
    <div>
      <Table
        RowComponent={SpaceTableRow}
        rows={blocs}
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
