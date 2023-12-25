"use client";
import { signOut } from "next-auth/react";
import { permanentRedirect, useRouter } from "next/navigation";
import React from "react";

function UserMenu() {
  const router = useRouter();
  const signout = async () => {
   try {
    let res =  await signOut({redirect:false})
    if(res.url){
      router.replace("/signin")
    }
   } catch (error) {
    
   }
   
  };
  return (
    <div className="bg-white rounded-md flex flex-col w-11/12 shadow-md absolute top-24 divide-y-2 overflow-hidden ">
      <span className="p-2 font-thin text-gray-500 hover:bg-gray-200 transition-all duration-300 ease-out">item1</span>
      <span onClick={signout} className="p-2 font-thin text-gray-500 hover:bg-gray-200 transition-all duration-300 ease-out">
        Se déconnecter
      </span>
    </div>
  );
}

export default UserMenu;
