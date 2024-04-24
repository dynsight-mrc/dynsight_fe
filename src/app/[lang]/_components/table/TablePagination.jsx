import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function TablePagination({
  total,
  pages,
  changePage,
  currentPage,
  select,
  changeToNextPage,
  changeToPreviousPage,
}) {

  return (
    <div className="flex flex-row justify-between items-center">
      {/* footer */}
      <div className="text-gray-500 py-3 text-xs sm:text-base ">
        {Math.min(select + currentPage * select, total)}/{total}
      </div>
      <div className="text-gray-500 py-3 flex flex-row items-center space-x-1 pl-3">
        
        <BsChevronLeft
          onClick={changeToPreviousPage}
          className="text-gray-500 w-5 h-5 hover:scale-110 hover:text-teltonika-800 cursor-pointer"
        />
        <BsChevronRight
          onClick={changeToNextPage}
          className="text-gray-500 w-5 h-5 hover:scale-110 hover:text-teltonika-800 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default TablePagination;
