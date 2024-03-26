import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

function UserComponentSkeletonLoader() {
  return (
    <div className="animate-pulse relative flex flex-col items-center">
    <div className="flex flex-row space-x-2 my-10 items-center">
      <div className="w-10 h-10 rounded-full bg-gray-400"></div>
      <div className="flex flex-col space-y-2">
        <span className="w-28  h-3 bg-gray-400  rounded-md"></span>
        <span className=" w-28 h-3 bg-gray-400 rounded-md"></span>
      </div>
      <TiArrowSortedDown className="w-5 h-5 text-gray-400" />
    </div>
  </div>
  )
}

export default UserComponentSkeletonLoader