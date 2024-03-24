"use client"
import React from 'react'

import { RxActivityLog } from "react-icons/rx";
import { IoHomeOutline } from 'react-icons/io5';
import SidebarMenuItem from '../../_components/menu/sidebarMenuItem';

function OrganizationOwnerSidebarMenuItems() {
  return (
    <div>
       <SidebarMenuItem
            name="Accueil"
            href="/home-oo"
            Icon={IoHomeOutline}
          />
        <SidebarMenuItem
            name="Activités"
            href="/activities"
            Icon={RxActivityLog}
          />
    </div>
  )
}

export default OrganizationOwnerSidebarMenuItems