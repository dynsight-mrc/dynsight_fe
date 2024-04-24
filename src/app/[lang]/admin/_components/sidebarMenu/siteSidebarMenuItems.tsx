import { SlLocationPin } from "react-icons/sl";
import { BlocType } from "@/src/app/[lang]/types/sidebar.type";
import { BiLeftArrowCircle } from "react-icons/bi";

export const SiteSidebarMenuItems: BlocType[] = [
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
    Icon: SlLocationPin,
    title: "Gestion du site",
    items: [
      {
        name: "Site Overview",
        groupLink: "",
        singleLink: "overview",
        link: "/admin/sites",
      },
      {
        name: "Change site info",
        groupLink: "",
        singleLink: "parameters",
        link: "/admin/sites",
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
    ],
  },
];
