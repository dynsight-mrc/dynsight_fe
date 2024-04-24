import { BsDoorOpen } from "react-icons/bs";

import { BsChevronDown } from "react-icons/bs";

export default function SpaceListItem({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <div className="hover:bg-blue-50 cursor-pointer w-full flex flex-row justify-between  space-x-3 items-center  border-b border-gray-200">
      <div className="flex flex-row items-center p-2 pl-8  w-full space-x-2 ">
        <BsDoorOpen className="text-gray-500 w-5 h-5" />
        <span className="text-gray-500">{name}</span>
      </div>
      <div className="pr-4">
        <BsChevronDown className="text-gray-500 w-3 h-3" />
      </div>
    </div>
  );
}
