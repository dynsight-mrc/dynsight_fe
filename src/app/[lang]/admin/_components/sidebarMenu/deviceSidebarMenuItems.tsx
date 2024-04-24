import { MdOutlineSensors } from "react-icons/md";
import { BlocType } from "@/src/app/[lang]/types/sidebar.type";
import { BiLeftArrowCircle } from "react-icons/bi";

export const DeviceSidebarMenuItems: BlocType[] = [
  {
    Icon: BiLeftArrowCircle,
    title: "Sites overview",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/admin/home" },
      {
        name: "Liste des sites",
        groupLink: "",
        singleLink: "",
        link: "/admin/sites",
      },
    ],
  },
  {
    Icon: MdOutlineSensors,
    title: "Gestion d'équipment",
    items: [
      {
        name: "Device Overview",
        groupLink: "",
        singleLink: "overview",
        link: "/admin/devices",
      },
      {
        name: "Buildings List",
        groupLink: "",
        singleLink: "buildings-list",
        link: "/admin/sites",
      },

      {
        name: "Add building",
        groupLink: "",
        singleLink: "add-building",
        link: "/admin/sites",
      },
      {
        name: "Change site info",
        groupLink: "",
        singleLink: "parameters",
        link: "/admin/sites",
      },
    ],
  },
];
