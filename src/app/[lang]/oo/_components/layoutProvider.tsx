"use client";
import React from "react";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import { useRecoilState } from "recoil";
import NavbarTeltonika from "@/src/app/[lang]/_components/menu/teltonika-menu/navbarTeltonika";
import SidebarMenuTeltonica from "../../_components/menu/teltonika-menu/sidebarMenuTeltonica";

import { menu } from "./menuItems";
import { usePathname } from "next/navigation";
import { SidebarMenuItems } from "./sidebarMenus/sidebarMenuItems";
import { BuildingSidebarMenuItems } from "./sidebarMenus/buildingMenuItems";
import { DeviceMenuItems } from "./sidebarMenus/deviceMenuItems";

const sidebarMenuMapper :Record<string,any> = {
  home:SidebarMenuItems,
  buildings:BuildingSidebarMenuItems,
  devices:DeviceMenuItems
}


function LayoutProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const [sidebarMenuState, setMenuState] = useRecoilState(sidebarMenuStateAtom);
  const path = usePathname()
  
  const currentSegment =path.split("/")[7] ? path.split("/")[5] : path.split("/")[3]
  const currentPage =path.split("/")[7] ? path.split("/")[7]: path.split("/")[5]  

  return (
    <div className="relative">
    {/* <SidebarMenu /> */}
    <SidebarMenuTeltonica items={currentPage ? sidebarMenuMapper[currentSegment]:SidebarMenuItems} />
    {/* <SidebarMenuTeltonica items={menu} /> */}

    <div
     className={` bg-gray-100 inset-0 flex flex-col w-full h-screen ${
      sidebarMenuState ? "pl-6 lg:pl-72" : "pl-0 lg:pl-12"
    } `}
    >
      <NavbarTeltonika />
      <div className="w-full h-full pt-16  ">{children}</div>
    </div>
  </div>
  );
}

export default LayoutProvider;
