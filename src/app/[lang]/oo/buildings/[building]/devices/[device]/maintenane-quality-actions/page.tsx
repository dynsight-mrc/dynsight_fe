import Table from "@/src/app/[lang]/_components/table/Table";
import TableRow from "@/src/app/[lang]/_components/table/TableRow";
import { CardInfo } from "@/src/app/[lang]/admin/buildings/[building]/overview/_components/CardInfo";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col space-y-3  mb-5">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>État</h3>
        </div>
        <div className="h-40  bg-gray-300 m-3"></div>
      </div>
      <div className="flex flex-col space-y-3  mb-5">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>Plan d actions: Maintenance / Travaux</h3>
        </div>
        <div className="h-40  bg-gray-300 m-3"></div>
      </div>
      <div className="flex flex-col space-y-3  mb-5">
        <div className="mt-3 mb-1 text-2xl font-opensans text-blue-500 ml-5">
          <h3>Controle de qualité</h3>
        </div>
        <div className="h-40  bg-gray-300 m-3"></div>
      </div>
      
    </div>
  );
}

export default page;