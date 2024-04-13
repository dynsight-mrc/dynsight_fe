import React, { useState } from "react";
import { TbChevronsLeft } from "react-icons/tb";
import { TbChevronsRight } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";

import Link from "next/link";
import { useRecoilState } from "recoil";
import { sidebarMenuStateAtom } from "@/src/atoms/sidbar-menu-state-atom";

import { BlocItemType, BlocType, } from "./_types/bloc.type";


function MenuBlocItem({ name, link }: BlocItemType) {
  return (
    <Link
      href={link}
      className="text-gray-500 font-normal font-opensans hover:text-gray-600 hover:translate-x-3 transition-all duration-400 ease-out text-base tracking-wide cursor-pointer "
    >
      {name}
    </Link>
  );
}

function MenuBloc({ Icon, title, items }: BlocType) {
  const [sidebarMenuState, setSidebarMenuState] =
    useRecoilState(sidebarMenuStateAtom);

  return (
    <div className="relative group w-full flex flex-row">
      <div
        className={`bg-teltonika-800 pt-1  w-12   flex-none  items-start justify-center cursor-pointer  `}
      >
        <div className="w-full group relative overflow-hidden">
          <Icon
            className={` w-full h-10 py-2 text-white  ${
              sidebarMenuState
                ? "hover:bg-teltonika-900 "
                : "group-hover:bg-white group-hover:text-teltonika-800 "
            }`}
          />
          {/* <MdPlayArrow className=" w-5 text-teltonika-800 group-hover:text-white h-5 absolute rotate-180 p-0 top-4 -right-2 "/> */}
        </div>
      </div>
      <div
        className={` bg-white ${
          sidebarMenuState ? " w-60 pl-6 py-3 " : "w-0 h-0 overflow-hidden "
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
      <div
        className={`bg-white w-60 left-12 absolute z-10 pl-5 py-3 ${
          sidebarMenuState ? "hidden" : "hidden group-hover:inline-block shadow-md border border-gray-100"
        } `}
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
          sidebarMenuState ? " w-60 pl-5 py-3 " : "w-0 h-0 overflow-hidden"
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
        className={`bg-teltonika-800 w-12 h-${height} flex-initial flex items-start justify-center cursor-pointer`}
      ></div>
      <div
        className={`bg-white  flex-1 ${
          menuState ? " w-60 px-5 py-3" : "w-0 h-0 overflow-hidden"
        }`}
      ></div>
    </div>
  );
}

function SidebarMenuTeltonica({ items }: { items: BlocType[] }) {
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
          sidebarMenuState ? "sm:w-72 overflow-y-auto overflow-x-hidden" : "sm:w-12"
        } absolute h-screen min-h-screen font-opensans hidden lg:inline-block `}
      >
        <div className="w-full flex flex-col h-full ">
          <EmptyBloc menuState={sidebarMenuState} height="12" />

          {items.map((ele) => (
            <MenuBloc Icon={ele.Icon} title={ele.title} items={ele.items} />
          ))}

          <div className="flex flex-row flex-grow ">
            <div
              className={`bg-teltonika-800 w-12 flex-initial flex items-end justify-center cursor-pointer   `}
            >
              <div className="w-full  ">
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
              className={` bg-white flex-1 ${
                sidebarMenuState
                  ? " w-60 px-5 py-3  "
                  : " w-0 h-0 overflow-hidden"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* sm screen */}
      <div
        className={`absolute bg-gray-100 bottom-0  lg:hidden transition-all duration-300 ease-out  ${
          sidebarMenuState
            ? "flex w-full h-screen  pt-20"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <div className="w-full flex flex-col h-full overflow-y-auto">
          {items.map((ele) => (
            <MenuBlocSmScreen
              Icon={ele.Icon}
              title={ele.title}
              items={ele.items}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full z-10 h-14 bg-white border-t border-gray-100  lg:hidden">
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
