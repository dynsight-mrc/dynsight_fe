import React from "react";

function UserMenuItemsSkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className=" h-8 bg-gray-400 m-1 my-4  p-2 flex flex-row items-center rounded-md ">
        {/* <VscSettings className="mr-3 w-5 h-5 text-gray-400 " /> */}
        <span className="text-sm text-gray-600 group-hover:text-gray-700"></span>
      </div>
      <div className=" h-8 bg-gray-400 m-1 my-4  p-2 flex flex-row items-center rounded-md ">
        {/* <VscSettings className="mr-3 w-5 h-5 text-gray-400 " /> */}
        <span className="text-sm text-gray-600 group-hover:text-gray-700"></span>
      </div>
      <div className=" h-8 bg-gray-400 m-1 my-4  p-2 flex flex-row items-center rounded-md ">
        {/* <VscSettings className="mr-3 w-5 h-5 text-gray-400 " /> */}
        <span className="text-sm text-gray-600 group-hover:text-gray-700"></span>
      </div>
    </div>
  );
}

export default UserMenuItemsSkeletonLoader;
