"use client"
import React from "react";

import { signOut } from "next-auth/react";
import { GoSignOut } from "react-icons/go";
import { GrUser } from "react-icons/gr";

function UserMenu() {
  const signout = async () => {
    try {
      await signOut({ callbackUrl:"/signin" });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="bg-white rounded-md flex flex-col w-11/12 shadow-md absolute top-24 divide-y-2 overflow-hidden ">
      <div className=" cursor-pointer flex flex-row items-center px-3 hover:bg-gray-200 transition-all duration-300 ease-out">
        <GrUser className="w-5 h-5 text-gray-500 " />
        <span className="w-full p-2 font-thin text-gray-500 ">
          Modifier mes informations
        </span>
      </div>
      <div
        onClick={signout}
        className="  cursor-pointer flex flex-row items-center px-3 hover:bg-gray-200 transition-all duration-300 ease-out"
      >
        <GoSignOut className="w-5 h-5 text-gray-500 " />
        <span className="w-full p-2 font-thin text-gray-500 ">
          Se déconnecter
        </span>
      </div>
    </div>
  );
}

export default UserMenu;
