import React from 'react'
import { IconType } from 'react-icons'
type WidgetProps ={
    Icon:IconType,
    title:string,
    value:string|number
}

function Widget({Icon,title,value}:WidgetProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm w-1/3 h-28">
    <Icon className="w-6 h-6 text-gray-600" />
    <span className="text-gray-600 font-opensans  text-4xl">
      {value}
    </span>
    <span className="text-base text-gray-500 font-thin ">
      {title}
    </span>
  </div>
  )
}

export default Widget