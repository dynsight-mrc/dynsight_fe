import React from "react";
import Table from "../../_components/table/Table";
import DeviceTableRow from "../../_components/table/DeviceTableRow";

function page() {
  return (
    <div>
      <Table
        RowComponent={DeviceTableRow}
        rows={[
          {
            name: "AC - samsung",
            category: "AC",
            protocol:"MQTT",
            building: "Corporate Commercial Group",

            floor: "Floor01",
            room: "12",
            status: "active",
          },
          {
            name: "Temperature - box1",
            category: "Sensor",
            protocol:"MQTT",
            building: "Corporate Commercial Group",

            floor: "Floor02",
            room: "1",
            status: "active",
          },
          {
            name: "Humidity - box1",
            category: "Sensor",
            protocol:"Modbus",
            building: "Corporate Commercial Group",

            floor: "Floor02",
            room: "1",
            status: "active",
          },
          {
            name: "Heater - LG",
            category: "Heater",
            protocol:"Modbus",
            building: "Corporate Commercial Group",

            floor: "Floor02",
            room: "10",
            status: "active",
          },
        ]}
        header={["Name", "Category","Protocol", "Building", "Floor", "Room", "Status"]}
        keys={["name", "category", "protocol","building", "floor", "room", "status"]}
        filters={[
          { key: "all", title: "All Devices" },
          { key: "category", title: "Category" },

          { key: "type", title: "Type" },

          { key: "building", title: "Building" },
        ]}
      />
    </div>
  );
}

export default page;
