'use client'

import FloorComponent from "./floorCompenent";
import { useState } from "react";
import SpaceListItem from "./spaceListItem";

export default function FloorListItem({
  name,
  spaces,
}: {
  name: string;
  spaces: any[];
}) {
  const [spacesMenuIsOpen, setSpacesMenuIsOpen] = useState(true)
  const handleToggleSpacessMenu = ()=>{
    setSpacesMenuIsOpen(preValue=>!preValue)
}
  return (

    <div className="border-b border-gray-100">
      <FloorComponent toggleSpacesMenu ={handleToggleSpacessMenu} spacesMenuOpen ={spacesMenuIsOpen} name={name} />
      <div
        className={`${
          spacesMenuIsOpen ? "block" : "hidden "
        } transition-all duration-300 ease-out`}
      >
        {spaces.map((space) => (
          <SpaceListItem name={space.name} key={space.id} link="" />
        ))}
      </div>
    </div>
  );
}
