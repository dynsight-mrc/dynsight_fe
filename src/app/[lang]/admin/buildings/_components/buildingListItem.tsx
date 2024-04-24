"use client"
import { StaticImageData } from "next/image";
import { useState } from "react";
import BuildingComponent from "./buildingComponent";
import FloorListItem from "./floorListItem";

export default function BuildingListItem({
  name,
  floors,
  image,
}: {
  name: string;
  floors: any[];
  image: StaticImageData;
}) {
  const [floorsMenuIsOpen, setFloorsMenuIsOpen] = useState(false);
  const handleToggleFloorsMenu = ()=>{
        setFloorsMenuIsOpen(preValue=>!preValue)
  }
  return (
    <div className="border-b border-gray-100">
      <BuildingComponent toggleFloorsMenu ={handleToggleFloorsMenu} floorsMenuOpen ={floorsMenuIsOpen} image={image} name={name} />
      <div
        className={`${
          floorsMenuIsOpen ? "block" : "hidden "
        } transition-all duration-300 ease-out`}
      >
        {floors.map((floor) => (
          <FloorListItem name={floor.name} key={floor.id} spaces={[]}  />
        ))}
      </div>
    </div>
  );
}
