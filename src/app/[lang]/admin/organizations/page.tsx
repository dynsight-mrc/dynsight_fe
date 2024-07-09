import React from "react";
import Table from "../../_components/table/Table";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import OrganizationTableRow from "../../_components/table/OrganizationTableRow";
function page() {
  return (
    <div>
      <Table
        RowComponent={OrganizationTableRow}
        rows={[
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "554",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky2

          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "554",
            buildings: 1,
            manager: "user@dynsight.fr",
            image:sky3
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "354",
            buildings: 2,
            manager: "user@dynsight.fr",
            image:sky
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223",
            buildings: 3,
            manager: "user@dynsight.fr",
            image:sky4
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "223",
            buildings: 1,
            manager: "user@dynsight.fr",
            image:sky3
          },
          {
            name: "1 Corporate Drive",
            type: "---",
            area: "350",
            buildings: 1,
            manager: "user@dynsight.fr",
            image:sky
          },

        
        ]}
        header={["Intitulé", "Type", "Manager", "Nombre d'immeubles", "Superficie totale"]}
        keys={["name", "type",  "manager", "buildings","area"]}
        filters={[
          { key: "organizations", title: "Toutes les organizations" },
          
        ]}
      />
    </div>
  );
}

export default page;
