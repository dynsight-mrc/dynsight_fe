import React from "react";
import Table from "../../_components/table/Table";
import BuildingTableRow from "../../_components/table/BuildingTableRow";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
function page() {
  return (
    <div>
      <Table
        RowComponent={BuildingTableRow}
        rows={[
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky2

          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky3
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky4
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky3
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky
          },

        
        ]}
        header={["Site Name", "Type", "Manager", "buildings", "Total Area"]}
        keys={["name", "type",  "manager", "buildings","area"]}
        filters={[
          { key: "sites", title: "All Sites" },
          
        ]}
      />
    </div>
  );
}

export default page;
