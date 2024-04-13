import { BlocType, BlocItemType } from "../_types/types";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { BsBuilding } from "react-icons/bs";
import { MdSensors } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { VscSettings } from "react-icons/vsc";
import { BsDoorOpen } from "react-icons/bs";
export const menu: BlocType[] = [
    {
      Icon: LuLayoutDashboard,
      title: "Dashboards",
      items: [
        { name: "Accueil", link: "/co/home" },
       
      ],
    },
    {
      Icon: BsDoorOpen,
      title: "Bureaux",
      items: [
        { name: "Liste des bureaux", link: "" },
       
      ],
    },
  
    {
      Icon: MdSensors,
      title: "Équipements",
      items: [
        { name: "Listes des équipements", link: "/co/devices" },
       
      ],
    },
    {
        Icon: RxActivityLog,
        title: "Activités",
        items: [
          { name: "Mes activités", link: "/co/monitoring" },
        
        ],
      },
    {
        Icon: GrSchedules,
        title: "Planification",
        items: [
          { name: "Température de consigne", link: "" },
        
        ],
      },
      {
        
          Icon:SlEnergy ,
          title: "Consomsation & Énergie",
          items: [
            { name: "Température de consigne", link: "" },
           
          
          ],
        },
      {
        Icon: VscSettings,
        title: "Configuration",
        items: [
          { name: "Implémentations des équipements", link: "" },
       
        
        ],
      },
  ];