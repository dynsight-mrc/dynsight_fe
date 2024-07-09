import Image, { StaticImageData } from "next/image";
import React from "react";

function FloorsListHeaderItem({
  reference,
  name,
  image,
}: {
    reference: string;
  name: string;
  image: StaticImageData;
}) {
  return (
    <div className="w-full flex flex-row py-4 px-6 space-x-3 items-center border-b border-gray-100 bg-gray-50">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-teltonika-800 ">#{reference}</span>
        <span className="text-gray-500">{name}</span>
        {/* Dive Buildings */}
      </div>
    </div>
  );
}

export default FloorsListHeaderItem;
