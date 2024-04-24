import FloorTableRow from '@/src/app/[lang]/_components/table/FloorTableRow'
import Table from '@/src/app/[lang]/_components/table/Table'
import React from 'react'
import { GoBell } from 'react-icons/go'
import { MdDeviceHub, MdOutlineSensors } from 'react-icons/md'
import { SlEnergy } from 'react-icons/sl'
import { TiWeatherPartlySunny } from 'react-icons/ti'
let floors = [
    {
      buildingId: "1",
      id: "1",
      name: "Floor01",
      spaces: 2,
      sensors: 12,
    },
    {
      buildingId: "1",
      id: "2",
      name: "Floor02",
      spaces: 2,
      sensors: 20,
    },
  ];
function BuildingOverview() {
  return (
    <div className="h-[74%] overflow-y-auto px-2 pt-3">
          <div className="flex flex-row space-x-3">
            <div className="w-2/3 ">
              <div className="flex flex-row space-x-2 ">
                <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
                  <TiWeatherPartlySunny className="text-gray-500 w-10 h-10" />
                  <span className="text-gray-500">Weather widget</span>
                </div>
                <div className="w-1/2  h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
                  <SlEnergy className="text-gray-500 w-10 h-10" />
                  <span className="text-gray-500">
                    Energy consumption widget
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center space-x-1 mt-3">
                <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm w-1/3 h-28">
                  <MdOutlineSensors className="w-6 h-6 text-gray-600" />
                  <span className="text-gray-600 font-opensans  text-4xl">
                    34
                  </span>{" "}
                  <span className="text-base text-gray-500 font-thin ">
                    Sensors
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm w-1/3 h-28">
                  <GoBell className="w-6 h-6 text-gray-600" />
                  <span className="text-gray-600 font-opensans  text-4xl">
                    12
                  </span>
                  <span className="text-base text-gray-500 font-thin ">
                    Alarms
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-sm w-1/3 h-28">
                  <MdDeviceHub className="w-6 h-6 text-gray-600" />
                  <span className="text-gray-600 font-opensans  text-4xl">
                    22
                  </span>
                  <span className="text-base text-gray-500 font-thin ">
                    Assets
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-md shadow-sm p-4">
              <span className="text-thin text-teltonika-800">
                Opening hours
              </span>
              <div className="flex flex-row">
                <div className="w-1/3 flex flex-col text-gray-500 text-thin">
                  <span></span>
                  <span>Sunday</span>
                  <span>Moday</span>
                  <span>Tuesday</span>
                  <span>Wednesday</span>
                  <span>Tuursday</span>
                  <span>Friday</span>
                </div>
                <div className="w-2/3 flex flex-col text-gray-600">
                  <span>09:00 - 17:00</span>
                  <span>09:00 - 17:00</span>

                  <span>09:00 - 17:00</span>
                  <span>09:00 - 17:00</span>
                  <span>09:00 - 17:00</span>
                  <span>09:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 ">
            <div className="w-full bg-white py-3 pl-3">
              <h4 className="text-gray-500 text-xl font-opensans">
                List of floors
              </h4>
            </div>
            <Table
              RowComponent={FloorTableRow}
              rows={floors}
              header={["Name", "Spaces", "Connected Sensors"]}
              keys={["name", "spaces", "sensors"]}
              filters={[{ key: "all", title: "All floors" }]}
            />
          </div>
        </div>
  )
}

export default BuildingOverview