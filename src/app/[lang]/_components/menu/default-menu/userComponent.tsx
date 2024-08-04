"use client";
import React, { useEffect, useRef, useState } from "react";
import UserMenu from "./userMenu";
import { TiArrowSortedDown } from "react-icons/ti";
import { CustomSession } from "../../../types/session.type";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Avatar from "@/public/avatar.svg";
function UserComponent() {
  const { data: session } = useSession();
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const userComponentRef = useRef<HTMLDivElement>(null);

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

  if (session) {
    const {
      user: { personalInformation, contactInformation, permissions },
    } = session as CustomSession;

    return (
      <div
        className="relative flex flex-col items-center cursor-pointer"
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          openUserMenu(event)
        }
        ref={userComponentRef}
      >
        <div className="flex flex-row space-x-2 my-10 items-center">
          <Image src={Avatar} alt="avatar" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm w-28 ">
              {permissions?.role}
            </span>
            <span className="text-gray-500 text-sm w-28">
              {contactInformation?.email.slice(0, 15) + "..."}
            </span>
          </div>
          <TiArrowSortedDown className="w-5 h-5 text-gray-400" />
        </div>

        {userMenuIsOpen && <UserMenu />}
      </div>
    );
  }
}

/* function UserComponent({children}:{children:any}) {
  
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const userComponentRef = useRef<HTMLDivElement>(null);

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
      <div
        className="relative flex flex-col items-center cursor-pointer"
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          openUserMenu(event)
        }
        ref={userComponentRef}
      >
        <div className="flex flex-row space-x-2 my-10 items-center">
      <Image src={RxAvatar} alt="avatar" className="w-10 h-10" />
      <div className="flex flex-col">
        <span className="text-gray-600 text-sm w-28 ">
          {session?.user?.permissions?.role}
        </span>
        <span className="text-gray-500 text-sm w-28">
          {session?.user?.contactInformation?.email.slice(0, 15) + "..."}
        </span>
      </div>
      <TiArrowSortedDown className="w-5 h-5 text-gray-400" />
    </div>

        {userMenuIsOpen && <UserMenu />}
      </div>
    );
  

} */

export default UserComponent;
