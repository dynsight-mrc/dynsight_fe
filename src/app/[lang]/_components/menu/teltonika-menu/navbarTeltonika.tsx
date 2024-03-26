"use client";
import Image from "next/image";
import React from "react";
import DynsightLogo from "@/public/dynsight-logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { IoMdClose } from "react-icons/io";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";

function NavbarTeltonika() {
  const [sidebarMenuState, setSidebarMenuState] =
    useRecoilState(sidebarMenuStateAtom);

  const closeSidbarMenu = () => {
    setSidebarMenuState(false);
  };
  const openSidbarMenu = () => {
    setSidebarMenuState(true);
  };

  return (
    <div className="h-16 w-full ">
      <div className="mr-4 h-full flex justify-between  flex-row  items-center border-b  border-gray-200 ">
        <div className="flex flex-row items-center space-x-2">
          <Image
            onClick={() => setSidebarMenuState((pre) => !pre)}
            className="w-8 h-8 sm:w-10 sm:h-10"
            src={DynsightLogo}
            alt="soft-icon"
          />

          <div className="flex flex-row items-center space-x-2">
          <span className="tracking-widest font-oswald text-2xl text-teltonika-900">
            DYNISIGHT
          </span>
          <span  className="text-teltonika-800">|</span>
          <span className="text-teltonika-800 font-opensans">Building Mangement System</span>
          </div>
        </div>

        <div>avatar</div>
      </div>
    </div>
  );
}

export default NavbarTeltonika;
