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
import { SlEnergy } from "react-icons/sl";
import { BsBell } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { BiLeftArrowCircle } from "react-icons/bi";

export const DeviceMenuItems: BlocType[] = [
  {
    Icon: BiLeftArrowCircle,
    title: "Dashboards",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/oo/home" },
      {
        name: "Buildings list",
        groupLink: "",
        singleLink: "",
        link: "/oo/buildings",
      },
    ],
  },
  {
    Icon: MdSensors,
    title: "Équipement",
    items: [
      {
        name: "Overview",
        groupLink: "",
        singleLink: "devices",
        singleLinkL2: "overview",
        link: "/oo/buildings",
      },
      {
        name: "Synoptique",
        groupLink: "",
        singleLink: "devices",
        singleLinkL2: "synoptic",
        link: "/oo/buildings",
      },
      {
        name: "Actions Qualité Maintenance",
        groupLink: "",
        singleLink: "devices",
        singleLinkL2:'maintenane-quality-actions',
        link: "/oo/buildings",
      },
      { name: "Paramétrage", groupLink: "", singleLink: "", link: "" },
      { name: "Contrats", groupLink: "", singleLink: "", link: "" },
      { name: "Documents", groupLink: "", singleLink: "", link: "" },
      { name: "Photos", groupLink: "",singleLinkL2:"photos", singleLink: "devices", link: "/oo/buildings" },
    ],
  },
];
