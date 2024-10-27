import { getServerSession } from "next-auth";
import React from "react";
import { CustomSession } from "../../_common/types/session.type";
import { authOptions } from "../../../api/auth/authOptions";
import { Locale } from "@/src/i18n-config";
import Table from "@/src/app/[lang]/_components/table/Table";

import Link from "next/link";
import CustomGoogleMap from "../../_components/CustomGoogleMap";
import OrganizationTableRow from "../../_components/table/OrganizationTableRow";
import { getDictionary } from "@/src/lib/dictionary";
import { updateOrganizationWithBuildingStats } from "../organizations/helper-functions/functions";
import { getOrganizations } from "@common/organizations/api/get-organizations";
import { ReadOrganizationWithDetailsDto } from "@common/organizations/dtos/read-organizations.dto";

async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  let session = (await getServerSession(authOptions)) as CustomSession;
  let dict = await getDictionary(lang);
 
  let organizations: ReadOrganizationWithDetailsDto[] | undefined =
    await getOrganizations(session,{details:true});
  
  let organizationsOverview = organizations?.map(updateOrganizationWithBuildingStats)

    let {
    admin: { home },
  } = dict;
  console.log(organizationsOverview);
  
  return (
    <div className="text-gray-500  w-full h-full flex flex-col  lg:flex-row font-opensans overflow-hidden">
      <div className="lg:w-1/2 w-full ">
        <div className="bg-white flex flex-row justify-between items-center p-5 ">
          <div className="bg-white font-opensans text-xl">{home.title}</div>
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
              <span className="text-3xl text-gray-500 font-opensans">
                {organizations?.length}
              </span>
              <span className="text-xl text-gray-400">Organisations</span>
            </div>
            <div className="flex flex-col items-center justify-center px-8">
              <span className="text-3xl text-gray-500 font-opensans">
                {organizations?.reduce(
                  (acc, val: ReadOrganizationWithDetailsDto) =>
                    acc + val.buildings.length,
                  0
                )}
              </span>
              <span className="text-xl text-gray-400">Immeubles</span>
            </div>
          </div>
          {/* <div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg text-gray-400">Superficie Totale</span>
              <span className="text-lg text-gray-500 font-opensans">
                {organizations?.reduce(
                  (acc, val: ReadOrganizationDocumentWithDetailsDto) =>
                    acc + val.buildings.,
                  0
                )}
                m<sup>2</sup>
              </span>
            </div>
          </div> */}
        </div>
        <div className="h-[67%] lg:h-[80%] overflow-y-auto">
          <Table
            RowComponent={OrganizationTableRow}
            rows={organizationsOverview!}
            header={[
              "Intitulé",
              "Propriétaire",
              "Nombre d'immeubles",
              "Superficie totale",
            ]}
            keys={["name", "owner", "numberOfBuildings", "totalSurface"]}
            filters={[
              { key: "all", title: "Toutes les organisations" },
              /* { key: "buildings", title: "Tout les immeubles" }, */
            ]}
          />
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-[100%] hidden lg:inline-block ">
        {/*  <Image  src={Map} className="w-full h-full object-cover" alt="google-map"/> */}
        <CustomGoogleMap
          lang={lang}
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
