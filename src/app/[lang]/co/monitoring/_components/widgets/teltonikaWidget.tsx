import React, { ReactNode } from "react";
import { IconType } from "react-icons";


function TeltonikaWidget({
  Icon,
  propertyName,
  value,
  children
}: {
  Icon: IconType;
  propertyName: string;
  value: string;
  children:ReactNode
}) {
  return (
    <div className="border border-gray-200 rounded-md bg-white w-full  py-5 px-3 text-gray-700">
      {/* title */}
      <div className="flex flex-row justify-between items-center border-b border-gray-700 pb-2">
        <span className="font-oswald text-lg">
          {propertyName.toUpperCase()}
        </span>
        <div className="flex flex-row items-center space-x-2">
          <div>
            <Icon className="w-5 h-5 text-gray-500" />
          </div>
          <span className="font-opensans font-thin">{value}</span>
        </div>
      </div>
      {/* information */}
      {children}
    </div>
  );
}

export default TeltonikaWidget;
