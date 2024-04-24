import React from "react";
import Table from "../../_components/table/Table";
import sky from "@/public/skyscapper.png"
import sky2 from "@/public/skyscapper2.jpg"
import sky3 from "@/public/skyscapper3.jpeg"
import sky4 from "@/public/skyscapper4.jpeg"
import BuildingTableRow from "../_components/tables/BuildingTableRow";

let buildings = [
  

  {
    name: "1 Corporate Drive",
    site:"Group Driving Association",

    type: "Commercial",
    area: "223554",
    floors: 2,
    image:sky4,
    manager: "user@dynsight.fr",
  },
  {
    name: "1 Corporate Drive",
    site:"Group Driving Association 2",

    type: "Commercial",
    area: "223554",
    floors: 4,
    image:sky3,
    manager: "user@dynsight.fr",
  },
  {
    name: "1 Corporate Drive",
    site:"Group Driving Association 4" ,

    type: "Industrial",
    area: "223554",
    floors: 2,
    image:sky2,
    manager: "user@dynsight.fr",
  },

  {
    name: "1 Corporate Drive",
    site:"Group Driving Association",

    type: "Residential",
    area: "223554",
    floors: 5,
    image:sky,
    manager: "user@dynsight.fr",
  },
  
  
]
function page() {
  return (
    <div>
      <Table
        RowComponent={BuildingTableRow}
        rows={buildings}
        header={["Name","Site", "Type", "Manager", "Floors", "Area"]}
        keys={["name","site", "type",  "manager", "floors","area"]}
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
