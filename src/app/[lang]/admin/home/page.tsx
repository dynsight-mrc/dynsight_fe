import { getServerSession } from "next-auth";
import React from "react";
import { CustomSession } from "../../types/session.type";
import { authOptions } from "../../../api/auth/authOptions";
import { Locale } from "@/src/i18n-config";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import Table from "@/src/app/[lang]/_components/table/Table";

import Link from "next/link";
import BuildingTableRow from "../../_components/table/BuildingTableRow";
import CustomGoogleMap from "../../_components/CustomGoogleMap";

async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  let session = (await getServerSession(authOptions)) as CustomSession;
  let {
    user: { personalInformation },
  } = session;

  return (
    <div className="text-gray-500  w-full h-full flex flex-col  lg:flex-row font-opensans overflow-hidden">
      <div className="lg:w-1/2 w-full  ">
        <div className="bg-white flex flex-row justify-between items-center p-5 ">
          <div className="bg-white font-opensans text-xl">Space Management</div>
          <div>
            <Link
              href={"/admin/sites/add"}
              className="py-2 px-3 hover:bg-teltonika-900 text-white bg-teltonika-800 rounded-md"
            >
              Ajouter
            </Link>
          </div>
        </div>
        <div className="bg-white flex flex-row justify-between items-center px-5 py-3 pb-10 border-b border-b-gray-200">
          <div className="flex flex-row  space-x-5 divide-x-2 ">
            <div className="flex flex-col items-center justify-center pr-5">
              <span className="text-3xl text-gray-500 font-opensans">12</span>
              <span className="text-xl text-gray-400">Sites</span>
            </div>
            <div className="flex flex-col items-center justify-center px-8">
              <span className="text-3xl text-gray-500 font-opensans">19</span>
              <span className="text-xl text-gray-400">Buildings</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg text-gray-400">Total area</span>
              <span className="text-lg text-gray-500 font-opensans">12km2</span>
            </div>
          </div>
        </div>
        <div>
          <Table
            RowComponent={BuildingTableRow}
            rows={[
              {
                name: "1 Corporate Dive",
                type: "---",
                buildings: 2,
                area: "223554",
                image: sky,
              },
              {
                name: "1 Corporate Dive",
                type: "---",
                buildings: 1,
                area: "223554",
                image: sky2,
              },
              {
                name: "1 Corporate Dive",
                type: "---",
                buildings: 4,
                area: "223554",
                image: sky3,
              },
              {
                name: "1 Corporate Dive",
                type: "---",
                buildings: 3,
                area: "223554",
                image: sky4,
              },
            ]}
            header={[
              "Site Name",
              "Site Type",
              "Buildings Number",
              "Total Area",
            ]}
            keys={["name", "type", "buildings", "area"]}
            filters={[
              { key: "sites", title: "All Sites" },
              { key: "buildings", title: "All Buildings" },
            ]}
          />
        </div>
      </div>

      <div className="lg:w-1/2 w-full h-[1020px]  overflow-hidden">
        {/*  <Image  src={Map} className="w-full h-full object-cover" alt="google-map"/> */}
        <CustomGoogleMap
          center={{ lat: 36.9322023, lng: 8.624958 }}
          id="dynsight-420610"
          marks={[
            { lat: 33.43357509052815, lng: 3.209873417516872 },
            { lat: 35.215282689636155, lng: -0.44518829134217497 },
            { lat: 29.11377209740726, lng: 7.6190438940844345 },
            { lat: 28.43209428498482, lng: -7.011515288340336 },
          ]}
          options={{
            zoom: 5,
            mapId: "e8f6329658c9128f",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
