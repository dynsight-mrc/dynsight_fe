import { BlocType, BlocItemType } from "../_types/types";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsBuilding } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";

export const menu: BlocType[] = [
    {
      Icon: LuLayoutDashboard,
      title: "Dashboards",
      items: [
        { name: "Accueil", link: "" },
       
      ],
    },
    {
      Icon: SlLocationPin,
      title: "Gestion des sites",
      items: [
        { name: "Liste des sites", link: "" },
       
      ],
    },
    {
        Icon: BsBuilding,
        title: "Gestions des Batiments",
        items: [
          { name: "Liste des batiments", link: "" },
       
        ],
      },
    {
      Icon: HiOutlineUsers,
      title: "Gestions des comptes",
      items: [
        { name: "Listes des comptes", link: "" },
      
      ],
    },
    
  ];