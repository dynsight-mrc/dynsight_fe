import { IconType } from "react-icons";

export type BlocItemType = {
    name: string;
    link: string;
  };
export  type BlocType = {
    Icon: IconType;
    title: string;
    items: BlocItemType[];
  };