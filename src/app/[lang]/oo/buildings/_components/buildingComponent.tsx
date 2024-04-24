import Image, { StaticImageData } from "next/image";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function BuildingComponent({
  name,
  image,
  floorsMenuOpen,
  toggleFloorsMenu,
}: {
  name: string;
  image: StaticImageData;
  floorsMenuOpen: boolean;
  toggleFloorsMenu: () => void;
}) {
  return (
    <div
      onClick={toggleFloorsMenu}
      className={`w-full flex flex-row justify-between p-3 px-1 pr-4 space-x-3 items-center ${
        floorsMenuOpen ? "bg-blue-100" : "bg-white"
      } hover:bg-blue-100 cursor-pointer `}
    >
      <div className="pl-3 flex flex-row items-center space-x-3">
        <div className="w-8 h-8 rounded-full overflow-hidden ">
          <Image src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <span className="text-gray-500">
          {/* Corporate Dive Buildings */}
          {name}
        </span>
      </div>
      {floorsMenuOpen ? (
        <BsChevronUp className="text-gray-500 w-3 h-3" />
      ) : (
        <BsChevronDown className="text-gray-500 w-3 h-3" />
      )}
    </div>
  );
}
