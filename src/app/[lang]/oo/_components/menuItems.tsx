import { BlocType } from "@/src/app/[lang]/types/sidebar.type";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsBuilding } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
export const menu: BlocType[] = [
  {
    Icon: LuLayoutDashboard,
    title: "Dashboards",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/oo/home" },
    ],
  },
  {
    Icon: SlLocationPin,
    title: "Sites",
    items: [
      { name: "Carte d'identité", groupLink: "", singleLink: "", link: "/oo/buildings" },
      { name: "Fonctionnement",  groupLink: "", singleLink: "",          link: "" },
      { name: "Interlocuteurs",groupLink: "", singleLink: "", link: "" },
      { name: "Plan de masse",groupLink: "", singleLink: "", link: "" },
      { name: "Contrats", groupLink: "", singleLink: "",link: "" },
      { name: "Documents",groupLink: "", singleLink: "", link: "" },
    ],
  },
  {
    Icon: BsBuilding,
    title: "Batiment",
    items: [
      { name: "Carte d'identité",groupLink: "", singleLink: "", link: "/oo/buildings" },
      { name: "État du patrimoine", groupLink: "", singleLink: "",link: "" },
      { name: "Fonctionnement",groupLink: "", singleLink: "", link: "" },
      { name: "Interlocuteurs", groupLink: "", singleLink: "",link: "" },
      { name: "Contrats", groupLink: "", singleLink: "",link: "" },
      { name: "Documents", groupLink: "", singleLink: "",link: "" },
    ],
  },
  {
    Icon: MdSensors,
    title: "Équipements",
    items: [
      { name: "Infos", groupLink: "", singleLink: "",link: "" },
      { name: "Synoptique", groupLink: "", singleLink: "",link: "" },
      { name: "Actions Qualité Maintenance",groupLink: "", singleLink: "", link: "" },
      { name: "Paramétrage",groupLink: "", singleLink: "",link: "" },
      { name: "Contrats", groupLink: "", singleLink: "",link: "" },
      { name: "Documents",groupLink: "", singleLink: "", link: "" },
      { name: "Photos", groupLink: "", singleLink: "",link: "" },
    ],
  },
  {
    Icon: HiOutlineSquare3Stack3D,
    title: "Pans",
    items: [
      { name: "Implémentations des équipements",groupLink: "", singleLink: "", link: "" },
      { name: "Implémentations des équipes", groupLink: "", singleLink: "",link: "" },
    ],
  },
  {
    Icon: BsTools,
    title: "Pilotage technique",
    items: [
      { name: "Température de consigne",groupLink: "", singleLink: "", link: "" },
      { name: "Planning de fonctionnement",groupLink: "", singleLink: "", link: "" },
    ],
  },
  {
    Icon: MdOutlineEnergySavingsLeaf,
    title: "Pilotage Energetique",
    items: [
      { name: "Implémentations des équipements", groupLink: "", singleLink: "",link: "" },
      { name: "Implémentations des équipes", groupLink: "", singleLink: "",link: "" },
    ],
  },
];
