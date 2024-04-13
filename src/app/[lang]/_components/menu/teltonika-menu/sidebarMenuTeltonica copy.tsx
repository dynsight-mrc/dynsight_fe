import React, { useState } from "react";
import { VscFlame } from "react-icons/vsc";
import { TbChevronsLeft } from "react-icons/tb";
import { TbChevronsRight } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";

import Link from "next/link";
import { IconType } from "react-icons";
import { useRecoilState } from "recoil";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";
type BlocItemType = {
  name: string;
  link: string;
};
type BlocType = {
  Icon: IconType;
  title: string;
  items: BlocItemType[];
};
function MenuBlocItem({ name, link }: BlocItemType) {
  return (
    <Link
      href={link}
      className="text-gray-500 font-normal font-opensans hover:text-gray-600 hover:translate-x-3 transition-all duration-400 ease-out text-sm tracking-wide cursor-pointer "
    >
      {name}
    </Link>
  );
}

function MenuBloc({ Icon, title, items }: BlocType) {
  const [sidebarMenuState, setSidebarMenuState] =
    useRecoilState(sidebarMenuStateAtom);

  return (
    <div className="group w-full flex flex-row">
      <div
        className={`bg-teltonika-800  w-12   flex-none  items-start justify-center cursor-pointer `}
      >
        <div className="w-full">
          <Icon className={` w-5 h-5 py-2 text-white  ${sidebarMenuState?"hover:bg-teltonika-900 " : "hover:bg-white hover:text-teltonika-800 "}`} />
        </div>
      </div>
      <div
        className={` bg-white ${
          sidebarMenuState ? " w-52 pl-5 py-3 " : "w-0 h-0 overflow-hidden "
        }`}
      >
        <span className="text-lg  text-teltonika-800 font-normal tracking-wider font-oswald">
          {title.toUpperCase()}
        </span>
        <div className="mt-2 flex flex-col">
          {items.map((item) => (
            <MenuBlocItem key={item.name} name={item.name} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
function MenuBlocSmScreen({ title, items }: BlocType) {
  const [sidebarMenuState, setSidebarMenuState] =
    useRecoilState(sidebarMenuStateAtom);

  return (
    <div className=" w-full flex flex-row">
      <div
        className={` bg-gray-100 ${
          sidebarMenuState ? " w-52 pl-5 py-3 " : "w-0 h-0 overflow-hidden"
        }`}
      >
        <span className="text-lg  text-teltonika-800 font-normal tracking-wider font-oswald">
          {title.toUpperCase()}
        </span>
        <div className="mt-2 flex flex-col">
          {items.map((item) => (
            <MenuBlocItem key={item.name} name={item.name} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
function EmptyBloc({
  menuState,
  height,
}: {
  menuState: boolean;
  height: string;
}) {
  return (
    <div className=" w-full flex flex-row ">
      <div
        className={`bg-teltonika-800 w-12 h-${height}  flex items-start justify-center cursor-pointer`}
      ></div>
      <div
        className={`bg-white  ${
          menuState ? " w-52 px-5 py-3" : "w-0 h-0 overflow-hidden"
        }`}
      ></div>
    </div>
  );
}

function SidebarMenuTeltonica() {
  const [sidebarMenuState, setSidebarMenuState] =
    useRecoilState(sidebarMenuStateAtom);
  const toggleMenu = () => {
    setSidebarMenuState((preValue) => !preValue);
  };
  /* ${menuState ? "w-0":"sm:w-80"} */
  return (
    <>
      <div
        className={`${
          sidebarMenuState ? "sm:w-64" : "sm:w-12"
        } absolute h-screen min-h-screen font-opensans hidden lg:inline-block `}
      >
        <div className="w-full flex flex-col h-full ">
          <EmptyBloc menuState={sidebarMenuState} height="12" />
          <MenuBloc
            Icon={VscFlame}
            title="management"
            items={[
              { name: "Wi-Fi & Hotspots", link: "" },
              { name: "Task manager", link: "" },
              { name: "Reports", link: "" },
              { name: "Alerts & Automations", link: "" },
            ]}
          />

          <MenuBloc
            Icon={VscFlame}
            title="RMS CONNECT"
            items={[
              { name: "Remote access", link: "" },
              { name: "Remote mobile devices", link: "" },
              { name: "Access history", link: "" },
            ]}
          />

          <MenuBloc
            Icon={VscFlame}
            title="RMS VPN"
            items={[
              { name: "VPN hubs", link: "" },
              { name: "VPN quick connect", link: "" },
            ]}
          />
          <MenuBloc
            Icon={VscFlame}
            title="Administration"
            items={[
              { name: "Companies", link: "" },
              { name: "Users", link: "" },
              { name: "Tags", link: "" },
              { name: "Files", link: "" },
            ]}
          />

          <div className="flex flex-row flex-grow ">
            <div
              className={`bg-teltonika-800 w-12 flex items-end justify-center cursor-pointer   `}
            >
              <div className="w-full ">
                {sidebarMenuState ? (
                  <TbChevronsLeft
                    onClick={toggleMenu}
                    className=" w-full h-12 py-3 text-white hover:bg-teltonika-900 "
                  />
                ) : (
                  <TbChevronsRight
                    onClick={toggleMenu}
                    className=" w-full h-12 py-3 text-white hover:bg-teltonika-900 "
                  />
                )}
              </div>
            </div>
            <div
              className={` bg-white ${
                sidebarMenuState
                  ? " w-52 px-5 py-3  "
                  : " w-0 h-0 overflow-hidden"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* sm screen */}
      <div
        className={`absolute bg-gray-100 bottom-0  lg:hidden transition-all duration-300 ease-out  ${
          sidebarMenuState ? "flex w-full h-[94%] " : "w-0 h-0 overflow-hidden"
        }`}
      >
        <div className="w-full flex flex-col h-full overflow-hidden">
          <MenuBlocSmScreen
            Icon={VscFlame}
            title="management"
            items={[
              { name: "Wi-Fi & Hotspots", link: "" },
              { name: "Task manager", link: "" },
              { name: "Reports", link: "" },
              { name: "Alerts & Automations", link: "" },
            ]}
          />

          <MenuBlocSmScreen
            Icon={VscFlame}
            title="RMS CONNECT"
            items={[
              { name: "Remote access", link: "" },
              { name: "Remote mobile devices", link: "" },
              { name: "Access history", link: "" },
            ]}
          />

          <MenuBlocSmScreen
            Icon={VscFlame}
            title="RMS VPN"
            items={[
              { name: "VPN hubs", link: "" },
              { name: "VPN quick connect", link: "" },
            ]}
          />
          <MenuBlocSmScreen
            Icon={VscFlame}
            title="Administration"
            items={[
              { name: "Companies", link: "" },
              { name: "Users", link: "" },
              { name: "Tags", link: "" },
              { name: "Files", link: "" },
            ]}
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full z-30 h-14 bg-white border-t border-gray-100  lg:hidden">
        <div className="w-full h-full flex items-center justify-start pl-3">
          {sidebarMenuState ? (
            <VscChromeClose
              onClick={() => {
                setSidebarMenuState(false);
              }}
              className="w-6 hover:scale-110  h-6 transition-all duration-300 ease-out cursor-pointer  text-teltonika-800"
            />
          ) : (
            <VscMenu
              onClick={() => {
                setSidebarMenuState(true);
              }}
              className="w-6 hover:scale-110  h-6 transition-all duration-300 ease-out cursor-pointer  text-teltonika-800"
            />
          )}
        </div>
       
      </div>
    </>
  );
}

export default SidebarMenuTeltonica;
