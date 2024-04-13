import React from "react";
import { CustomSession, UserRole } from "../../types/session.type";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/authOptions";
import { redirect } from "next/navigation";
import { getDictionary } from "@/src/lib/dictionary";
import TeltonikaWidget from "./_components/widgets/teltonikaWidget";
import { MdSignalWifiStatusbar1Bar } from "react-icons/md";
import { Locale } from "@/src/i18n-config";
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
      {/* <div className="grid gap-3 grid-cols-1 md:grid-cols-2 "> */}
      {/* <div className="text-gray-500">
        <div className="text-xl">
          <span className="font-semibold">{dict.index.title}</span>{" "}
          {`${personalInformation.firstName} ${personalInformation.lastName} `}
        </div>
      </div> */}
      <div>
        <div className=" grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
          <div className="">
            <div className="w-1/2"></div>
            <div className="w-1/2"></div>
          </div>
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
