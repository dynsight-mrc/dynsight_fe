"use client"
import React from 'react'

import { IoHomeOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { LuDoorOpen } from "react-icons/lu";
import { RxActivityLog } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { MdSensors } from "react-icons/md";
//import SidebarMenuItem from '../../../_components/menu/default-menu/sidebarMenuItem'
import SidebarMenuItem from "@/src/app/[lang]/_components/menu/default-menu/sidebarMenuItem"

function AdminSidebarMenuItems() {
  return (
    <div>
          <SidebarMenuItem name="Accueil" href="/home-co" Icon={IoHomeOutline} />
          <SidebarMenuItem name="Chambres" href="/rooms" Icon={LuDoorOpen} />
          <SidebarMenuItem
            name="Équipments"
            href="/equipments"
            Icon={MdSensors}
          />
          <SidebarMenuItem
            name="Activités"
            href="/activities"
            Icon={RxActivityLog}
          />
          <SidebarMenuItem
            name="Planification"
            href="/scheduling"
            Icon={GrSchedules}
          />
          <SidebarMenuItem
            name="Consomsation & Énergie"
            href="/consumption-energy"
            Icon={SlEnergy}
          />
          <SidebarMenuItem name="Alertes" href="alerts" Icon={FaRegBell} />
          <SidebarMenuItem
            name="Configuration"
            href="/configuration"
            Icon={VscSettings}
          />
        </div>
  )
}

export default AdminSidebarMenuItems