import Image from 'next/image'
import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import Avatar from "../../../public/avatar.svg";

function UserComponent() {
  return (
<div className="flex flex-row space-x-2 my-10 items-center">
          <Image src={Avatar} alt="avatar" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm ">Admin</span>
            <span className="text-gray-500 text-sm ">
              {"email@gmail.com".slice(0, 15) + "..."}
            </span>
          </div>
          <TiArrowSortedDown className="w-5 h-5 text-gray-400" />
        </div>
  )
}

export default UserComponent