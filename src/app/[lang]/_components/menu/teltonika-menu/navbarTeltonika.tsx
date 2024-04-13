"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import DynsightLogo from "@/public/dynsight-logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { IoMdClose } from "react-icons/io";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import Avatar from "@/public/avatar-human.svg";
import { VscAccount } from "react-icons/vsc";
import { IconType } from "react-icons";
import { MdOutlineLogout } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { signOut, useSession } from "next-auth/react";
import { CustomSession } from "@/src/app/[lang]/types/session.type";
function NavbarLogo() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <Image
        className="w-8 h-8 sm:w-10 sm:h-10"
        src={DynsightLogo}
        alt="soft-icon"
      
      />

      <div className="flex flex-row items-center space-x-2">
        <span className="tracking-widest font-oswald text-2xl text-teltonika-900">
          DYNSIGHT
        </span>
        <span className="text-teltonika-800 hidden md:flex">|</span>
        <span className="text-teltonika-800 font-opensans hidden md:flex">
          Building Mangement System
        </span>
      </div>
    </div>
  );
}

function UserMenuItem({
  Icon,
  title,
  handleOnClick,
}: {
  Icon: IconType;
  title: string;
  handleOnClick?: () => void;
}) {
  return (
    <div
      onClick={handleOnClick}
      className="flex flex-row items-center border-b border-gray-200 p-2 space-x-1 group hover:bg-blue-50 cursor-pointer"
    >
      <Icon className="group-hover:text-teltonika-800 w-5 h-5" />
      <span className="group-hover:text-teltonika-800 text-xs">{title}</span>
    </div>
  );
}

let UsersRoles = {
  admin: "Administrator",
  "company-occupant": "Company Occupant",
  "organization-owner": "Organization Owner",
};

type ContactInformation= {
  address: string;
  phone: string;
  email: string;
};
enum UserRole {
  ADMIN = "admin",
  CO = "company-occupant",
  OO = "organization-owner",
}

type Permissions = { role: UserRole; organization: "string" };
function NavbarUserNavigationMenu() {
  const [userMenuState, setUserMenuState] = useState(false);
  const userNotificationMenuRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const [contactInformation, setContactInformation] = useState<ContactInformation|null>(null)
  const [permissions, setPermissions] = useState<Permissions|null>(null)

  useEffect(() => {
    if(session){
      const {user: { contactInformation, permissions }} = (session as CustomSession) ;
      contactInformation && setContactInformation(contactInformation)
      permissions && setPermissions(permissions)
    }
    
  }, [session]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userNotificationMenuRef.current &&
        !userNotificationMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuState(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleSignout = () => {
    console.log("handle sigout");

    signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/signin` });
  };
  return (
    <div className="" ref={userNotificationMenuRef}>
      <div
        onClick={() => {
          setUserMenuState((pre) => !pre);
        }}
        className="flex flex-row items-center space-x-2 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-teltonika-800">
          <Image src={Avatar} alt="user-avatar" />
        </div>
        <span className="text-gray-500 lg:flex hidden font-opensans text-xs group-hover:text-teltonika-800 group-hover:underline">
          {contactInformation?.email}
        </span>
      </div>

      <div
        className={`text-xs border border-gray-200 ${
          userMenuState ? "inline-block" : "hidden"
        }  transition-all duration-200 ease-out  rounded-sm absolute  bg-white w-56  top-12 right-4 text-gray-500 font-opensans`}
      >
        <div className="flex flex-col items-start border-b border-gray-500 pl-1 p-3">
          <span className="">{permissions?.role && UsersRoles[permissions.role]}</span>
        </div>
        <UserMenuItem Icon={VscAccount} title={"My account"} />
        <UserMenuItem Icon={VscSettingsGear} title={"Account Settings"} />
        <UserMenuItem Icon={VscAccount} title={"Account Settings"} />

        <UserMenuItem
          Icon={MdOutlineLogout}
          title={"Logout"}
          handleOnClick={handleSignout}
        />
      </div>
    </div>
  );
}

function Notifications() {
  const [notificationsMenuState, setNotificationsMenuState] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setNotificationsMenuState(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={notificationsRef}
        onClick={() => {
          setNotificationsMenuState((pre) => !pre);
        }}
        className="flex flex-row items-center space-x-2 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden bg-white flex items-center justify-center ">
          <VscBell className="text-gray-500 w-5 h-5 group-hover:text-teltonika-800" />
        </div>
        <span className="text-gray-500 lg:flex hidden font-opensans text-xs group-hover:text-teltonika-800 group-hover:underline">
          Notifications
        </span>
      </div>

      <div
        className={`text-xs border border-gray-200 ${
          notificationsMenuState ? "inline-block" : "hidden"
        }  transition-all duration-200 ease-out  rounded-sm absolute  bg-white w-56  top-[30px] right-0 text-gray-500 font-opensans`}
      >
        <div className="flex flex-col items-start  pl-1 p-3">
          <span className="">No notifications</span>
        </div>
      </div>
    </div>
  );
}

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
    <div className="relative h-16 w-full pl-5 ">
      <div className="mr-4 h-full flex justify-between  flex-row  items-center border-b  border-gray-200 ">
        <NavbarLogo />
        <div className="flex flex-row items-center space-x-5">
          <Notifications />
          <NavbarUserNavigationMenu />
        </div>
      </div>
    </div>
  );
}

export default NavbarTeltonika;
