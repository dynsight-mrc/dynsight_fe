import React from "react";
import Room from "./_components/room";
import { CustomSession, UserRole } from "../../types/session.type";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/authOptions";
import { redirect } from "next/navigation";

async function getRoomsData() {
  const res = await fetch("http://38.242.254.49:5000/api/rooms");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Home() {
  let roomsData = await getRoomsData();
  let session = (await getServerSession(authOptions)) as CustomSession;
  let {
    user: { personalInformation },
  } = session;

  return (
    <div>
      {/* <div className="grid gap-3 grid-cols-1 md:grid-cols-2 "> */}
      <div className="text-gray-500">
        <div className="text-xl">
          <span className="font-semibold">Bienvenu,</span>{" "}
          {`${personalInformation.firstName} ${personalInformation.lastName} `}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3"></div>
        <div className="flex flex-row flex-wrap">
          {roomsData.map((room: any) => (
            <Room key={room.id} roomName={room.name} devices={room.devices} />
          ))}
          {roomsData.map((room: any) => (
            <Room key={room.id} roomName={room.name} devices={room.devices} />
          ))}
        </div>
        <div>else</div>
      </div>
    </div>
  );
}

export default Home;
