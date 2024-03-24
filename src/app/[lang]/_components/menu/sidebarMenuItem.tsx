"use client"
import { sidbarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { useRecoilState } from "recoil";

interface SidebarMenuItem {
  name: string;
  href: string;
  Icon: IconType;
}

function SidebarMenuItem({ name, href, Icon }: SidebarMenuItem) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [sidbarMenuState, setSidbarMenuState] =
    useRecoilState(sidbarMenuStateAtom);

  const navigateToPage = () => {
    router.push(href);
    setSidbarMenuState(false);
  };
  return (
    <div
      onClick={navigateToPage}
      className={` cursor-pointer m-1 my-4  p-2 flex flex-row items-center group hover:bg-white rounded-md ${
        pathname === href && "bg-white"
      } `}
    >
      {/* <VscSettings className="mr-3 w-5 h-5 text-gray-400 " /> */}
      <Icon className="mr-3 w-5 h-5 text-gray-400 " />
      <span className="text-sm text-gray-600 group-hover:text-gray-700">
        {name}
      </span>
    </div>
  );
}

export default SidebarMenuItem;
