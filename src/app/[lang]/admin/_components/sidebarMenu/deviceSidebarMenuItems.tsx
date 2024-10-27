import { MdOutlineSensors } from "react-icons/md";
import { BlocType } from "@/src/app/[lang]/_common/types/sidebar.type";
import { BiLeftArrowCircle } from "react-icons/bi";

export const DeviceSidebarMenuItems: BlocType[] = [
  {
    Icon: BiLeftArrowCircle,
    title: "Aperçu",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/admin/home" },
      {
        name: "Liste des équipments",
        groupLink: "",
        singleLink: "",
        link: "/admin/devices",
      },
      {
        name: "Liste des immeubles",
        groupLink: "",
        singleLink: "",
        link: "/admin/buildings",
      },
      {
        name: "Liste des organisations",
        groupLink: "",
        singleLink: "",
        link: "/admin/organizations",
      },
    ],
  },
  {
    Icon: MdOutlineSensors,
    title: "Gestion d'équipment",
    items: [
      {
        name: "Apperçu d'équipement",
        groupLink: "",
        singleLink: "overview",
        link: "/admin/devices",
      },
    
    ],
  },
];
