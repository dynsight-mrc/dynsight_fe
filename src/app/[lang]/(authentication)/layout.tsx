import Image from "next/image";
import React from "react";
import Skyscapper from "@/public/skyscapper-wallpaper.jpg";
//import Skyscapper from "@/public/login-wallpaper.jpg";
import DynsightLogo from "@/public/dynsight-logo.png";
import { motion } from "framer-motion";
function LeftSectionHeader() {
  return (
    <div className="p-16">
      <div className="flex flex-row items-center space-x-2 mb-10">
        <Image
          className="w-8 h-8 sm:w-10 sm:h-10"
          src={DynsightLogo}
          alt="soft-icon"
        />

        <div className="flex flex-row items-center space-x-2">
          <span className="tracking-widest font-opensans lg:text-4xl text-white">
            DYNSIGHT
          </span>
        </div>
      </div>

      <div className=" w-2/3 flex flex-col">
        <p className="text-white hidden  sm:inline-block font-oswald font-bold text-sm sm:text-2xl lg:text-7xl xl:text-8xl uppercase">
          PRENEZ
        </p>
        <p className="text-white hidden  sm:inline-block font-oswald font-bold text-sm sm:text-2xl lg:text-7xl xl:text-8xl uppercase">
          LE CONTRÔLE
        </p>
        <p className="text-white hidden  sm:inline-block font-oswald font-bold text-sm sm:text-2xl lg:text-7xl xl:text-8xl uppercase">
          DE VOS BATIMENTS
        </p>
      </div>
      <button className="hidden xl:inline-block border mt-5 border-white rounded-sm py-2 px-4 hover:opacity-70 transition-opacity duration-100 ease-out text-white uppercase font-oswald">
        Savoir plus
      </button>
    </div>
  );
}
function ProductPresentationItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="text-left px-16 max-h-52 overflow-hidden">
      <span className="font-oswald font-semibold uppercase text-3xl">
        {title}
      </span>
      <p className="font-opensans text-sm mt-3 text-justify">{text}</p>
    </div>
  );
}

function LeftSideSection() {
  return (
    <div className="hidden relative lg:inline-block lg:w-full">
      <LeftSectionHeader />

      <div className="h-72 w-full  absolute bottom-0  bg-gradient-to-t from-[#181818] via-25% via-[#181818]  ">
        <div className="hidden absolute  bottom-8 xl:flex flex-row  justify-between flex-1 space-x-5 text-white  items-start divide-x-2">
          <ProductPresentationItem
            title="Property 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tempus felis. Fusce ac accumsan ligula. Mauris at porta est, a facilisis diam. Sed id venenatis elit, non posuere augue. Maecenas auctor ac turpis elementum tristique. Sed ullamcorper, sem sed imperdiet dignissim, lorem odio dignissim eros, vel finibus lectus lectus a nisl."
          />

          <ProductPresentationItem
            title="Property 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tempus felis. Fusce ac accumsan ligula. Mauris at porta est, a facilisis diam. Sed id venenatis elit, non posuere augue. Maecenas auctor ac turpis elementum tristique. Sed ullamcorper, sem sed imperdiet dignissim, lorem odio dignissim eros, vel finibus lectus lectus a nisl."
          />
          <ProductPresentationItem
            title="Property 3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tempus felis. Fusce ac accumsan ligula. Mauris at porta est, a facilisis diam. Sed id venenatis elit, non posuere augue. Maecenas auctor ac turpis elementum tristique. Sed ullamcorper, sem sed imperdiet dignissim, lorem odio dignissim eros, vel finibus lectus lectus a nisl."
          />
        </div>
      </div>
    </div>
  );
}

async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-row overflow-hidden ">
      <Image
        src={Skyscapper}
        alt="skyscapper"
        className="absolute backdrop-blur-sm inset-0 object-cover object-center mx-auto w-full h-full"
        placeholder="blur"
        loading="lazy"
      />
      <LeftSideSection />
      <div className="relative w-full h-screen lg:w-[500px] bg-teltonikaGray-500 text-white">
        {children}
      </div>
    </div>
  );
}

export default Layout;
