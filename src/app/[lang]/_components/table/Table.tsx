"use client";
import React, { ElementType, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableFilters from "./TableFilters";

type TableFilterItem = { key: string; title: string };
type TableParams = {
  header: string[];
  rows: {}[];
  keys: string[];
  filters: TableFilterItem[];
  RowComponent: ElementType;
};

function Table({ header, rows, keys, filters, RowComponent }: TableParams) {
  const [select, setSelect] = useState(10);
  const [pages, setPages] = useState(Math.ceil(rows.length / select));

  const [currentPage, setCurrentPage] = useState(0);

  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const handleFilterType = (row: any) => {
      if (filterType === "all") {
        return true;
      }

      return row.type === filterType;
    };
    setPages(Math.ceil(rows.filter(handleFilterType).length / select));
    setCurrentPage(0);
  }, [rows, select,filterType]);

  const changePageHandler = (value: any) => {
    setCurrentPage(value);
  };
  const changeToNextPageHandler = () => {
    setCurrentPage((preValue) => {
      if (currentPage + 1 === pages) return preValue;
      return preValue + 1;
    });
  };
  const changeToPreviousPageHandler = () => {
    setCurrentPage((preValue) => {
      if (currentPage === 0) {
        return preValue;
      }
      return preValue - 1;
    });
  };

  return (
    <div className="bg-white shadow-md rounded-md  ">
      <TableFilters
        filters={filters}
        changeFilterType={setFilterType}
        total={rows.length}
        pages={pages}
        changePage={changePageHandler}
        changeToPreviousPage={changeToPreviousPageHandler}
        changeToNextPage={changeToNextPageHandler}
        currentPage={currentPage}
        select={select}
      />
      <TableHeader columns={header} />

      <div className="">
        {rows
          /* .filter(handleFilterType)
          .sort(handleFilterOrder) */
          .slice(currentPage * select, select + currentPage * select)

          .map((row, index) => (
            <RowComponent key={index} keys={keys} row={row} />
          ))}
      </div>
    </div>
  );
}

export default Table;
