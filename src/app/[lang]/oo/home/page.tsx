import { getServerSession } from "next-auth";
import React from "react";
import { CustomSession } from "../../types/session.type";
import { authOptions } from "../../../api/auth/authOptions";
import { Locale } from "@/src/i18n-config";
import Table from "@/src/app/[lang]/_components/table/Table";

import Link from "next/link";
import sky4 from "@/public/skyscapper4.jpeg";
import sky from "@/public/skyscapper.png";
import sky2 from "@/public/skyscapper2.jpg";
import sky3 from "@/public/skyscapper3.jpeg";
import BuildingTableRow from "../_components/tables/BuildingTableRow";
import CustomGoogleMap from "../../_components/CustomGoogleMap";
let buildings = [
  {
    name: "1 Corporate Dive",
    image: sky,
    type: "Commercial",
    devices: 12,
    area: "223554",
  },
  {
    name: "1 Corporate Dive",
    image: sky2,
    type: "Hotel",
    devices: 10,
    area: "223554",
  },
  {
    name: "1 Corporate Dive",
    image: sky3,
    type: "Industrial",
    devices: 14,
    area: "223554",
  },
  {
    name: "1 Corporate Dive",
    image: sky4,
    type: "Hospital",
    devices: 5,
    area: "223554",
  },
];
const algeriaPolygonCoordinates = [
  ["", "8.624958", "36.9322023"],
  ["", "7.8559151", "36.8443329"],
  ["", "7.2626533", "37.1076376"],
  ["", "6.9550362", "36.9322023"],
  ["", "6.3617744", "37.0024251"],
  ["", "5.2851143", "36.6506643"],
  ["", "3.4394112", "36.8091568"],
  ["", "2.3847237", "36.5624717"],
  ["", "1.3959541", "36.5448211"],
  ["", "0.0775947", "36.0844922"],
  ["", "-0.0322685", "35.7820411"],
  ["", "-0.6035576", "35.7285473"],
  ["", "-1.4385185", "35.3889197"],
  ["", "-1.790081", "35.0838248"],
  ["", "-2.2515068", "35.1197779"],
  ["", "-1.8340263", "34.7595349"],
  ["", "-1.855999", "34.4883161"],
  ["", "-1.6362724", "34.0343202"],
  ["", "-1.8999443", "33.6327827"],
  ["", "-1.5703545", "33.3028526"],
  ["", "-1.3945732", "32.8425394"],
  ["", "-1.0210381", "32.5281546"],
  ["", "-1.3066826", "32.1382734"],
  ["", "-2.8667412", "32.0638202"],
  ["", "-3.6797295", "31.6906458"],
  ["", "-3.6797295", "31.1656729"],
  ["", "-3.6797295", "30.8832322"],
  ["", "-4.8882256", "30.2209638"],
  ["", "-5.437542", "29.8405053"],
  ["", "-5.6133232", "29.5350905"],
  ["", "-6.4263115", "29.5350905"],
  ["", "-7.4370537", "29.5350905"],
  ["", "-8.7773857", "28.6904475"],
  ["", "-8.7554131", "27.2935472"],
  ["", "1.3520088", "21.1253486"],
  ["", "1.0883369", "20.6634765"],
  ["", "1.659626", "20.5297835"],
  ["", "1.8244209", "20.3238738"],
  ["", "2.0990791", "20.2311247"],
  ["", "2.4726143", "20.0867384"],
  ["", "3.1977119", "19.7872298"],
  ["", "3.1537666", "19.1761504"],
  ["", "5.779499", "19.4871569"],
  ["", "12.0307197", "23.5134798"],
  ["", "11.602253", "24.3069077"],
  ["", "10.2399483", "24.5569708"],
  ["", "9.9872627", "25.4232871"],
  ["", "9.4159737", "26.2243036"],
  ["", "9.42696", "26.3720423"],
  ["", "9.8993721", "26.5392514"],
  ["", "9.8114815", "27.352111"],
  ["", "9.9783641", "27.9050334"],
  ["", "9.8685008", "28.4280378"],
  ["", "9.8685008", "29.0637701"],
  ["", "9.407075", "30.2286148"],
  ["", "9.0664988", "32.0992487"],
  ["", "8.3633738", "32.563402"],
  ["", "8.0887156", "33.0620039"],
  ["", "7.8140574", "33.2275814"],
  ["", "7.5558787", "33.7955046"],
  ["", "7.6382762", "34.1871904"],
  ["", "7.901948", "34.4140831"],
  ["", "8.2754832", "34.6494002"],
  ["", "8.2150584", "34.9065787"],
  ["", "8.3853465", "35.6911337"],
  ["", "8.4073191", "36.4194386"],
  ["", "8.2095652", "36.4989634"],
  ["", "8.4622508", "36.7194372"],
  ["", "8.624958", "36.9322023"],
];

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
              <span className="text-3xl text-gray-500 font-opensans">19</span>
              <span className="text-xl text-gray-400">Buildings</span>
            </div>
            <div className="flex flex-col items-center justify-center px-8">
              <span className="text-3xl text-gray-500 font-opensans">19</span>
              <span className="text-xl text-gray-400">Connected Devices</span>
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
            rows={buildings}
            header={["Building Name", "Type", "Connected Devices", "Area"]}
            keys={["name", "type", "devices", "area"]}
            filters={[{ key: "buildings", title: "All Buildings" }]}
          />
        </div>
      </div>

      <div className="lg:w-1/2 w-full h-[100%]  overflow-scroll">
        {/*  <Image  src={Map} className="w-full h-full object-cover" alt="google-map"/> */}
        {/*  <MySecondMap /> */}
        <CustomGoogleMap
          center={{ lat: 36.9322023, lng: 8.624958 }}
          id="dynsight-420610"
          marks={[
            { lat: 33.43357509052815, lng: 3.209873417516872 },
            { lat: 35.215282689636155, lng: -0.44518829134217497 },
            { lat: 29.11377209740726, lng: 7.6190438940844345 },
            { lat: 28.43209428498482, lng: -7.011515288340336 },
          ]}
          polygon={algeriaPolygonCoordinates.map((ele) => ({
            lat: parseFloat(ele[2]),
            lng: parseFloat(ele[1]),
          }))}
          options={{
            zoom: 5,
            mapId: "e8f6329658c9128f",
            markerStyle: {
              iconUrl: "https://www.svgrepo.com/show/270040/building-town.svg",
              size: [50, 50],
            },
          }}
        />
      </div>
    </div>
  );
}

export default Home;
