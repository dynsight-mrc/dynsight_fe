import { BlocType} from "@/src/app/[lang]/types/sidebar.type"
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
        { name: "Accueil", link: "/co/home" ,singleLink:'',groupLink:"" },
       
      ],
    },
    {
      Icon: BsDoorOpen,
      title: "Bureaux",
      items: [
        { name: "Liste des bureaux", link: "" ,singleLink:'',groupLink:""},
       
      ],
    },
  
    {
      Icon: MdSensors,
      title: "Équipements",
      items: [
        { name: "Listes des équipements", link: "/co/devices",singleLink:'',groupLink:"" },
       
      ],
    },
    {
        Icon: RxActivityLog,
        title: "Activités",
        items: [
          { name: "Mes activités", link: "/co/monitoring",singleLink:'',groupLink:"" },
        
        ],
      },
    {
        Icon: GrSchedules,
        title: "Planification",
        items: [
          { name: "Température de consigne", link: "",singleLink:'',groupLink:"" },
        
        ],
      },
      {
        
          Icon:SlEnergy ,
          title: "Consomsation & Énergie",
          items: [
            { name: "Température de consigne", link: "" ,singleLink:'',groupLink:""},
           
          
          ],
        },
      {
        Icon: VscSettings,
        title: "Configuration",
        items: [
          { name: "Implémentations des équipements", link: "",singleLink:'',groupLink:"" },
       
        
        ],
      },
  ];