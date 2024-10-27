import { SlLocationPin } from "react-icons/sl";
import { BlocType } from "@/src/app/[lang]/_common/types/sidebar.type";
import { BiLeftArrowCircle } from "react-icons/bi";

export const OrganizationSidebarMenuItems: BlocType[] = [
  {
    Icon: BiLeftArrowCircle,
    title: "Apercu",
    items: [
      { name: "Accueil", groupLink: "", singleLink: "", link: "/admin/home" },
      {
        name: "Liste des organizations",
        groupLink: "",
        singleLink: "",
        link: "/admin/organizations",
      },
    ],
  },
  {
    Icon: SlLocationPin,
    title: "Gestion d'organisation",
    items: [
      {
        name: "Apperçu de l'organisation",
        groupLink: "",
        singleLink: "overview",
        link: "/admin/organizations",
      },
    /*   {
        name: "Paramètres",
        groupLink: "",
        singleLink: "parameters",
        link: "/admin/organizations",
      }, */
      {
        name: "Immeubles",
        groupLink: "",
        singleLink: "buildings",
        link: "/admin/organizations",
      },
      {
        name: "Utilisateurs",
        groupLink: "",
        singleLink: "users",
        link: "/admin/organizations",
      },
      
    ],
  },

  {
    Icon: SlLocationPin,
    title: "Paramètres",
    items: [
      {
        name: "Modifier détails",
        groupLink: "",
        singleLink: "parameters",
        groupLinkL2:"",
        link: "/admin/organizations",
      },
      {
        name: "Ajouter immeuble",
        groupLink: "",
        singleLink: "buildings",
        groupLinkL2:"add",
        link: "/admin/organizations",
      },
      
      
    ],
  },
];
