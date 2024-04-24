import React, { useState } from "react";

function TableHeader({ columns }) {
  //let columnsLength = columns.length;
  //let columWidth = `w-1/${columnsLength}`;
  //const [columWidth, setColumnWidth] = useState(`w-1/${columnsLength}`)
  return (
    <div className="bg-white w-full flex flex-row items-center py-2 border-b border-b-gray-200">
      
      <div className="w-full  flex flex-row items-center ">
        {columns.map((column,index) => (
          <div
            key={index}
            className={`text-gray-700  sm:text-base text-xs mx-3 w-full w-1/${columns.length}`}
          >
            {column}
          </div>
        ))}
      </div>

    </div>
  );
}

export default TableHeader;
