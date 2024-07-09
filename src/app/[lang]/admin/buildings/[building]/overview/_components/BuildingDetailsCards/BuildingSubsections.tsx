"use client";
import React, { ReactElement, useState } from "react";
import BuildingOverview from "./BuildingOverview";
import BuildingIdentity from "./BuildingIdentity";
import BuildingCharacteristics from "./BuildingCharacteristics";
import BuildingSpecialActivities from "./BuildingSpecialActivities";

const subsectionsMapper: Record<string, React.ElementType> = {
  summary: BuildingOverview,
  identity: BuildingIdentity,
  characteristics: BuildingCharacteristics,
  activities: BuildingSpecialActivities,
};

const subsectionMenuItems: {itemName:string,itemKey:string}[] = [
  { itemName: "Summary", itemKey: "summary" },
  { itemKey: "identity", itemName: " Carte d'identité" },
  {itemKey:"characteristics",itemName:"Caractéristique"},
  {itemKey:"activities",itemName:"Activités spécifiques"}
];

function BuildingSubsectionMenuItem({
  currentSubsection,
  menuItemName,
  menuItemKey,
  toggleBuildingSubection,
}: {
  currentSubsection: string;
  menuItemName: string;
  menuItemKey: string;
  toggleBuildingSubection: (item: string) => void;
}) {
  return (
    <div
      onClick={() => toggleBuildingSubection(menuItemKey)}
      className={`${
        currentSubsection === menuItemKey
          ? "border-b-2 border-b-teltonika-800"
          : "border-b-2 border-transparent"
      } cursor-pointer h-full text-gray-500 uppercase text-sm py-2 px-3 `}
    >
      {menuItemName}
    </div>
  );
}

function BuildingSubsections() {
  const [subsection, setSubsection] = useState<string>("summary");
  const toggleBuildingSubection = (subsection: string) => {
    setSubsection(subsection);
  };
  let CurrentSubsection = subsectionsMapper[subsection];
  return (
    <>
      <div className="border-t items-center flex flex-row  lg:space-x-5  border-gray-200  bg-white ">
        {subsectionMenuItems.map((ele,index)=><BuildingSubsectionMenuItem
          key={index}
          currentSubsection={subsection}
          menuItemName={ele.itemName}
          menuItemKey={ele.itemKey}
          toggleBuildingSubection={toggleBuildingSubection}
        />)}
       
      </div>

      <CurrentSubsection />
    </>
  );
}

export default BuildingSubsections;
