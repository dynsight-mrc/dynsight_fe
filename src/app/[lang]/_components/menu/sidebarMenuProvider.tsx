"use client"
import React from "react";


import RootSidebarMenuItems from "../../(root)/_components/rootSidebarMenuItems";
import { CustomSession } from "../../types/session.type";
import { useSession } from "next-auth/react";
import OrganizationOwnerSidebarMenuItems from "../../(organization-owner)/_components/organizationOwnerSidebarMenuItems";
import CompanyOccupantSidebarMenuItems from "../../(company-occupant)/_components/companyOccupantSidebarMenuItems";


const UsersMenus = {
  'root': RootSidebarMenuItems,
  "company-occupant": CompanyOccupantSidebarMenuItems,
  'organization-owner': OrganizationOwnerSidebarMenuItems,
};

/* function SidebarMenuProvider() {
  const { data: session } = useSession();

  if (session) {
    const {
      user: { personalInformation, contactInformation, permissions },
    } = session as CustomSession;
    const CurrentMenu = UsersMenus[permissions.role];
    return <CurrentMenu />;
  }
} */
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
