"use client"
import Image from "next/image";
import React from "react";
import DynsightLogo from "../../../public/dynsight-logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { IoMdClose } from "react-icons/io";
import { sidbarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
import { signOut } from "next-auth/react";

function Navbar() {
  const [sidbarMenuState, setSidbarMenuState] =
    useRecoilState(sidbarMenuStateAtom);
 
  const closeSidbarMenu = ()=>{
    setSidbarMenuState(false)
  }
  const openSidbarMenu = () => {
    setSidbarMenuState(true);
  };
 
  return (
    <div className="flex flex-row items-center p-2 sm:p-0 ">
      <IoReorderThreeOutline
        onClick={openSidbarMenu}
        className=" sm:hidden w-10 h-10 text-gray-600"
      />
      <div className="flex justify-center w-full sm:justify-start">
        <div className=" h-12  sm:h-full sm:mb-4 -ml-16 sm:ml-2  bg-[#F3F4F6] pl-4 sm:pt-6 flex flex-row space-x-3 items-center justify-center sm:justify-start">
          <Image
            className="w-8 h-8 sm:w-12 sm:h-12"
            src={DynsightLogo}
            alt="soft-icon"
          />

          <span className="tracking-widest text-2xl text-gray-500">
            DYNISIGHT
          </span>
        </div>
      </div>
      <IoMdClose onClick={closeSidbarMenu} className={` sm:hidden ${sidbarMenuState ?"block" :"hidden" } absolute right-0 w-12 h-12 pr-4 text-gray-600`} />

    </div>
  );
}

export default Navbar;
