import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMapAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
type OrganizarionHeaderProps = {
  id:string;
  image: StaticImport;
  title: string;
  reference: string;
  buildingsNumber: string | number;
  BlocsNumber: string | number;
  address: string;
  area: string | number;
};

function OrganizationHeader({
  id,
  image,
  title,
  reference,
  buildingsNumber,
  BlocsNumber,
  address,
  area,
}: OrganizarionHeaderProps) {
  return (
    <div className=" relative w-full h-[300px]  overflow-hidden">
      <Image
        src={image}
        alt="site-cover"
        className="w-full h-full object-cover absolute"
      />
      <div className="relative z-10 h-full  flex flex-col justify-between">
        <div className="flex flex-row space-x-3 items-center justify-end py-5 px-3">
          <Link  href={`/admin/organizations/${id}/parameters/add-building`} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md">
            Ajouter un immeuble
          </Link>
          <Link href={`/admin/organizations/${id}/parameters/update-details`} className="px-4 py-2 text-white bg-blue-500 text- hover:bg-blue-600 rounded-md shadow-md">
            Modifier l'organisation
          </Link>
          <button   className="px-4 py-2 bg-white text-gray-500 rounded-md shadow-md">
            Supprimer
          </button>
        </div>
        <div>
          <div className="flex flex-col items-start px-8 py-5 bg-gradient-to-t from-black from-10%">
            <span className="text-base text-white">#{reference}</span>
            <span className="text-2xl text-white">{title}</span>
          </div>

          <div className="bg-black border-t border-t-white text-white flex flex-row justify-between items-center py-5 px-8">
            <div className="flex flex-row  space-x-5 divide-x ">
              <div className="flex flex-col items-center justify-center pr-5">
                <span className="text-2xl  font-opensans">
                  {buildingsNumber}
                </span>
                <span className="text-lg font-thin ">Immebules</span>
              </div>
              <div className="flex flex-col items-center justify-center px-8">
                <span className="text-2xl  font-opensans">{BlocsNumber}</span>
                <span className="text-lg font-thin ">Espaces</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center space-x-2">
                  <IoLocationSharp className="w-5 h-5 text-blue-400" />
                  <span className="text-base "> {address}</span>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <BiMapAlt className="w-5 h-5 text-blue-400" />

                  <span className="text-base  font-opensans">
                    {area}
                    <sup>2</sup>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationHeader;
