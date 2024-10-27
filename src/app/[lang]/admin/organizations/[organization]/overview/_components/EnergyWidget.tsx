import React from 'react'
import { SlEnergy } from 'react-icons/sl'

function EnergyWidget() {
  return (
    <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
    <SlEnergy className="text-gray-500 w-10 h-10" />
    <span className="text-gray-500">
      Energy consumption widget
    </span>
  </div>
  )
}

export default EnergyWidget