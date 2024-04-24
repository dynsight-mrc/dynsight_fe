import React, { useState } from "react";
import { randomUUID } from "crypto";
import TableFooter from "./TablePagination";
import { FiSearch } from "react-icons/fi";
import TablePagination from "./TablePagination";
function FilterTypeElement({ name, eventType, fcn, selectedEventType }) {
  return (
    <div
      className={`cursor-pointer  py-1 p-2 text-xs sm:text-base  bg-gray-100 rounded-2xl px-5 hover:text-blue-500 ${
        selectedEventType === eventType
          ? "bg-white border border-gray-300 text-blue-500"
          : "text-gray-500"
      }`}
      onClick={fcn}
    >
      {name}
    </div>
  );
}

function TableFilters({
  changeFilterType,
  pages,
  filters,
  total,
  changePage,
  changeToNextPage,
  changeToPreviousPage,
  currentPage,
  select,
}) {
  const [selectedEventType, setSelectedEventType] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState("desc");

  const handleChangeFilterType = (type) => {
    setSelectedEventType(type);
    changeFilterType(type);
  };

  return (
    <div className="px-3 flex flex-col sm:flex-row justify-between items-center py-1 border-b border-b-gray-200">
      <div className="flex flex-row space-x-1 sm:space-x-1 border-gray-200 ">
        {filters.map((filter, index) => (
          <FilterTypeElement
            key={index}
            name={filter.title}
            eventType={filter.key}
            fcn={() => handleChangeFilterType(filter.key)}
            selectedEventType={selectedEventType}
          />
        ))}
      </div>

      <div className="flex flex-row items-center space-x-3 mr-3 divide-x-2">
        <TablePagination
          total={total}
          pages={pages}
          changePage={changePage}
          changeToNextPage = {changeToNextPage}
          changeToPreviousPage = {changeToPreviousPage}
          currentPage={currentPage}
          select={select}
        />

        <div className="pl-3">
        <FiSearch className="text-gray-500 w-5 h-5"/>
        </div>
        {/* <FilterOrderElement
          name={"Ascendant"}
          order={"asc"}
          fcn={() => handleChangeSelectOrder("asc")}
          selectedOrder={selectedOrder}
        />
      
        <FilterOrderElement
          name={"Déscendant"}
          order={"desc"}
          fcn={() => handleChangeSelectOrder("desc")}
          selectedOrder={selectedOrder}
        /> */}
      </div>
    </div>
  );
}

export default TableFilters;
