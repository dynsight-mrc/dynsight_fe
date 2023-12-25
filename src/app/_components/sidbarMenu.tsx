"use client"
import React, { useEffect, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

import SidbarMenuItem from "./sidbarMenuItem";
import { LuDoorOpen } from "react-icons/lu";
import { RxActivityLog } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { MdSensors } from "react-icons/md";
import UserMenu from "./userMenu";
import UserComponent from "./userComponent";
import { useRecoilState } from "recoil";
import { sidbarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import { signOut } from "next-auth/react";



function SidbarMenu() {
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const userComponentRef = useRef<HTMLDivElement>(null);
  const [sidbarMenuState, setSidbarMenuState] =
    useRecoilState(sidbarMenuStateAtom);

  const openUserMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setUserMenuIsOpen(true);
    event.stopPropagation();
  };
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userComponentRef.current &&
        !userComponentRef.current.contains(event.target as Node)
      ) {
        setUserMenuIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [userMenuIsOpen]);

  return (
    
    <>
      <div
        className={`bg-gray-200 z-30 sm:w-72 w-64 border border-r-gray-100 cursor-pointer fixed sm:translate-x-0  h-screen sm:relative ${
          sidbarMenuState ? "translate-x-0" : "-translate-x-64"
        } transition-all duration-200 ease-out`}
        ref={userComponentRef}
      >
        <div
          className="relative flex flex-col items-center"
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            openUserMenu(event)
          }
        >
          <UserComponent />

          {userMenuIsOpen && <UserMenu />}

        </div>

        <div>
          <SidbarMenuItem name="Accueil" href="/home" Icon={IoHomeOutline} />
          <SidbarMenuItem name="Chambres" href="/rooms" Icon={LuDoorOpen} />
          <SidbarMenuItem
            name="Équipments"
            href="/equipments"
            Icon={MdSensors}
          />
          <SidbarMenuItem
            name="Activités"
            href="/activities"
            Icon={RxActivityLog}
          />
          <SidbarMenuItem
            name="Planification"
            href="/scheduling"
            Icon={GrSchedules}
          />
          <SidbarMenuItem
            name="Consomsation & Énergie"
            href="/consumption-energy"
            Icon={SlEnergy}
          />
          <SidbarMenuItem name="Alertes" href="alerts" Icon={FaRegBell} />
          <SidbarMenuItem
            name="Configuration"
            href="/configuration"
            Icon={VscSettings}
          />
        </div>
      </div>
    </>
  );
}

export default SidbarMenu;
