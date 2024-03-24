"use client";
import React from "react";
import Navbar from "./navbar";
import SidebarMenu from "./menu/sidebarMenu";
import { usePathname } from "next/navigation";

function LayoutProvider({ children,lang }: { children: React.ReactNode,lang:string }) {
  let path = usePathname();
  
  return (
    <>
      {path === (`/${lang}/signin` || '_error')  ? (
        <>{children}</>
      ) : (
        <>
          <SidebarMenu />

          <div className=" flex flex-col w-full ">
            <Navbar />

            <div className="w-full h-full p-4 sm:pt-10 sm:pl-5 overflow-y-scroll">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LayoutProvider;
