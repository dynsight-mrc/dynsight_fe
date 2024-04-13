"use client"
import React from 'react'
import SidebarMenuItem from '../../_components/menu/default-menu/sidebarMenuItem'
import { VscSettings } from 'react-icons/vsc'
import { IoHomeOutline } from 'react-icons/io5'

function AdminSidebarMenuItems() {
  return (
    <div>
        <SidebarMenuItem
            name="Accueil"
            href="/home"
            Icon={IoHomeOutline}
          />

        <SidebarMenuItem
            name="Configuration"
            href="/configuration"
            Icon={VscSettings}
          />
    </div>
  )
}

export default AdminSidebarMenuItems