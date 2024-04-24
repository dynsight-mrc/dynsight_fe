import React from "react";
import Table from "../../_components/table/Table";
import SpaceTableRow from "../../_components/table/SpaceTableRow";



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
function page() {
  return (
    <div>
      <Table
        RowComponent={SpaceTableRow}
        rows={spaces}
        header={[
          "Name",
          "Site",
          "Building",
          "Floor",
          "area",
          "Connected Devices",
        ]}
        keys={["name", "site", "building", "floor", "sensors", "area"]}
        filters={[
          { key: "all", title: "All spaces" },
          
        ]}
      />
    </div>
  );
}

export default page;
