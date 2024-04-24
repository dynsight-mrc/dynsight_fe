"use client"
import React from "react";


import { CustomSession } from "../../../types/session.type";
import { useSession } from "next-auth/react";

import OrganizationOwnerSidebarMenuItems from "../../../oo/_components/organizationOwnerSidebarMenuItems";
import CompanyOccupantSidebarMenuItems from "../../../co/_components/companyOccupantSidebarMenuItems";
import AdminSidebarMenuItems from "../../../admin/_components/sidebarMenu/adminSidebarMenuItems";


const UsersMenus = {
  'admin': AdminSidebarMenuItems,
  "company-occupant": CompanyOccupantSidebarMenuItems,
  'organization-owner': OrganizationOwnerSidebarMenuItems,
};

function SidebarMenuProvider() {
  const { data: session } = useSession();
  //const session = (await getServerSession(authOptions)) as CustomSession;
  if (session) {
    let {user} = session as CustomSession
    //@ts-ignore
    const CurrentMenu = session && UsersMenus[user.permissions!.role];
    return <CurrentMenu />;
  }
}
export default SidebarMenuProvider;
