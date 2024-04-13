import { BlocType, BlocItemType } from "../_types/types";
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
        { name: "Accueil", link: "/oo/home" },
       
      ],
    },
    {
      Icon: SlLocationPin,
      title: "Sites",
      items: [
        { name: "Carte d'identité", link: "/oo/buildings" },
        { name: "Fonctionnement", link: "" },
        { name: "Interlocuteurs", link: "" },
        { name: "Plan de masse", link: "" },
        { name: "Contrats", link: "" },
        { name: "Documents", link: "" },
      ],
    },
    {
        Icon: BsBuilding,
        title: "Batiment",
        items: [
          { name: "Carte d'identité", link: "/oo/buildings" },
          { name: "État du patrimoine", link: "" },
          { name: "Fonctionnement", link: "" },
          { name: "Interlocuteurs", link: "" },
          { name: "Contrats", link: "" },
          { name: "Documents", link: "" },
        ],
      },
    {
      Icon: MdSensors,
      title: "Équipements",
      items: [
        { name: "Infos", link: "" },
        { name: "Synoptique", link: "" },
        { name: "Actions Qualité Maintenance", link: "" },
        { name: "Paramétrage", link: "" },
        { name: "Contrats", link: "" },
          { name: "Documents", link: "" },
        { name: "Photos", link: "" },
      ],
    },
    {
        Icon: HiOutlineSquare3Stack3D,
        title: "Pans",
        items: [
          { name: "Implémentations des équipements", link: "" },
          { name: "Implémentations des équipes", link: "" },
        
        ],
      },
    {

        Icon: BsTools,
        title: "Pilotage technique",
        items: [
          { name: "Température de consigne", link: "" },
          { name: "Planning de fonctionnement", link: "" },
        
        ],
      },
      {
        Icon: MdOutlineEnergySavingsLeaf,
        title: "Pilotage Energetique",
        items: [
          { name: "Implémentations des équipements", link: "" },
          { name: "Implémentations des équipes", link: "" },
        
        ],
      },
  ];