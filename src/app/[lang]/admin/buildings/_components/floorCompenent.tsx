import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PiStackSimpleLight } from "react-icons/pi";

export default function FloorComponent({
  name,
  spacesMenuOpen,
  toggleSpacesMenu,
}: {
  name: string;
  spacesMenuOpen: boolean;
  toggleSpacesMenu: () => void;
}) {
  return (
    <div
      onClick={toggleSpacesMenu}
      className={`w-full flex flex-row justify-between p-3 px-1 pr-4 space-x-3 items-center ${
        spacesMenuOpen ? "bg-blue-100" : "bg-white"
      } hover:bg-blue-100 cursor-pointer `}
    >
      <div className="pl-3 flex flex-row items-center space-x-3">
        <div className="w-8 h-8 rounded-full overflow-hidden ">
          <PiStackSimpleLight className="w-full h-full object-cover" />
        </div>
        <span className="text-gray-500">
          {/* Corporate Dive Buildings */}
          {name}
        </span>
      </div>
      {spacesMenuOpen ? (
        <BsChevronUp className="text-gray-500 w-3 h-3" />
      ) : (
        <BsChevronDown className="text-gray-500 w-3 h-3" />
      )}
    </div>
  );
}
