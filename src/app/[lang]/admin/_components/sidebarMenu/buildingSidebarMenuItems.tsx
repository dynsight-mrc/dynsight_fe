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

export const BuildingSidebarMenuItems: BlocType[] = [
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
  {
    Icon: BsBuilding,
    title: "Gestion du Batiment",
    items: [
      {
        name: "Aperçu du bâtiment",
        groupLink: "",
        singleLink: "overview",
        link: "/admin/buildings",
      },

      {
        name: "Modifier informations",
        groupLink: "",
        singleLink: "parameters",
        link: "/admin/buildings",
      },
    ],
  },
  {
    Icon: PiStackLight,
    title: "Gestion des étages",
    items: [
      {
        name: "Liste des étages",
        
        groupLink:"",
        singleLink: "floors",
        link: "/admin/buildings",
      },

      {
        name: "Ajouter un étage",
        groupLink: "",
        groupLinkL2:"add",
        singleLink: "floors",
        link: "/admin/buildings",
      },
    ],
  },
  {
    Icon: BsDoorOpen,
    title: "Gestion des blocs",
    items: [
      {
        name: "Liste des blocs",
        groupLink: "",
        
        singleLink: "blocs",
        link: "/admin/buildings",
      },

      {
        name: "Ajouter un bloc",
        groupLink: "",
        groupLinkL2:"add",
        singleLink: "blocs",
        link: "/admin/buildings",
      },
      
    ],
  },

  {
    Icon: BsDoorOpen,
    title: "Gestion des équipements",
    items: [
      {
        name: "liste des équipements",
        groupLink: "",
        singleLink: "devices",
        link: "/admin/buildings",
      },

      {
        name: "Connecter nouvel equip.",
        groupLink: "",
        groupLinkL2:"connect",
        singleLink: "devices",
        link: "/admin/buildings",
      },
      
    ],
  },

];
