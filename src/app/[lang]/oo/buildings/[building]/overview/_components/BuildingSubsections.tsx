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
      <div className="border-t items-center flex flex-row space-x-5  border-gray-200  bg-white ">
        {subsectionMenuItems.map(ele=><BuildingSubsectionMenuItem
        key={ele.itemKey}
          currentSubsection={subsection}
          menuItemName={ele.itemName}
          menuItemKey={ele.itemKey}
          toggleBuildingSubection={toggleBuildingSubection}
        />)}
       {/*  <BuildingSubsectionMenuItem
          currentSubsection={subsection}
          menuItemName="test"
          menuItemKey="test"
          toggleBuildingSubection={toggleBuildingSubection}
        />
        <div
          onClick={() => toggleBuildingSubection("identity")}
          className="h-full text-gray-500 uppercase text-sm py-2 px-3 "
        >
          Carte d'identité
        </div>
        <div
          onClick={() => toggleBuildingSubection("characteristics")}
          className="h-full text-gray-500 uppercase text-sm py-2 px-3 "
        >
          Caractéristique
        </div>
        <div
          onClick={() => toggleBuildingSubection("activities")}
          className="h-full text-gray-500 uppercase text-sm py-2 px-3 "
        >
          Activités spécifiques
        </div> */}
      </div>

      <CurrentSubsection />
    </>
  );
}

export default BuildingSubsections;
