import { getServerSession } from "next-auth";
import React from "react";
import { CustomSession } from "../../types/session.type";
import { authOptions } from "../../../api/auth/authOptions";
import { Locale } from "@/src/i18n-config";
import { getDictionary } from "@/src/lib/dictionary";

async function Home({params:{lang}}:{params:{lang:Locale}}) {
  let session = (await getServerSession(authOptions)) as CustomSession;
  let {
    user: { personalInformation },
  } = session;
  const {index} = await getDictionary(lang)
  console.log(lang,index);
  

  return (
    <div className="text-gray-500">
      <div className="text-xl">
        <span className="font-semibold">{index.title}</span>{" "}
        {`${personalInformation.firstName} ${personalInformation.lastName} `}
      </div>
      <div className="flex flex-row flex-wrap">
        {[1, 2, 3, 5, 5, 6, 6, 1, 2, 3, 5, 5, 6, 6, 1, 2, 3, 5, 5, 6, 6].map(
          (ele, index) => {
            return (
              <div key={index} className="w-52 h-40 bg-red-200 m-2">
                {ele}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Home;
