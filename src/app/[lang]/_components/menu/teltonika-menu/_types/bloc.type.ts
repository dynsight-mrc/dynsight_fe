import { IconType } from "react-icons";

export type BlocItemType = {
  name: string;
  groupLink: string;
  groupLinkL2?: string;
  singleLink: string;
  singleLinkL2?: string;
  link: string;
  };
export  type BlocType = {
    Icon: IconType;
    title: string;
    items: BlocItemType[];
  };