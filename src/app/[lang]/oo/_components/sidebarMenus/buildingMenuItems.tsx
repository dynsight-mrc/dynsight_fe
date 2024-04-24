import { BlocType } from "@/src/app/[lang]/types/sidebar.type";
import { BsBell, BsBuilding } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { BiLeftArrowCircle } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
export const BuildingSidebarMenuItems: BlocType[] = [
  {
    Icon: BiLeftArrowCircle,
    title: "Dashboards",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/oo/home" },
      { name: "Buildings list", groupLink: "", singleLink: "", link: "/oo/buildings" },

    ],
  },

  {
    Icon: BsBuilding,
    title: "Batiment",
    items: [
      {
        name: "Building overview",
        groupLink: "",
        singleLink: "overview",
        link: "/oo/buildings",
      },
      {
        name: "État du patrimoine",
        groupLink: "",
        singleLink: "heritage-state",
        link: "/oo/buildings",
      },
      {
        name: "Fonctionnement",
        groupLink: "",
        singleLink: "operations",
        link: "/oo/buildings",
      },
      {
        name: "Interlocuteurs",
        groupLink: "",
        singleLink: "interlocutors",
        link: "/oo/buildings",
      },
      {
        name: "Contrats",
        groupLink: "",
        singleLink: "contracts",
        link: "/oo/buildings",
      },
      {
        name: "Documents",
        groupLink: "",
        singleLink: "documents",
        link: "/oo/buildings",
      },
    ],
  },
  {
    Icon: HiOutlineSquare3Stack3D,
    title: "Plans",
    items: [
      { name: "Plans overview", groupLink: "", singleLink: "plans", link: "/oo/buildings" },
      {
        name: "Implémentations des équipements",
        groupLink: "",
        groupLinkL2:'teams-distribution',
        singleLink: "plans",
        link: "/oo/buildings",
      },
      {
        name: "Implémentations des équipes",
        groupLink: "",
        groupLinkL2:"devices-distribution",
        singleLink: "plans",
        link: "/oo/buildings",
      },
    ],
  },
  {
    Icon: MdSensors,
    title: "Équipements",
    items: [
      {
        name: "List",
        groupLink: "",
        singleLink: "devices",
        
        link: "/oo/buildings",
      },
      {
        name: "Actions Qualité Maintenance",
        groupLink: "",
        singleLink: "",
        link: "",
      },
      { name: "Paramétrage",groupLink:"", groupLinkL2: "settings", singleLink: "devices", link: "/oo/buildings" },
      { name: "Contrats", groupLink: "", groupLinkL2:"contracts",singleLink: "devices", link: "/oo/buildings" },
      { name: "Documents", groupLink: "",groupLinkL2:"documents", singleLink: "devices", link: "/oo/buildings" },
      
    ],
  },

  {
    Icon: BsTools,
    title: "Pilotage technique",
    items: [
      {
        name: "Température de consigne",
        groupLink: "",
        singleLink: "",
        link: "",
      },
      {
        name: "Planning de fonctionnement",
        groupLink: "",
        singleLink: "",
        link: "",
      },
    ],
  },
  {
    Icon: MdOutlineEnergySavingsLeaf,
    title: "Pilotage Energetique",
    items: [],
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
    title: "Activities",
    items: [
      {
        name: "Review activites",
        groupLink: "",
        singleLink: "",
        link: "/oo/activities",
      },
    ],
  },
];
