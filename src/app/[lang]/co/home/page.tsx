import React from "react";
import Room from "./_components/room";
import { CustomSession, UserRole } from "../../types/session.type";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/authOptions";
import { redirect } from "next/navigation";
import { getDictionary } from "@/src/lib/dictionary";
import TeltonikaWidget from "./_components/widgets/teltonikaWidget";
import { MdSignalWifiStatusbar1Bar } from "react-icons/md";
import { Locale } from "@/src/i18n-config";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SlEnergy } from "react-icons/sl";
import { faker } from "@faker-js/faker";
import ChartMapper from "@/src/app/[lang]/co/_components/charts/ChartMapper";
import { BsCheckLg } from "react-icons/bs";

const labels = Array.from({ length: 24 }, (_, index) => index).map(
  (ele) => `${ele}:00`
);

function PropertyDetail({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col py-2 border-b border-gray-200 space-y-1">
      <span className="font-oswald text-sm ">{name.toUpperCase()}</span>
      <span className="font-opensans  font-thin text-xs">{value}</span>
    </div>
  );
}

async function getRoomsData() {
  const res = await fetch("http://38.242.254.49:5000/api/rooms");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Home() {
  // const dict = await getDictionary(lang);
  // let roomsData = await getRoomsData();
  let session = (await getServerSession(authOptions)) as CustomSession;
  let {
    user: { personalInformation },
  } = session;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className=" h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
              <TiWeatherPartlySunny className="text-gray-500 w-10 h-10" />
              <span className="text-gray-500">Weather widget</span>
            </div>
            <div className=" h-28 items-center justify-center space-x-3 p-4 shadow-md bg-white flex flex-row">
              <SlEnergy className="text-gray-500 w-10 h-10" />
              <span className="text-gray-500">Energy consumption widget</span>
            </div>
          </div>
          <div>
            <ChartMapper
              labels={labels}
              dataSet={labels.map(() => faker.number.int({ min: 15, max: 37 }))}
              datasetName={"Temperature"}
              legend={"Température au cours des 24 heures "}
              type="line"
              width="w-full"
              borderColor={["rgb(255, 99, 132)"]}
              backgroundColor={["rgba(255, 99, 132, 0.5)"]}
            />
            <div className="grid grid-cols-2">
              <div className="w-full text-center bg-white border border-gray-200 rounded-md">
                <div className="m-4">
                  <span className="text-gray-500 m-2 pt-5">
                    Dernières  activités
                  </span>
                </div>
                <div className="p-2 space-y-3">
                  <div className="flex flex-row items-center space-x-3">
                    <div className="bg-yellow-300 rounded-full w-10 h-10 flex flex-row items-center justify-center">
                      <BsCheckLg className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-row text-gray-500">
                      <span> Operaion --- : By ---</span>
                      <span className="text text-blue-500">Feb 19, 22:22:00</span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center space-x-3">
                    <div className="bg-yellow-300 rounded-full w-10 h-10 flex flex-row items-center justify-center">
                      <BsCheckLg className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-row text-gray-500">
                      <span> Operaion --- : By ---</span>
                      <span className="text text-blue-500">Feb 19, 22:22:00</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-3">
                    <div className="bg-yellow-300 rounded-full w-10 h-10 flex flex-row items-center justify-center">
                      <BsCheckLg className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-row text-gray-500">
                      <span> Operaion --- : By ---</span>
                      <span className="text text-blue-500">Feb 19, 22:22:00</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-3">
                    <div className="bg-yellow-300 rounded-full w-10 h-10 flex flex-row items-center justify-center">
                      <BsCheckLg className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-row text-gray-500">
                      <span> Operaion --- : By ---</span>
                      <span className="text text-blue-500">Feb 19, 22:22:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid gap-5 grid-cols-1 sm:grid-cols-2 h-min ">
          <TeltonikaWidget
            Icon={MdSignalWifiStatusbar1Bar}
            propertyName="Propert name"
            value="34%"
          >
            <>
              <PropertyDetail name="Data connection" value="Connected" />
              <PropertyDetail name="sTATE" value="saved" />
            </>
          </TeltonikaWidget>
          <TeltonikaWidget
            Icon={MdSignalWifiStatusbar1Bar}
            propertyName="Propert name"
            value="34%"
          >
            <>
              <PropertyDetail name="Data connection" value="Connected" />
              <PropertyDetail name="sTATE" value="saved" />
            </>
          </TeltonikaWidget>
          <TeltonikaWidget
            Icon={MdSignalWifiStatusbar1Bar}
            propertyName="Propert name"
            value="34%"
          >
            <>
              <PropertyDetail name="Data connection" value="Connected" />
              <PropertyDetail name="sTATE" value="saved" />
            </>
          </TeltonikaWidget>
        </div>
      </div>
    </div>
  );
}

export default Home;
