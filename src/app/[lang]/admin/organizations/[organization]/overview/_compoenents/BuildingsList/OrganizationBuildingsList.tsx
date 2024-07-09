import Link from "next/link";
import React from "react";
import { VscArrowLeft } from "react-icons/vsc";
import OrganizationListHeaderItem from "./OrganizationListHeaderItem";
import { StaticImageData } from "next/image";
import BuildingListItem from "./buildingListItem";
type OrganizationBuildingsLIstProps = {
  title: string;
  image: StaticImageData;
  reference: string;
  buildings: any[];
  floors: any[];
};
function OrganizationBuildingsList({
  title,
  image,
  reference,
  buildings,
  floors,
}: OrganizationBuildingsLIstProps) {
  return (
    <div className="w-1/2 md:w-1/4  bg-white border-r border-r-gray-200 h-full lg:block hidden">
      <Link href="/admin/organizations">
        <div className="flex flex-row space-x-3 items-center py-2 hover:bg-blue-50 px-3 border-b border-b-gray-200">
          <VscArrowLeft className="w-5 h-5 text-gray-500" />
          <span className="text-gray-500">
            Revenir à la liste des organisations
          </span>
        </div>
      </Link>

      <OrganizationListHeaderItem
        reference={reference}
        name={title}
        image={image}
      />
      <div className="overflow-auto overflow-x-hidden h-[88%]">
        {buildings.map((building) => (
          <BuildingListItem
            name={building.name}
            key={building.id}
            image={building.image}
            floors={floors.filter((floor) => floor.buildingId === building.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default OrganizationBuildingsList;
