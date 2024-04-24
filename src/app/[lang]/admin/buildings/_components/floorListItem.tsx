'use client'
import { BsChevronDown } from "react-icons/bs";
import { PiStackSimpleLight } from "react-icons/pi";
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
  /*   <div className="hover:bg-blue-50 cursor-pointer w-full flex flex-row justify-between  space-x-3 items-center  border-b border-gray-200">
      <div className="flex flex-row items-center p-2 pl-8  w-full space-x-2 ">
        <PiStackSimpleLight className="text-gray-500 w-5 h-5" />
        <span className="text-gray-500">{name}</span>
      </div>
      <div className="pr-4">
        <BsChevronDown className="text-gray-500 w-3 h-3" />
      </div>
    </div> */
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
