"use client";
import React from "react";
import Navbar from "./navbar";
import SidebarMenu from "./menu/default-menu/sidebarMenu";
import { usePathname } from "next/navigation";
import SidebarMenuTeltonica from "./menu/teltonika-menu/sidebarMenuTeltonica";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import { useRecoilState } from "recoil";
import NavbarTeltonika from "./menu/teltonika-menu/navbarTeltonika";

function LayoutProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const [sidebarMenuState, setMenuState] = useRecoilState(sidebarMenuStateAtom);

  return (
    
      <div className="relative">
        {/* <SidebarMenu /> */}
        {/* <SidebarMenuTeltonica /> */}

        <div
          className={` bg-gray-100 inset-0 flex flex-col w-full h-screen ${
            sidebarMenuState ? "pl-6 lg:pl-80" : "pl-6 lg:pl-20"
          } `}
        >
          <NavbarTeltonika />
          <div className="w-full h-full overflow-y-scroll pt-5">{children}</div>
        </div>
      </div>
    
  );
}

export default LayoutProvider;
