import Image from "next/image";
import React from "react";
import Skyscapper from "@/public/skyscapper-wallpaper.jpg";
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

      <div className=" w-1/2">
        <span className="text-white hidden sm:inline-block font-oswald font-bold text-sm sm:text-2xl lg:text-7xl xl:text-8xl text-justify uppercase">
          Building Management System
        </span>
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
            title="Compatible Product"
            text=" Teltonika Networks offers a wide array of networking products
              designed to make your connectivity reliable, secure and quick to
              deploy. Our products will help you build a solid IoT, M2M or
              enterprise networking infrastructure using our remote management
              capabilities."
          />

          <ProductPresentationItem
            title="Connect & Api"
            text="RMS Connect enables the access and control of non-Teltonika
              Networks devices via RDP/VNC, SSH, or HTTP(S) protocols without
              any additional software. The newly implemented RMS API provides
              a possibility to carry endless RMS features into your in-house
              IoT platform."
          />
          <ProductPresentationItem
            title="Use cases"
            text="We are inspired by the creativity of our partners and are
              excited to be a part of this revolution by manufacturing
              networking products that are secure, reliable and easy to use.
              Take a look at how Teltonika Networks can help your connectivity
              solutions across multiple industry sectors!"
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
