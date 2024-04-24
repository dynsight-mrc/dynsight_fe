import { LuLayoutDashboard } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsBuilding } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { BlocType } from "@/src/app/[lang]/types/sidebar.type";
import { BiLeftArrowCircle } from "react-icons/bi";
import { PiStackLight } from "react-icons/pi";
import { BsDoorOpen } from "react-icons/bs";

export const BuildingSidebarMenuItems: BlocType[] = [
  {
    Icon: BiLeftArrowCircle,
    title: "Buildings Overview",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/admin/home" },
      {
        name: "Liste des batiments",
        groupLink: "",
        singleLink: "buildings-list",
        link: "/admin/sites",
      },
    ],
  },
  {
    Icon: BsBuilding,
    title: "Gestion du Batiment",
    items: [
      {
        name: "Building overview",
        groupLink: "",
        singleLink: "overview",
        link: "/admin/buildings",
      },

      {
        name: "Change building info",
        groupLink: "",
        singleLink: "parameters",
        link: "/admin/buildings",
      },
    ],
  },
  {
    Icon: PiStackLight,
    title: "Gestion des etages",
    items: [
      {
        name: "Floors list",
        groupLink: "",
        singleLink: "floors-list",
        link: "/admin/buildings",
      },

      {
        name: "Add floor",
        groupLink: "",
        singleLink: "add-floor",
        link: "/admin/buildings",
      },
    ],
  },
  {
    Icon: BsDoorOpen,
    title: "Gestion des espaces",
    items: [
      {
        name: "Spaces list",
        groupLink: "",
        singleLink: "spaces-list",
        link: "/admin/buildings",
      },

      {
        name: "Add space",
        groupLink: "",
        singleLink: "add-space",
        link: "/admin/buildings",
      },
      
    ],
  },

  {
    Icon: BsDoorOpen,
    title: "Gestion des équipements",
    items: [
      {
        name: "Devices list",
        groupLink: "",
        singleLink: "spaces-list",
        link: "/admin/buildings",
      },

      {
        name: "Connect device",
        groupLink: "",
        singleLink: "connect-device",
        link: "/admin/buildings",
      },
      
    ],
  },

];
