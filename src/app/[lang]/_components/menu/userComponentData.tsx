import { getServerSession } from "next-auth";
//import Image from "next/image";
import React from "react";
import { authOptions } from "../../../api/auth/authOptions";
import { CustomSession } from "../../types/session.type";
import { RxAvatar } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";

async function UserComponentData() {
  const session = (await getServerSession(authOptions)) as CustomSession;


  return (
    <div className="flex flex-row space-x-2 my-10 items-center">
      {/* <Image src={RxAvatar} alt="avatar" className="w-10 h-10" /> */}
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
  );
}

export default UserComponentData;
