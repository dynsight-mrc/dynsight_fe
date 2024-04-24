import { LuLayoutDashboard } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsBuilding } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { BlocType } from "@/src/app/[lang]/types/sidebar.type";
import { MdOutlineSensors } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";

export const SidebarMenuItems: BlocType[] = [
  {
    Icon: LuLayoutDashboard,
    title: "Dashboards",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/admin/home" },
    ],
  },
  {
    Icon: SlLocationPin,
    title: "Sites",
    items: [
      { name: "Liste", groupLink: "", singleLink: "", link: "/admin/sites" },
      {
        name: "Ajouter un site",
        groupLink: "add",
        singleLink: "",
        link: "/admin/sites",
      },
    ],
  },
  {
    Icon: BsBuilding,
    title: "Batiments",
    items: [
      {
        name: "Liste",
        groupLink: "",
        singleLink: "",
        link: "/admin/buildings",
      },
    ],
  },
 /*  {
    Icon: HiOutlineSquare3Stack3D,
    title: "Étages",
    items: [
      {
        name: "Liste",
        groupLink: "",
        singleLink: "",
        link: "/admin/floors",
      },
    ],
  }, */
  {
    Icon: BsDoorOpen,
    title: "Espaces",
    items: [
      {
        name: "Liste",
        groupLink: "",
        singleLink: "",
        link: "/admin/spaces",
      },
    ],
  },
  {
    Icon: MdOutlineSensors,
    title: "Équipements",
    items: [
      { name: "Liste", groupLink: "", singleLink: "", link: "/admin/devices" },
    ],
  },
  {
    Icon: HiOutlineUsers,
    title: "Comptes Utilisateurs",
    items: [
      { name: "Liste", groupLink: "", singleLink: "", link: "/admin/accounts" },
    ],
  },
];
