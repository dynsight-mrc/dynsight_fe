import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import { AddressDto } from "@/src/app/[lang]/_common/address/dtos/address.dto";

type BuildingHeaderProps = {
  image: StaticImageData;
  reference: string;
  organizationName: string;
  buildingName: string;
  devicesNumber: string | number;
  blocsNumber: string | number;
  floorsNumber: string | number;
  address: AddressDto;
  area: string | number;
  buildingId:string;
};
function BuildingHeader({
  image,
  reference,
  organizationName,
  buildingName,
  devicesNumber,
  blocsNumber,
  floorsNumber,
  address,
  area,
  buildingId
}: BuildingHeaderProps) {
  return (
    <div className="flex flex-row lg:p-5 p-2 lg:space-x-5 bg-white ">
      {/* image container */}
      <div className="w-1/6 lg:inline-block hidden">
        <div className="w-20 h-20 lg:w-40 lg:h-40 m-auto rounded-full overflow-hidden">
          <Image src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* info banner */}
      <div className="w-full lg:w-5/6  ">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between lg:items-start">
            {/* buttons and navigation */}
            <div className="flex flex-row justify-between p-3 lg:p-0 lg:flex-col">
              <div className="font-opensans text-sm">
                <span className="text-base  text-gray-500">{organizationName} /</span>
                <span className="text-base text-gray-300"> {buildingName}</span>
              </div>
              <div>
                <span className="text-teltonika-800 text-xs">#{reference}</span>
              </div>
            </div>
            {/* building details  */}
            <div className="flex p-3 lg:p-0 space-x-3">
              <Link  href={`/admin/buildings/${buildingId}/floors/add`} className="px-3 py-1 hover:bg-blue-600 transition-all duration-300 ease-out rounded-sm text-white text-sm bg-blue-500 font-opensans uppercase">
                Ajouter un étage
              </Link>
              <Link  href={`/admin/buildings/${buildingId}/parameters`} className="px-3 py-1 hover:bg-blue-600 transition-all duration-300 ease-out rounded-sm text-white text-sm bg-blue-500 font-opensans uppercase">
                Modifier Informations
              </Link>
              <Link href={'#'} className="px-3 py-1 rounded-sm text-white text-sm bg-red-500 font-opensans uppercase">
                Supprimer
              </Link>
            </div>
          </div>
          <div className="p-3 lg:p-0 flex justify-center lg:inline-block">
            <span className="text-2xl">{buildingName}</span>
          </div>
        </div>
        <div className="flex  flex-col-reverse lg:flex-row justify-between items-center mt-3">
          <div className="flex flex-row divide-x-2 border-t mt-3 lg:mt-0 border-t-gray-200 lg:border-0">
            <div className="flex flex-col py-3 lg:pl-0 px-10 justify-center items-center ">
              <span className="text-md text-gray-600 text-4xl">
                {floorsNumber}
              </span>
              <span className="text-base font-thin uppercase text-gray-500 ">
                Étages
              </span>
            </div>
            <div className="flex flex-col py-3 px-10 justify-center items-center ">
              <span className="text-md text-gray-600 text-4xl">
                {blocsNumber}
              </span>
              <span className="text-base font-thin uppercase text-gray-500 ">
                Espaces
              </span>
            </div>
            <div className="flex flex-col py-3 px-10 justify-center items-center ">
              <span className="text-md text-gray-600 text-4xl">
                {devicesNumber}
              </span>
              <span className="text-base font-thin uppercase text-gray-500 ">
                Équipements
              </span>
            </div>
          </div>
          <div className="w-full  lg:p-0 px-10 flex flex-row justify-between lg:justify-center lg:flex-col items-end">
            <div className="flex flex-row items-center">
              <MdLocationPin className="text-teltonika-800 w-5 h-5 " />
              <span className="text-gray-500">{address.streetNumber +" , "+ address.streetName+" , "+address.streetAddress+ " , "+address.city}</span>
            </div>
            <span className="text-gray-400 font-thin font-opensans">
              {area}m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildingHeader;
