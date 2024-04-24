import React from "react";
import Table from "../../_components/table/Table";
import TableRow from "../../_components/table/TableRow";

let accoutabilityItems = [
  {
    time: "12 fe 2024",
    user: "user@dynsight.fe",
    building: "building 01",
    type: "device",
    action: "create",
    element: "AC 01",
  },
  {
    time: "12 fe 2024",
    user: "user@dynsight.fe",
    building: "building 01",
    type: "device",
    action: "create",
    element: "AC 01",
  },
  {
    time: "12 fe 2024",
    user: "user@dynsight.fe",
    building: "building 01",
    type: "device",
    action: "create",
    element: "AC 01",
  },
];

function page() {
  return (
    <div>
      <div className="bg-red-100 rounded-md border border-gray-200 p-3">
        <li>
          this page will contain actions commited by the different users of the account in ALL THE BUILDINGS
        </li>
        <li>we need to specify the format of an action :actions type, elements type</li>
      </div>

      <Table
        RowComponent={TableRow}
        rows={accoutabilityItems}
        header={[
          "Time",
          "User",
          "Building",
          "Type",
          "Action",
          "Modified element",
        ]}
        keys={["time", "user", "building", "type", "action", "element"]}
        filters={[
          { key: "all", title: "All users" },
          { key: "buildings", title: "Building" },
        ]}
      />
    </div>
  );
}

export default page;
