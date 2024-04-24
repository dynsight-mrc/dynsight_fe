import Table from "@/src/app/[lang]/_components/table/Table";
import TableRow from "@/src/app/[lang]/_components/table/TableRow";
import { CardInfo } from "@/src/app/[lang]/admin/buildings/[building]/overview/_components/CardInfo";
import React from "react";

function page() {
  return (
    <div className="overflow-y-auto h-[100%]">
      <div className="flex flex-col space-y-3  mb-5">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>Relations</h3>
        </div>
        <div className="h-40  bg-gray-300 m-3"></div>
      </div>
      <div className="flex flex-col space-y-3  mb-5">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>Schéma relationel</h3>
        </div>
        <div className="h-40  bg-gray-300 m-3"></div>
      </div>

      <div className="flex flex-col space-y-3  m-3">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>Alarmes</h3>
        </div>
        <Table
          RowComponent={TableRow}
          rows={[
            {
              startTime: "14:00:05",
              endTime: "14:01:05",
              site: "-----",
              floor: "Floor01",
              zone: "zone-1",
              device: "humidity N1",
              description: "event occured at night",
            },
            {
              startTime: "14:00:05",
              endTime: "14:01:05",
              site: "-----",
              floor: "Floor01",
              zone: "zone-1",
              device: "humidity N1",
              description: "event occured at night",
            },
            {
              startTime: "14:00:05",
              endTime: "14:01:05",
              site: "-----",
              floor: "Floor01",
              zone: "zone-1",
              device: "humidity N1",
              description: "event occured at night",
            },
            {
              startTime: "14:00:05",
              endTime: "14:01:05",
              site: "-----",
              floor: "Floor01",
              zone: "zone-1",
              device: "humidity N1",
              description: "event occured at night",
            },
          ]}
          header={[
            "Start time",
            "End time",
            "Site",
            "Etage",
            "Zone",
            "Equipement",
            "Description",
          ]}
          keys={[
            "startTime",
            "endTime",
            "site",
            "floor",
            "zone",
            "device",
            "description",
          ]}
          filters={[{ key: "all", title: "All Devices" }]}
        />
      </div>
      <div className="flex flex-col justify-between space-y-3  m-3">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5 ">
          <h3>Lecture / Écriture</h3>
        </div>
        <div className="px-2 flex gap-1 flex-row flex-wrap">
          <CardInfo
            title="Lecture"
            items={[
              { title: "Property 1", value: "-" },
              { title: "Property 2", value: "-" },
              { title: "Property 3", value: "-" },
              { title: "Property 4", value: "-" },
            ]}
          />
          <CardInfo
            title="Ecriture"
            items={[
              { title: "Property 1", value: "-" },
              { title: "Property 2", value: "-" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
