import Link from "next/link";
import React from "react";
import { VscArrowLeft } from "react-icons/vsc";
import FloorsListHeaderItem from "./FloorsListHeaderItem";
import { StaticImageData } from "next/image";
import FloorListItem from "@/src/app/[lang]/admin/buildings/_components/floorListItem";
type BuildingFloorsListProps = {
  image: StaticImageData;
  reference: string;
  buildingName:string;
  buildingId: string;
  organizationId:string;
  floors: any[];
  spaces: any[];
};
function BuildingFloorsList({
  image,
  reference,
  buildingId,
  buildingName,
  floors,
  spaces,
  organizationId,
}: BuildingFloorsListProps) {
  
  return (
    <div className="w-1/2 md:w-1/4  bg-white border-r border-r-gray-200 h-full lg:block hidden">
      <Link href={`/admin/organizations/${organizationId}/buildings-list`}>
        <div className="flex flex-row space-x-3 items-center py-2 hover:bg-blue-50 px-3 border-b border-b-gray-200">
          <VscArrowLeft className="w-5 h-5 text-gray-500" />
          <span className="text-gray-500">
            Revenir à la liste des immeubles
          </span>
        </div>
      </Link>

      <FloorsListHeaderItem
        reference={reference}
        name={buildingName}
        image={image}
      />

      <div className="overflow-auto overflow-x-hidden h-[88%]">
        {floors.map((floor) => (
          <FloorListItem
            name={floor.name}
            key={floor.id}
            spaces={spaces.flat().filter((space) => space.floorId === floor.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BuildingFloorsList;
