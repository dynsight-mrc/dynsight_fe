import React from "react";
import Table from "../../_components/table/Table";
import TableRow from "../../_components/table/TableRow";

let buildingsEnergy = [
  {
    building: "building 1",
    area: "1234 m2",
    consumption: "1234",
    perm2: 2312,
    variation: "-",
    dataCompleteness: "-",
  },
  {
    building: "building 1",
    area: "1234 m2",
    consumption: "1234",
    perm2: 2312,
    variation: "-",
    dataCompleteness: "-",
  },
  {
    building: "building 1",
    area: "1234 m2",
    consumption: "1234",
    perm2: 2312,
    variation: "-",
    dataCompleteness: "-",
  },
  {
    building: "building 1",
    area: "1234 m2",
    consumption: "1234",
    perm2: 2312,
    variation: "-",
    dataCompleteness: "-",
  },
];

function Widget({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white shadow-md w-64 h-36 border border-gray-200 rounded-md p-3 flex flex-col items-center">
      <span className="text-gray-600 text-xl">{title}</span>
      <span className="text-gray-600 text-4xl mt-5">{value}</span>
    </div>
  );
}

function WidgetManyFields({
  title,
  items,
}: {
  title: string;
  items: { key: string; value: string }[];
}) {
  return (
    <div className="bg-white shadow-md w-64 h-36 border border-gray-200 rounded-md p-3 flex flex-col items-center ">
      <span className="text-gray-600 text-xl">{title}</span>

      {items.map((ele,index) => (
        <div key={index} className="w-full flex flex-row items-center justify-between">
          <span className="text-gray-400 text-lg">{ele.key}</span>
          <span className="text-gray-600 text-base">{ele.value}</span>
        </div>
      ))}
    </div>
  );
}

function page() {
  return (
    <div className="p-3 font-opensans">
      <div className="bg-red-100 rounded-md border border-gray-200 p-3">
        <li>
          this page will contain statistics and graphs regarding the energy
          consumption of all buildings
        </li>
        <li>it will contain also a table for details in each building</li>
      </div>

      <div className="flex flex-row gap-10 py-3">
        <Widget title="Buildings" value="2" />
        <WidgetManyFields
          title="Total Area"
          items={[
            { key: "Total", value: "-" },
            { key: "Total", value: "-" },
            { key: "Total", value: "-" },
          ]}
        />
        <WidgetManyFields
          title="Consumption"
          items={[
            { key: "Total", value: "-" },
            { key: "Total", value: "-" },
            { key: "Total", value: "-" },
          ]}
        />
        <Widget title="Variation" value="2" />
        <Widget title="Evolution" value="2" />
      </div>

      <div>
        <Table
          RowComponent={TableRow}
          rows={buildingsEnergy}
          header={[
            "Building Name",
            "Area",
            "Consumption",
            "Per m2",
            "Variation",
            "Data completness",
          ]}
          keys={[
            "building",
            "area",
            "consumption",
            "perm2",
            "variation",
            "dataCompleteness",
          ]}
          filters={[{ key: "all", title: "All buildings" }]}
        />
      </div>
    </div>
  );
}

export default page;
