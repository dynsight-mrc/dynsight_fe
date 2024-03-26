"use client";
import { IoReload } from "react-icons/io5";

import React from "react";

import { useRecoilState } from "recoil";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import UserComponent from "./userComponent";
import SidebarMenuProvider from "./sidebarMenuProvider";
import { useSession } from "next-auth/react";
import UserComponentSkeletonLoader from "./userComponentSkeletonLoader";
import UserMenuItemsSkeletonLoader from "./userMenuItemsSkeletonLoader";

function SidebarMenu() {
  const { data: session } = useSession();
  const [sidebarMenuState, setSidebarMenuState] =
    useRecoilState(sidebarMenuStateAtom);
  
  return (
    <div
      className={` h-screen bg-gray-200 z-30 sm:w-72 w-64 border border-r-gray-100 fixed sm:translate-x-0 sm:relative ${
        sidebarMenuState ? "translate-x-0" : "-translate-x-64"
      } transition-all duration-200 ease-out`}
    >
      {session ? (
        <>
          <UserComponent />
          <SidebarMenuProvider />
        </>
      ) : (
        <>
          <UserComponentSkeletonLoader />
          <UserMenuItemsSkeletonLoader />
        </>
      )}
    </div>
  );
}

export default SidebarMenu;
