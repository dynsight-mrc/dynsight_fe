import { LuLayoutDashboard } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsBuilding } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { BlocType } from "@/src/app/[lang]/_common/types/sidebar.type";
import { BiLeftArrowCircle } from "react-icons/bi";
import { PiStackLight } from "react-icons/pi";
import { BsDoorOpen } from "react-icons/bs";

export const FloorSidebarMenuItems: BlocType[] = [
  {
    Icon: BiLeftArrowCircle,
    title: "Aperçu",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/admin/home" },
      {
        name: "Liste des immeubles",
        groupLink: "",
        singleLink: "buildings-list",
        link: "/admin/organizations",
      },
    ],
  },
  

];
