"use client";
import React from "react";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import { useRecoilState } from "recoil";
import NavbarTeltonika from "@/src/app/[lang]/_components/menu/teltonika-menu/navbarTeltonika"
import SidebarMenuTeltonica from "../../_components/menu/teltonika-menu/sidebarMenuTeltonica";
import { menu } from "./menuItems";

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
        <SidebarMenuTeltonica items={menu} />

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
