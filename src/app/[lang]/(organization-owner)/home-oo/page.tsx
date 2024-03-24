import { getServerSession } from "next-auth";
import React from "react";
import { CustomSession } from "../../types/session.type";
import { authOptions } from "../../../api/auth/authOptions";

async function Home() {
  let session = (await getServerSession(authOptions)) as CustomSession;
  let {
    user: { personalInformation },
  } = session;

  return (
    <div className="text-gray-500">
      <div className="text-xl">
        <span className="font-semibold">Bienvenu,</span>{" "}
        {`${personalInformation.firstName} ${personalInformation.lastName} `}
      </div>

     
    </div>
  );
}

export default Home;
