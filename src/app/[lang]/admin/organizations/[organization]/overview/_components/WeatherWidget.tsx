import React from 'react'
import { TiWeatherPartlySunny } from 'react-icons/ti'

function WeatherWidget() {
  return (
    <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
    <TiWeatherPartlySunny className="text-gray-500 w-10 h-10" />
    <span className="text-gray-500">Weather widget</span>
  </div>
  )
}

export default WeatherWidget