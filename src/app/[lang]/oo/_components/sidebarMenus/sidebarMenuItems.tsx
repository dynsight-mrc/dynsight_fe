import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { BlocType } from "@/src/app/[lang]/types/sidebar.type";
import { SlEnergy } from "react-icons/sl";
import { BsBell } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";


export const SidebarMenuItems: BlocType[] = [
  {
    Icon: LuLayoutDashboard,
    title: "Dashboards",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/oo/home" },
      { name: "Buildings list", groupLink: "", singleLink: "", link: "/oo/buildings" },
    ],
  },
  {
    Icon: SlEnergy,
    title: "Energy",
    items: [
      { name: "Energy consumption", groupLink: "", singleLink: "", link: "/oo/energy-consumption" },
      
    ],
  },
  {
    Icon: BsBell,
    title: "Alerts",
    items: [
      {
        name: "Review alerts",
        groupLink: "",
        singleLink: "",
        link: "/oo/alerts",
      },
    ],
  },
  {
    Icon: VscTools,
    title: "Accountability",
    items: [
      {
        name: "Review activites",
        groupLink: "",
        singleLink: "",
        link: "/oo/accountability",
      },
    ],
  },
  {
    Icon: HiOutlineUsers,
    title: "Users",
    items: [
      {
        name: "Users list",
        groupLink: "",
        singleLink: "",
        link: "/oo/users",
      },
    ],
  },
 
 
];
